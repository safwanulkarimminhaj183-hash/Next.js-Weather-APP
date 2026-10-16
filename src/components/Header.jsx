import Link from 'next/link';
export default function Header(){
    return(
        <header className="bg-slate-900 text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-sky-400">WeatherApp</h1>
                <div className="flex gap-6">
                    <Link className="hover:text-sky-400 transition" href="/">home</Link>
                    <Link className="hover:text-sky-400 transition" href="/about">About</Link>
          <Link className="hover:text-sky-400 transition" href="/services">Services</Link>
          <Link className="hover:text-sky-400 transition" href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
};
