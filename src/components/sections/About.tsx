export default function About() {
  return (
    <section id="about" className="py-16 px-4">
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
        </div>
      </div>
    </section>
  );
}
