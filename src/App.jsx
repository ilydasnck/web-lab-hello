import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Web Tasarimi ve Programlama </h1>
      <h2>LAB -1</h2>
      <p>Ad Soyad: İlayda Şenocak</p>
      <p>Ogrenci No: 230541004</p>
      <p>Hobilerim: Keman çalmak, Kitap Okumak, Film İzlemek</p>
      <p>
        Ben İlayda Şenocak, 20 yaşındayım ve Elazığ'da yaşıyorum. Fırat
        Üniversitesi Yazılım Mühendisliği bölümünde okuyorum.
      </p>
    </div>
  );
}

export default App;
