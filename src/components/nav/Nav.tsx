"use client"
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";
import { Icon } from "@iconify/react";
import MaxWidthLayout from "@/layouts/MaxWidthLayout";

export interface INavLink {
  label: string;
  href?: string;
  children?: INavLink[];
}

export default function Nav() {
  const [opened, setOpened] = useState(false);

  const navLinks: INavLink[] = [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'About Us',
      children: [
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        },
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        }
      ]
    },
    {
      label: 'Our services',
      children: [
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        },
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        }
      ]
    },
    {
      label: 'Get Involved',
      children: [
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        },
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        }
      ]
    },
    {
      label: 'News and Updates',
      children: [
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        },
        {
          label: 'Example child link',
          href: '#about-us/example-child-link'
        }
      ]
    },
  ]

  const toggle = () => setOpened(!opened);

  return (
    <div className="sticky z-10 top-0 bg-white">
      <MaxWidthLayout>
        <div className="flex h-[90px] items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href='/'>
              <Logo />
            </Link>

            <div className="hidden lg:block">
              <div className="space-x-3 flex items-center">
                {navLinks.map((link, index) => (
                  <NavLink key={index} link={link} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="xl:hidden">
              <button
                onClick={toggle}
                aria-label="Open menu"
              >
                <Icon
                  width="32"
                  height="32"
                  className="text-gray-800"
                  icon="stash:burger-classic-duotone"
                />
              </button>
            </div>

            <div className="hidden xl:block">
              <div className="flex items-center space-x-3">
                <Link href="#donate">
                  <button className="flex h-11 w-[165px] justify-center text-sm items-center space-x-2 rounded-full border-2 border-[#3366CC]">
                    <Icon
                      width="26"
                      height="26"
                      className="text-[#FFD700]"
                      icon="bxs:donate-heart"
                    />

                    <span className="text-[#3366CC]">
                      Donate
                    </span>
                  </button>
                </Link>

                <Link href="#partner">
                  <button className="flex h-11 w-[165px] justify-center text-sm bg-[#3366CC] items-center space-x-2 rounded-full border-2 border-[#3366CC]">
                    <Icon
                      width="26"
                      height="26"
                      className="text-[#FFD700]"
                      icon="material-symbols:group-outline"
                    />

                    <span className="text-white">
                      Parnter with us
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthLayout>

      <MobileMenu
        opened={opened}
        toggle={toggle}
        navLinks={navLinks}
      />
    </div>
  );
}