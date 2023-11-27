'use client';

export default function GlobalError({
  error,
}: //   reset,
{
  error: Error;
  //   reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => console.log(error.message)}>Try again</button>
      </body>
    </html>
  );
}
