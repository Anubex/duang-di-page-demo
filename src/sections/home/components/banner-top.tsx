export default function BannerTop() {
  return (
    <>
      <img
        className="hidden w-full md:block"
        src="/assets/banners/duangdi-banner.png"
        alt="home-third-banner"
      />
      <img
        className="block w-full md:hidden"
        src="/assets/banners/menu-m.png.jpg"
        alt="home-third-banner-mobile"
      />
    </>
  )
}
