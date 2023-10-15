"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-extrabold text-4xl">❗️Something went wrong!❗️</h2>
          <span className="font-bold text-2xl">{error.message}</span>
          <button className="border-2 p-2 bg-emerald-600 text-white rounded-xl shadow-xl" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
