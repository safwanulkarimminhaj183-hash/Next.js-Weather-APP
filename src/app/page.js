import WeatherCard from '@/components/WeatherCard';

async function getWeatherData() {
  // Open-Meteo API for Sylhet coordinates
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=24.8949&longitude=91.8687&current_weather=true&hourly=relative_humidity_2m',
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return res.json();
}

export default async function HomePage() {
  const weatherData = await getWeatherData();

  return (
    <div className="space-y-8 py-6">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold text-sky-400 mb-2">Welcome to WeatherApp</h1>
        <p className="text-slate-400">Get current weather updates easily and quickly.</p>
      </section>

      {/* Weather Display */}
      <WeatherCard data={weatherData} />

      {/* About Section on Home Page */}
      <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-sky-400 mb-2">About This Application</h2>
        <p className="text-slate-300">
          This Weather App is built using Next.js and Tailwind CSS. It uses the free Open-Meteo API to provide real-time weather information including temperature, humidity, and wind speed.
        </p>
      </section>
    </div>
  );
}