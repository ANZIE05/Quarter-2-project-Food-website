import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import Link from "next/link";

export default function ContactUsPage() {
  return (

    <div>
    <div style={{float: 'left', width: '50%', height: '480px'}}> 
    <h1 style={{marginTop: '3%'}}>
        | | |--- Contact Us ---| | |
        </h1>
 
        <div style={{marginTop:'6%'}}>
          <center>
          
          <h6> <AiOutlineHome/>100 A, Zeb Arcade, Sindhi Muslim <br/>Housing Society, Karachi.</h6>
          <h6><AiOutlineHome/>PL 3/4, Allama shabbir Usmani Road,<br/> Gulshan e Iqbal, Karachi.</h6>
          <h6><IoCallOutline/>(021)111 222 123</h6>
          <h6><FaMobileAlt/>(092)300 1234 567</h6>
          <address><MdOutlineMailOutline/> abc@foodlovers.com</address>
          </center>
        </div>
        
        </div>
      <div style={{float: 'right', width: '50%', height: '480px'}}>
        <p style={{textAlign: 'center',fontSize: '40px', marginTop: '18%', fontFamily: 'serif' }}> Submit your feedback <br/>here </p>

        <center>
         <Link href="/contact-us/feedback"> 
           <button style={{fontSize:'30px', fontFamily:'sans-serif', color: 'yellow'}} className="rounded-xl hover:bg-black"><u>Feedback</u></button>   
        </Link>
        </center>
      </div>
    
    
  </div>
  );
}