import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";

interface State {
  hasError: boolean;
  redirect: boolean;
}

class ErrorBoundary extends Component<any, State> {
  constructor() {
    super({});
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError(): State {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate(): void {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render(): ReactNode {
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
