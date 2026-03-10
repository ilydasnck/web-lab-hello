import { useState, useEffect } from "react";
import { Button, Input, Card } from "./components";
import UIKit from "./pages/UIKit";

function App() {
  const [page, setPage] = useState(window.location.hash);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onHash = () => setPage(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  if (page === "#uikit") return <UIKit />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.trim().length < 3)
      newErrors.name = "En az 3 karakter giriniz";
    if (!formData.email) newErrors.email = "Email gereklidir";
    if (formData.message.trim().length < 10)
      newErrors.message = "Mesaj en az 10 karakter olmalıdır";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            İlayda Şenocak
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#uikit" className="px-3 py-1 rounded-md text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Tema değiştir"
          >
            <span className="dark:hidden">&#9790;</span>
            <span className="hidden dark:inline">&#9728;</span>
          </button>
        </div>
      </header>

      <main id="main-content">

        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://picsum.photos/seed/ilayda/400/400"
                alt="İlayda Şenocak profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Ben İlayda Şenocak. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.
                Mobil uygulama geliştirme ve veri analizi alanlarına ilgi duyuyorum.
                Modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                {["React", "React Native", "JavaScript", "Tailwind", "C#", "HTML5"].map((skill) => (
                  <li key={skill} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="Rotam Cepte"
                image="https://picsum.photos/seed/rotam/600/400"
                imageAlt="Rotam Cepte uygulama ekranı"
                footer={
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">GitHub</Button>
                    <Button size="sm" variant="primary">İncele</Button>
                  </div>
                }
              >
                Konum tabanlı gezi asistanı. Tarihi rotaları keşfetmeyi kolaylaştıran mobil deneyim.
              </Card>

              <Card
                variant="elevated"
                title="Maskot"
                image="https://picsum.photos/seed/maskot/600/400"
                imageAlt="Maskot analiz ekranı"
                footer={
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">GitHub</Button>
                    <Button size="sm" variant="primary">İncele</Button>
                  </div>
                }
              >
                Enerji verilerini analiz ederek tasarruf önerileri üreten çevre dostu uygulama.
              </Card>

              <Card
                variant="elevated"
                title="Portföy Sitesi"
                image="https://picsum.photos/seed/webdesign/600/400"
                imageAlt="Portföy sitesi ekranı"
                footer={
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">GitHub</Button>
                    <Button size="sm" variant="primary">İncele</Button>
                  </div>
                }
              >
                React ve Tailwind CSS ile oluşturulmuş kişisel portföy sayfası.
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>

            {submitted && (
              <div role="alert" className="mb-6 border-l-4 rounded-r-lg p-4 bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200">
                <p className="font-semibold">Mesajınız gönderildi!</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <Input
                id="name"
                label="Ad Soyad"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-lg border transition-colors focus:ring-2 focus:outline-none dark:bg-gray-800 dark:text-gray-100 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                  }`}
                />
                {errors.message && (
                  <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 İlayda Şenocak. Tüm hakları saklıdır.</p>
        <p className="mt-1">
          <a href="https://github.com/ilydasnck" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          {" | "}
          <a href="https://www.linkedin.com/in/ilayda-senocak/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
