export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto py-10">
      <h1 className="text-3xl font-bold text-sky-400 mb-6 text-center">Contact Us</h1>
      <form className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-slate-950 border border-slate-800 focus:outline-none focus:border-sky-400 text-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-slate-950 border border-slate-800 focus:outline-none focus:border-sky-400 text-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md bg-slate-950 border border-slate-800 focus:outline-none focus:border-sky-400 text-slate-100"
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-2 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}