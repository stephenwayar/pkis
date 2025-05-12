import React from "react";
import Image from "next/image";
import logo from '@/assets/svgs/logo.svg'

export default function Logo() {
  return (
    <div>
      <Image
        priority
        src={logo}
        alt="logo icon"
      />
    </div>
  )
}