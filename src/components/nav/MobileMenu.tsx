import Link from "next/link";
import NavLink from "./NavLink";
import { Icon } from '@iconify/react';
import type { INavLink } from "./Nav";
import MaxWidthLayout from "@/layouts/MaxWidthLayout";

interface MobileMenuProps {
  opened: boolean;
  toggle: () => void;
  navLinks: INavLink[];
}

export default function MobileMenu({ opened, toggle, navLinks }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 bg-white z-50 flex flex-col w-full transition-all duration-200 ${opened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <MaxWidthLayout>
        <div className="h-[90px] flex items-center justify-end">
          <div>
            <button
              onClick={toggle}
              aria-label="Close menu"
            >
              <Icon
                width="32"
                height="32"
                className="text-gray-800"
                icon="ic:round-close"
              />
            </button>
          </div>
        </div>
      </MaxWidthLayout>

      <div className="flex-1 overflow-y-auto">
        <MaxWidthLayout>
          <div className="py-8">
            <div className="text-center transform space-y-10 transition-transform duration-200 ease-out" style={{
              transform: opened ? 'translateY(0)' : 'translateY(-20px)'
            }}>
              <div className="space-y-5 flex flex-col items-center">
                {navLinks.map((link, index) => (
                  <NavLink key={index} link={link} />
                ))}
              </div>

              <div className="flex flex-col items-center space-y-5">
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
        </MaxWidthLayout>
      </div>
    </div>
  );
}