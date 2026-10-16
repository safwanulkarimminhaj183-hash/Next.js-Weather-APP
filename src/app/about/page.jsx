export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <h1 className="text-3xl font-bold text-sky-400">About Our Weather App</h1>
      <p className="text-slate-300 leading-relaxed">
        Our Weather App provides simple, fast, and reliable real-time weather forecasts.
        Built with Modern Next.js (App Router) and styled with Tailwind CSS, this app uses Open-Meteo’s free API service to get accurate local weather metrics.
      </p>
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mt-4">
        <h2 className="text-lg font-semibold text-sky-300 mb-2">Key Tech Stack:</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li>Next.js (App Router)</li>
          <li>Tailwind CSS</li>
          <li>Open-Meteo Free API</li>
        </ul>
      </div>
    </div>
  );
}