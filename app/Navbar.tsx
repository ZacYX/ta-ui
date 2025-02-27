"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY])

  return (
    <div
      className={`opacity-75 text-white fixed w-full flex flex-row justify-between p-8 transition-transform duration-700 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div>
        <Link
          href={`/`}
          className="flex flex-row gap-2"
        >
          <Image
            src={`/gxm_truck.svg`}
            alt="logo"
            height={32}
            width={32}
            className="bg-white filter invert"
          />
          GoXmore
        </Link>
      </div>
      <div className="w-1/2 flex flex-row justify-between">
        <div>Contact</div>
        <div className="flex flex-row">
          <div>
            <GoPerson
              size={25}
              className="mx-2"
            />
          </div>
          <div>
            <PiShoppingCartSimple size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}