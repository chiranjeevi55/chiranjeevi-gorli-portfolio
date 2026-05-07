const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300";

export default function ContactForm() {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        border border-slate-200
        shadow-xl shadow-black/10
        p-6 md:p-8
      "
    >
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Send a message
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className={inputBase}
        />

        <input
          type="email"
          placeholder="Your email"
          className={inputBase}
        />

        <textarea
          rows={5}
          placeholder="Your message"
          className={`${inputBase} resize-none`}
        />

        {/* Apple‑glass button */}
        <button
          type="submit"
          className="
            mt-2
            inline-flex items-center justify-center
            rounded-full
            px-6 py-2.5
            text-sm font-semibold
            bg-slate-900 text-white
            hover:bg-slate-800
            transition
          "
        >
          Send message
        </button>
      </form>
    </div>
  );
}