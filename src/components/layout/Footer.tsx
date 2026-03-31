export default function Footer() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <div className="flex justify-center mb-3">
        <button
          type="button"
          onClick={toggleDark}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow hover:scale-105 transition-transform"
          aria-label="Tema değiştir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>
      </div>
      <p>&copy; 2026 İlayda Şenocak. Tüm hakları saklıdır.</p>
      <p className="mt-1">
        <a
          href="https://github.com/ilydasnck"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/ilayda-senocak/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="#uikit"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          UI Kit
        </a>
      </p>
    </footer>
  );
}
