import { useState, useEffect } from "react";
import type {
  Project, Category, SortField, SortOrder
} from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import { Button, Input, Card, Alert } from "./components";
import UIKit from "./pages/UIKit";

export default function App() {
  // --- ROUTING ---
  const [page, setPage] = useState(window.location.hash);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // --- PROJECT STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- HASH ROUTING ---
  useEffect(() => {
    const onHash = () => setPage(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETILMIŞ (DERIVED) VERİ ---
  const filtered = applyFilters(
    projects, search, category, sortField, sortOrder
  );

  const categories: (Category | "all")[] =
    ["all", "frontend", "fullstack", "backend"];

  const categoryLabels: Record<string, string> = {
    all: "Tümü",
    frontend: "Frontend",
    fullstack: "Full Stack",
    backend: "Backend",
  };

  // --- DARK MODE ---
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  // --- UI KIT SAYFASI ---
  if (page === "#uikit") return <UIKit />;

  // --- FORM İŞLEMLERİ ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (formData.name.trim().length < 3)
      newErrors.name = "En az 3 karakter giriniz";
    if (!formData.email)
      newErrors.email = "Email gereklidir";
    if (formData.message.trim().length < 10)
      newErrors.message = "Mesaj en az 10 karakter olmalıdır";

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  // --- UI ---
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
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Projelerim
            </h2>

            {/* Hata durumu */}
            {error && (
              <Alert variant="error" title="Hata">{error}</Alert>
            )}

            {/* Filtreler */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Input
                id="search"
                placeholder="Proje ara..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />

              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={category === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {categoryLabels[cat]}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value as SortField)}
                  className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                >
                  <option value="year">Yıl</option>
                  <option value="title">Başlık</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder((o) => o === "asc" ? "desc" : "asc")}
                >
                  {sortOrder === "asc" ? "↑ A-Z" : "↓ Z-A"}
                </Button>
              </div>
            </div>

            {/* Yükleniyor */}
            {loading && (
              <p className="text-center text-gray-500">Yükleniyor...</p>
            )}

            {/* Eşleşen proje yok */}
            {!loading && filtered.length === 0 && (
              <p className="text-center text-gray-500">Eşleşen proje bulunamadı.</p>
            )}

            {/* Proje listesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Card
                  key={project.id}
                  variant="elevated"
                  title={project.title}
                  image={`https://picsum.photos/seed/${project.id}/600/400`}
                  imageAlt={`${project.title} ekran görüntüsü`}
                >
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {project.year} &middot; {categoryLabels[project.category]}
                  </p>
                </Card>
              ))}
            </div>

            {/* Sonuç sayısı */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              {filtered.length} / {projects.length} proje gösteriliyor
            </p>
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
                error={formErrors.name}
              />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
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
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-lg border transition-colors focus:ring-2 focus:outline-none dark:bg-gray-800 dark:text-gray-100 ${
                    formErrors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                  }`}
                />
                {formErrors.message && (
                  <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                    {formErrors.message}
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
