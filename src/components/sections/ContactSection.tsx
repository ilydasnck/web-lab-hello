import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          İletişim
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
