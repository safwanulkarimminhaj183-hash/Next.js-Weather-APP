export default function WeatherCard({data}){
    if(!data) return <p className="text-center">Loading weather data...</p>;
    return(
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl max-w-md mx-auto my-6">
            <h2 className="text-xl font-bold text-sky-400 mb-4 text-center">
                Current Weather (Sylhet)
            </h2>
            <div className="space-y-3">
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400">Temperature:</span>
          <span className="font-semibold">{data.current_weather?.temperature} °C</span>
        </div>
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400">Time:</span>
          <span className="font-semibold">{data.current_weather?.time}</span>
        </div>
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400">Update Interval:</span>
          <span className="font-semibold">{data.current_weather_interval} seconds</span>
        </div>
        <div className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-400">Humidity:</span>
          <span className="font-semibold">{data.hourly?.relative_humidity_2m?.[0]}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Wind Speed:</span>
          <span className="font-semibold">{data.current_weather?.windspeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
        