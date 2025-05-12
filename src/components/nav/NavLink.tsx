import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";
import { useState } from "react";
import type { INavLink } from "./Nav";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function NavLink({ link }: { link: INavLink }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = link.href
    ? pathname.startsWith(link.href)
    : pathname.split('/').some(segment => segment === link.label.toLowerCase().replace(' ', '-'));

  const activeStyles = isActive ? 'text-[#3366CC]' : 'text-[#5F5F5F]';
  const iconColor = isActive ? '#3366CC' : '#5F5F5F';

  if (!link.href) {
    return (
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className={`space-x-0.5 flex items-center ${activeStyles}`}>
              <span>
                {link.label}
              </span>

              <Icon
                width="20"
                height="20"
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                style={{ color: iconColor }}
                icon="iconamoon:arrow-down-2"
              />
            </button>
          </PopoverTrigger>

          <PopoverContent className="w-48 p-0">
            {link.children?.map((child, index) => (
              <div className="w-full" key={index}>
                <Link
                  href={child.href as string}
                  className="text-[#5F5F5F] rounded-md text-sm block w-full p-2 hover:bg-gray-100"
                >
                  {child.label}
                </Link>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <div>
      <Link
        href={link.href}
        className={activeStyles}
      >
        {link.label}
      </Link>
    </div>
  );
}