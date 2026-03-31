# CSS Kararları

## 1. Breakpoint Seçimi

- **640px** ve **1024px** değerlerini seçtim çünkü bunlar sırasıyla küçük telefonlardan tablete ve tabletten masaüstüne geçiş noktalarını temsil ediyor. Tailwind CSS gibi popüler framework'lerin de kullandığı bu değerler, gerçek cihaz dağılımına en uygun kırılım noktaları.
- 640px altında navbar yatay kaydırılabilir hale geliyor, proje kartları tek sütuna düşüyor. 640–1023px arasında kartlar 2 sütun, 1024px üstünde 3 sütun olarak genişliyor ve site başlığı büyüyor.

## 2. Layout Tercihleri

- **Header için Flexbox** seçtim çünkü navbar tek boyutlu (yatay) bir düzen; logo solda, linkler sağda hizalanıyor. Flexbox bu tek eksenli hizalamayı `justify-content: space-between` ile en temiz şekilde çözüyor.
- **Proje kartları için CSS Grid** seçtim çünkü kartlar iki boyutlu bir ızgara düzeni oluşturuyor; hem satır hem sütun kontrolü gerekiyor. Grid bu işe Flexbox'tan daha uygun.
- `auto-fit` kullandım çünkü mevcut alan içinde kartlar otomatik olarak genişleyerek boş sütun bırakmıyor. `auto-fill` boş sütunları korurdu ama az sayıda kartla görsel olarak daha kötü dururdu.

## 3. Design Tokens

- **Mor tonlarında** bir renk paleti seçtim (`#6D28D9` ana mor, `#9333EA` ikinci ton, `#DB2777` pembe vurgu). Mor, yaratıcılık ve teknolojiyi çağrıştırıyor; pembe vurgu ise butonlarda ve etkileşim elemanlarında dikkat çekici bir kontrast sağlıyor.
- **Spacing skalası** `0.25rem`'den `4rem`'e kadar ikişer kat artan bir ölçekle oluşturuldu (`xs → sm → md → lg → xl → 2xl → 3xl`). Bu tutarlı ölçek, bileşenler arası boşlukların harmonik görünmesini sağlıyor.
- **Fluid typography** için `clamp()` fonksiyonunu kullandım. Minimum değer mobil okunabilirliği, `vw` oranı akıcı büyümeyi, maksimum değer ise masaüstünde aşırı büyümeyi engelliyor. Örneğin `h1` için `clamp(2rem, 1.2rem + 3vw, 3.5rem)` hem telefonda hem geniş ekranda orantılı kalıyor.

## 4. Responsive Stratejiler

- **Mobile-first** yaklaşımı uyguladım: temel stiller mobil için yazıldı, ardından `min-width` media query'leriyle tablet ve masaüstü düzenleri eklendi. Bu sayede küçük ekranlar gereksiz CSS yükü taşımıyor.
- Breakpoint'lerde değişen elemanlar: **navbar** (mobilde yatay scroll, geniş ekranda sabit), **proje grid'i** (1 → 2 → 3 sütun), **site başlığı** (boyutu kademeli büyüyor) ve **main container** (padding ve max-width artıyor).
- Tüm görselleri projeden kaldırdığım için görsel boyut yönetimi gerekmedi; bunun yerine tipografi, kart düzeni ve boşluk sistemiyle görsel hiyerarşiyi korudum. Fluid `clamp()` değerleri sayesinde metin boyutları da ekran genişliğine göre otomatik uyum sağlıyor.
