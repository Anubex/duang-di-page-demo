
import MainSection from './components/main-section'
// import BannerHome from './components/banner-home'
// import BannerSecond from './components/banner-second'
import BannerTop from './components/banner-top'
import BannerFooter from './components/banner-footer'
import BannerReserve from './components/banner-reserve'


export default function HomeView() {
  return (
    <>
      {/* <BannerHome /> */}
      <BannerTop />
  
      <MainSection />
      <BannerReserve/>
      <BannerFooter/>
   
   
    </>
  )
}
