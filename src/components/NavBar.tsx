"use client";

import makeClassNameToString from "@/libs/makeClassNameToString";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isCurrentPage = (currentPathname: string) => pathname === currentPathname;
  const navigators = [
    { pathname: "/", title: "HOME" },
    { pathname: "/about", title: "ABOUT" },
  ];

  return (
    <nav className="z-10 fixed top-0 bg-slate-50 shadow-md flex justify-between w-full text-4xl font-extrabold py-4 px-10">
      {navigators.map((navigator) => (
        <Link
          key={navigator.title}
          href={navigator.pathname}
          className={makeClassNameToString(
            isCurrentPage(navigator.pathname) ? "custom-border current-pathname" : "",
            "p-2 inline-block"
          )}>
          {navigator.title}{" "}
        </Link>
      ))}
    </nav>
  );
}
