"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>An error occurred</h1>
      <pre>{error.message}</pre>
      {error.digest && <pre>{error.digest}</pre>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
