import { Link } from "react-router-dom";

export default function BannerReserve() {
    return (
      <>
        <img
          className="hidden w-full md:block "
          src="/assets/banners/duangdi-reserve.png"
         
        />
        <Link>
        test
        </Link>
        <img
          className="block w-full md:hidden"
          src="/assets/banners/menu-m.png.jpg"
        
        />
        <div className="text-center text-white p-3 font-bold text-5xl h-[67px] w-full bg-[#6A03D1]">
        เบอร์มงคลเสริมโชคลาภ
        </div>
      </>
      
    )
  }
  