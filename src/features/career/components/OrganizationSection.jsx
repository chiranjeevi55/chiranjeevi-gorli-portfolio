import RoleCard from "./RoleCard";

const sectionTitle =
  "text-xs font-semibold uppercase tracking-wide text-slate-500";

export default function OrganizationSection({ organization }) {
  const { name, location, roles } = organization;

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
      {/* Organization header */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">
          {name}
        </h2>
        <p className="text-sm text-slate-600">{location}</p>
      </div>

      {/* Roles */}
      <div className="space-y-6">
        {roles.map((role, idx) => (
          <RoleCard key={idx} role={role} />
        ))}
      </div>
    </div>
  );
}