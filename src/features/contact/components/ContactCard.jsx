import React from "react";

/* Shared section title style (consistent with your theme) */
const sectionTitle =
  "text-xs font-semibold uppercase tracking-wide text-slate-500";

/* ✅ Open mail client with pre-filled subject & body */
const openMail = () => {
  const email = "chiranjeeviraghu555@gmail.com";

  const subject = encodeURIComponent(
    "Contact from Portfolio Website"
  );

  const body = encodeURIComponent(
`Hi Chiranjeevi,

I came across your portfolio and would like to connect with you.

Name:
Company / Context:
Message:

Best regards,
`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const ContactCard = () => {
  return (
    <div
      className="
        rounded-3xl
        bg-white/70
        backdrop-blur-xl
        border border-white/40
        shadow-xl shadow-black/10
        p-6 md:p-8
      "
    >
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Let’s connect
      </h2>

      <p className="text-sm text-slate-700 leading-relaxed mb-6">
        I’m always open to discussing new opportunities, challenging projects,
        or collaborations. Feel free to reach out.
      </p>

      {/* Contact details */}
      <div className="space-y-4 text-sm text-slate-700 mb-6">
        <div>
          <div className={sectionTitle}>Email</div>
          <p className="mt-1 font-medium">
            chiranjeeviraghu555@gmail.com
          </p>
        </div>

        <div>
          <div className={sectionTitle}>Location</div>
          <p className="mt-1">Hyderabad, India</p>
        </div>
      </div>

      {/* ✅ Open Email button (glass / Apple-like) */}
      <button
        type="button"
        onClick={openMail}
        className="
          inline-flex items-center justify-center
          rounded-full
          px-5 py-2.5
          text-sm font-semibold
          bg-white/15
          backdrop-blur-xl
          border border-white/25
          ring-1 ring-white/15
          shadow-[0_8px_20px_rgba(0,0,0,0.12)]
          text-slate-900
          hover:bg-white/20
          transition
        "
      >
        Open Email →
      </button>
    </div>
  );
};

export default ContactCard;