import { organizations } from "../../data/organizations";
import OrganizationSection from "./components/OrganizationSection";

export default function CareerPage() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-14">

      <div className="space-y-12">
        {organizations.map((org) => (
          <OrganizationSection key={org.id} organization={org} />
        ))}
      </div>
    </section>
  );
}