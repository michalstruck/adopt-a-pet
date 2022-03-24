import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error");
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div className="h-screen w-screen grid place-items-center">
          <h1 className="text-2xl font-bold ">
            This listing has an error.{" "}
            <Link to="/">
              <u>Click here</u>
            </Link>{" "}
            to go back to the home page or wait 5 seconds
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
