import React from "react";
import Link from "next/link"

interface NavLinkProps {
    Icon: any;
    href: string;
    content: string;
}

export default function NavLink(props: NavLinkProps) {
    return (
      <Link href={props.href}>
        <li className="hover:shadow hover:bg-green-700 p-2 rounded-lg flex">
          <props.Icon width={30} className="p-1" />
          {props.content}
        </li>
      </Link>
    );
}