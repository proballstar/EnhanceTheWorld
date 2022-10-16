import React from "react";
import Link from "next/link";
import { GlobeIcon, PlusCircleIcon, HomeIcon, UserAddIcon, UserCircleIcon } from "@heroicons/react/outline";
import "../../styles/styles.module.css"
import NavLink from "./NavLink";
import { useAuth } from "../context/AuthContext";

const reg = [
  {
    href: "/",
    content: "Home",
    Icon: HomeIcon,
  },
  {
    href: "/login",
    content: "Login",
    Icon: UserCircleIcon,
  },
  ,
  {
    href: "/signup",
    content: "Register",
    Icon: UserAddIcon,
  },
];

const auth = [
  {
    href: "/auth/events/all",
    content: "All Events",
    Icon: GlobeIcon,
  },
  {
    href: "/auth/events/create",
    content: "Post Event",
    Icon: PlusCircleIcon,
  },
];

export default function Navbar() {
  
  const {user} = useAuth()

  return (
    <nav className="h-20 bg-green-800 text-white font-bold sticky top-0">
      <ul className="flex items-center justify-between h-full px-10">
        <div className="flex flex-row items-center p-2">
          <Link href="/">
            <img
              src={require("../Map.png")}
              className="animate-bounce w-16 bg-green-800 rounded-full border border-green-800 shadow hover:bg-green-700"
            />
          </Link>
          <p className="p-3 font-black">Enhance the World</p>
        </div>
        <div className="flex justify-between w-9/12">
          {user && (auth.map((props, key) => {
            return (
              <NavLink key={`auth-nav-link-${key}`} {...props} />
            )
          }))}
          {!user && (reg.map((props, key) => {
            return (
              <NavLink key={`reg-nav-link-${key}`} {...props} />
            )
          }))}
        </div>
      </ul>
    </nav>
  );
}
