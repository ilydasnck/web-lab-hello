import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "En az 3 karakter giriniz";
    }

    if (!formData.email) {
      newErrors.email = "Email gereklidir";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Mesaj başarıyla gönderildi 🎉");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {/* SKIP LINK */}
      <a href="#main" className="skip-link">Ana içeriğe atla</a>

      {/* HEADER */}
      <header>
        <h1>İlayda Şenocak</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">

        {/* HAKKIMDA */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img 
              src="/profil.jpg" 
              alt="İlayda Şenocak profil fotoğrafı" 
            />
            <figcaption>Yazılım Mühendisliği öğrencisi</figcaption>
          </figure>

          <p>
            Ben İlayda Şenocak. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.
            Mobil uygulama geliştirme ve siber güvenlik alanlarına ilgi duyuyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>C#</li>
          </ul>
        </section>

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Rotam Cepte</h3>
            <p>Tarihi yerleri keşfetmeyi teşvik eden mobil uygulama.</p>
            <p><strong>Teknolojiler:</strong> React Native</p>
            <img 
              src="/proje1.jpg" 
              alt="Rotam Cepte mobil uygulamasının ana ekran görüntüsü" 
            />
          </article>

          <article>
            <h3>Maskot</h3>
            <p>Enerji tüketimini analiz eden çevre dostu uygulama.</p>
            <p><strong>Teknolojiler:</strong> Java</p>
            <img 
              src="/proje2.jpg" 
              alt="Maskot uygulamasının kullanıcı arayüzü ekran görüntüsü" 
            />
          </article>

        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form id="contactForm" onSubmit={handleSubmit} noValidate>

            {/* NAME */}
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength="3"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="error" role="alert">
                {errors.name}
              </small>
            )}

            {/* EMAIL */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="error" role="alert">
                {errors.email}
              </small>
            )}

            {/* MESSAGE */}
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              required
              minLength="10"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <small className="error" role="alert">
                {errors.message}
              </small>
            )}

            <button type="submit">Gönder</button>

          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 İlayda Şenocak</p>
        <p>
          <a href="https://github.com/ilydasnck">GitHub</a> | 
          <a href="https://www.linkedin.com/in/ilayda-senocak/">LinkedIn</a>
        </p>
      </footer>
    </>
  );
}

export default App;