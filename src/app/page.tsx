import Image from "next/image";
import pic1 from "/public/home1.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">

      <div className="ml-[3%] pt-[9px] w-full h-auto md:w-[95%]">
        <Image src={pic1} alt="Image" width={1280} height={720} className="w-full h-auto" />
        </div>

      <div className="absolute ml-[20%] pt-[22%] left-[32%] top-[50%] transform -translate-y-1/2 -translate-x-1/2">
      < Link href="/menu">
        <h1 className="hover:text-black text-green-900 font-serif text-3xl font-extrabold flex justify-center items-center">Explore Menu </h1> 
        </Link>
        </div>

    </div>
  );
}