import React from 'react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; resetKey?: any },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; resetKey?: any }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: { resetKey?: any }) {
    if (this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
          <div className="max-w-md w-full p-6 border border-border bg-card rounded-lg shadow-xl">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-destructive">Something went wrong</h2>
            <p className="text-muted-foreground text-sm mb-6 overflow-auto">
              {this.state.error?.message}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium w-full"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
