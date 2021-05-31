const parseJSON = response => {
  if (response.status === 204 || response.status === 205) return null;

  return response.json();
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) return response;
  const error = {
    message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
    url: response.url,
    status: response.status,
    statusText: response.statusText
  };

  return new Promise((resolve, reject) => {
    response
      .json()
      .then(err => {
        error.message = err.data.message;
        reject(error);
      })
      .catch(() => {
        reject(error);
      });
  });
};

export const defaultHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  };

  if (!localStorage.token) delete headers.Authorization;

  return headers;
};

export default (urlRequest, method = 'GET', body) => {
  const options = {
    method: method,
    headers: defaultHeaders(),
    body: JSON.stringify(body)
  };

  if (method === 'GET') delete options.body;

  const requestURL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

  return fetch(`${requestURL}${urlRequest}`, options)
    .then(checkStatus)
    .then(parseJSON);
};
