/**
 * Archivo para el handler de errores
 * @module ErrorBoundary
 */
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      console.log(error);
      return <h2>Error 500. Ocurrio un error en el servidor</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
