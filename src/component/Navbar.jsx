"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHatCowboySide } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
 const [isOpen,setIsOpen] = useState(false);

const pathname = usePathname();

const userData = authClient.useSession();
// console.log(userData); 
const user = userData.data?.user
// console.log(user);

const handleLogout = async()=>{
await authClient.signOut();
}

  return (
   
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        
    <div className="md:hidden text-2xl cursor-pointer " onClick={()=>setIsOpen(!isOpen)}>
{isOpen ?<GiHamburgerMenu /> : <RxHamburgerMenu />}
</div>

        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-xl flex"> 
            <span className="text-gray-500 items-center">Qurbani</span>
            <span className="flex items-center"><FaHatCowboySide className="text-purple-400" />Hat</span>
          </h3>
        </div>



        <ul className={`
  flex flex-col md:flex-row gap-5 font-bold text-sm
  absolute md:static top-15 left-0 w-auto bg-white md:bg-transparent p-5 
  border md:border-none shadow-lg md:shadow-none z-50
  transition-all duration-300 ease-in
  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"}
`}>
          <li>
            <Link href={"/"}
            className={pathname==="/"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}
            className={pathname==="/all-animals"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>All Animals</Link>
          </li>
          <li>
            <Link href={"/profile"}
            className={pathname==="/profile"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Profile</Link>
          </li>
        </ul>

        <div className="flex">
        {!user &&  <ul className="flex items-center  gap-6 text-sm">
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/login"}>Log In</Link>
            </li>
          </ul>}

{
  user && <div className="flex gap-3">
    <Avatar size="sm">
        <Avatar.Image alt="John Doe" 
        src={user.image}
        referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

<Button onClick={handleLogout} size="sm" variant="danger">Log Out</Button>

  </div>
}


        </div>
      </nav>
    </div>
  );
};

export default Navbar;

  // <ul className="flex items-center gap-5 text-sm font-bold">
  //         <li>
  //           <Link href={"/"}
  //           className={pathname==="/"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Home</Link>
  //         </li>
  //         <li>
  //           <Link href={"/all-animals"}
  //           className={pathname==="/all-animals"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>All Animals</Link>
  //         </li>
  //         <li>
  //           <Link href={"/profile"}
  //           className={pathname==="/profile"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Profile</Link>
  //         </li>
  //       </ul>