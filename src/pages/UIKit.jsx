import { Button, Input, Card, Alert } from "../components";

export default function UIKit() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 text-gray-900 dark:text-gray-100 transition-colors">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Kit
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            &larr; Portföye Dön
          </a>
          <button
            onClick={toggleDark}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Tema değiştir"
          >
            <span className="dark:hidden">&#9790;</span>
            <span className="hidden dark:inline">&#9728;</span>
          </button>
        </div>
      </div>

      <p className="text-gray-500 dark:text-gray-400 -mt-8">
        Tüm bileşen varyantlarının tek sayfada önizlemesi. Dark mode toggle ile her iki temada kontrol edebilirsiniz.
      </p>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
          Buttons
        </h2>

        {/* Varyant 1: Renk varyantları */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Renk Varyantları</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Primary: ana aksiyonlar, Danger: silme/uyarı, Ghost: ikincil işlemler</p>
        </div>

        {/* Varyant 2: Boyutlar */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Boyut Varyantları</h3>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">sm: sıkışık alanlar, md: varsayılan, lg: CTA butonları</p>
        </div>

        {/* Varyant 3: Disabled */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Disabled Durumu</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>Primary Disabled</Button>
            <Button variant="danger" disabled>Danger Disabled</Button>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Form doğrulama tamamlanmadan veya işlem devam ederken kullanılır</p>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
          Inputs
        </h2>

        {/* Varyant 4: Normal */}
        <div>
          <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Standart veri girişi alanı</p>
        </div>

        {/* Varyant 5: Hatalı */}
        <div>
          <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Doğrulama başarısız olduğunda kırmızı border ve hata mesajı</p>
        </div>

        {/* Varyant 6: Help text */}
        <div>
          <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Kullanıcıya yardımcı bilgi sunan alt metin</p>
        </div>

        {/* Varyant 7: Disabled */}
        <div>
          <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Salt okunur veya kilitli alanlar için kullanılır</p>
        </div>
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 8: Elevated */}
          <div>
            <Card variant="elevated" title="Elevated Card" image="https://picsum.photos/seed/elevated/600/400" imageAlt="Elevated kart görseli">
              Gölge ile yükseltilmiş kart. Öne çıkan içerikler için idealdir.
            </Card>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Proje kartları, ürün kartları için kullanılır</p>
          </div>

          {/* Varyant 9: Outlined */}
          <div>
            <Card variant="outlined" title="Outlined Card">
              Çerçeveli kart. Sade ve minimal bir görünüm sunar.
            </Card>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Liste elemanları, bilgi kutuları için idealdir</p>
          </div>

          {/* Varyant 10: Filled with footer */}
          <div>
            <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
              Dolgulu arka plan. Footer alanında aksiyon butonu içerir.
            </Card>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Arka plandan ayrışan bilgi kartları için kullanılır</p>
          </div>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
          Alerts
        </h2>

        {/* Varyant 11: Info */}
        <div>
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesajı. Kullanıcıyı yönlendiren nötr bilgi.
          </Alert>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Genel bilgilendirme ve ipuçları için</p>
        </div>

        {/* Varyant 12: Success */}
        <div>
          <Alert variant="success" title="Başarılı">
            İşlem tamamlandı! Form gönderimi veya kayıt başarılı.
          </Alert>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Başarılı işlem sonrası onay mesajı</p>
        </div>

        {/* Varyant 13: Warning */}
        <div>
          <Alert variant="warning" title="Uyarı">
            Dikkat edilmesi gereken durum. Oturum süresi dolmak üzere.
          </Alert>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Kullanıcının dikkatini çeken uyarılar için</p>
        </div>

        {/* Varyant 14: Error dismissible */}
        <div>
          <Alert variant="error" title="Hata" dismissible onDismiss={() => console.log("kapatıldı")}>
            Bir hata oluştu. Kapatılabilir alert örneği.
          </Alert>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Hata durumları ve kullanıcı tarafından kapatılabilir bildirimler için</p>
        </div>
      </section>

      {/* --- SUMMARY --- */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Özet</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="text-3xl font-bold text-blue-600">4</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Bileşen</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="text-3xl font-bold text-blue-600">14+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Varyant</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="text-3xl font-bold text-blue-600">2</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tema</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Boyut</p>
          </div>
        </div>
      </section>
    </div>
  );
}
