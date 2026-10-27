'use client';

export default function GlobalError({ reset, }: {
  error: Error & { digest?:string };
  reset: () => void;
}) {
  return (
    <html lang="eng">
      <body style={{ padding: 24 }}>
        <h1>Something went wrong</h1>
        <p>The page encountered an unexpected error.</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
