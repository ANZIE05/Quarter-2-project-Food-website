import Link from "next/link";

export default function Navbar (){
    return (

        <div className="flex w-full">
        <ul className="flex gap-6 ml-[73%] pt-[10px] text-[20px] font-semibold text-orange-700">
            
          <li className="hover:text-yellow-300"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-300"><Link href="/menu">Menu</Link></li>
          <li className="hover:text-yellow-300"><Link href="/about">About</Link></li>
          <li className="hover:text-yellow-300"><Link href="/contact-us">Contact Us</Link></li>
          {/* <li className="hover:text-yellow-300"><Link href="/contact-us/feedback"> Feedback </Link></li> */}

        </ul>

      </div>
    )
  }