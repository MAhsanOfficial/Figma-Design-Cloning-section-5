import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
   
      <nav className="bg-[#A29875] h-[100px] md:h-[134px] flex items-center justify-between px-4 md:px-8 lg:px-16">
      
        <h1 className="text-[28px] md:text-[40px] lg:text-[60px] font-serif text-white">
          <Link href="/">MANZZARI</Link>
        </h1>
        
        <div className="hidden md:flex items-center relative w-full max-w-[400px] lg:max-w-[500px]">
          <input
            type="text"
            placeholder="Search for Gold Jewellery and more..."
            className="w-full h-[36px] md:h-[40px] lg:h-[46px] pl-10 rounded-[10px] font-serif text-[14px] md:text-[16px] lg:text-[18px] text-[#6C757D]"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
        </div>

        <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 text-white">
          <CiHeart size={25} className="cursor-pointer" />
          <CiUser size={25} className="cursor-pointer" />
          <AiOutlineShoppingCart size={25} className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 py-10 md:py-20">
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold font-serif leading-tight">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[#787054] text-[16px] md:text-[18px] lg:text-[22px] font-medium mt-4 max-w-full md:max-w-md lg:max-w-lg leading-relaxed">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-white font-serif bg-[#787054] mt-6 w-[180px] md:w-[220px] lg:w-[288px] h-[45px] md:h-[50px] lg:h-[58px] rounded-[10px] text-[16px] md:text-[20px] lg:text-[24px]">
            Explore Now
          </button>
        </div>

       
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/image.jpeg"
            alt="Jewelry"
            width={300}
            height={450}
            className="rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[150px] rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[150px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
