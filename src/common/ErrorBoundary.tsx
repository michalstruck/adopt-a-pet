import * as React from "react";
import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";

interface State {
  hasError: boolean;
  redirect: boolean;
}

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
        <div className="grid h-screen w-screen place-items-center">
          <h1 className="text-2xl font-bold ">
            This listing has an error.{" \n"}
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
