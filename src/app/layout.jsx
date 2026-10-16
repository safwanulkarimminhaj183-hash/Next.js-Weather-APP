import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata={
    title:'weather-App',
    description:'Simple Next.js Weather App',
};
export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Header/>
        <main className="flex-1 max-w-6xl w-full mx-auto p-4">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}