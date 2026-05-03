import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-14">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ContactCard />
        <ContactForm />
      </div>
    </section>
  );
}