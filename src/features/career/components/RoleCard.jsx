const chipBase =
  "text-[11px] px-2 py-1 rounded-lg border border-slate-200 bg-white/70 text-slate-700";

const sectionTitle =
  "text-xs font-semibold uppercase tracking-wide text-slate-500";

export default function RoleCard({ role }) {
  const { title, start, end, keyWork, techFocus } = role;

  return (
    <div
      className="
        rounded-2xl
        bg-white
        border border-slate-200
        shadow-md shadow-black/5
        p-5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-slate-900">
          {title}
        </h3>
        <span className="text-xs text-slate-500 whitespace-nowrap">
          {start} – {end}
        </span>
      </div>

      {/* Key Work */}
      {keyWork?.length > 0 && (
        <div className="mt-4">
          <div className={sectionTitle}>Key Work</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc list-inside">
            {keyWork.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {techFocus?.length > 0 && (
        <div className="mt-4">
          <div className={sectionTitle}>Tech Stack</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {techFocus.map((tech) => (
              <span key={tech} className={chipBase}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}