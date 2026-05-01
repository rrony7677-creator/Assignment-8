"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
// import logo from "@/assets/logo.png"

const Navbar = () => {

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
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Animals.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}>All Animals</Link>
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