import React from "react";
import Link from "next/link";

import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default  function Footer() {
 

  return (
    <footer className=" bottom-0 w-full border-b r-md z-50 bg-primary h-[150px]">
      
        {/* <Link href="/">
          <Image
            src={"/logo.jpg"}
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link> */}


        <div className="flex justify-center flex-row text-white  gap-x-12 pt-12 ">
            <Link href="/"> <div> <p>Home </p></div></Link>
            <Link href="/about"> <div> <p>About </p></div></Link>
            <Link href="/"> <div> <p>Contact Us </p></div></Link>
        
        
        </div>
     
       
    </footer>
  );
}