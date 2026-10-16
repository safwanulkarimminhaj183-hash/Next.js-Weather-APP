export default function ServicePage(){
    const services = [
        {titile: 'Real-time Temperature', desc:'Accurate and up-to-date current temperature monitoring'},
        { title: 'Humidity Levels', desc: 'Track relative humidity percentages in real time.' },
    { title: 'Wind Speed Reports', desc: 'Get current wind velocity updates in kilometers per hour.' },
    { title: 'Update Intervals', desc: 'Regular interval-based updates to stay informed about weather changes.' },
    ];

    return(
        <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-sky-400 mb-6 text-center">Our Weather Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service,index)=>(
            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-semibold text-sky-300 mb-2">{service.title}</h2>
            <p className="text-slate-400">{service.desc}</p>
            </div>
    ))}
    </div>
    </div>
    );

}


















