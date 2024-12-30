"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextLink,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Sales and Services", link: "/sales" },
  // { name: "About us", link: "/about" },
  { name: "Applications", link: "/applications" },
];

export const AcmeLogo = () => {
  return (
    <Image
      src="/assets/Logo.png"
      width={35}
      height={35}
      alt="Logo"
      className="rounded-md"
    />
  );
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const [page, setPage] = useState<string>(pages[0].name.toLowerCase());

  const checkActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return (
    <Navbar
      isBlurred={false}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="flex gap-4">
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand className="flex gap-4">
          <AcmeLogo />
          <p className="font-bold text-inherit">ADM Drones</p>
        </NavbarBrand>
        {pages.map(({ name, link }, idx) => (
          <NavbarItem key={idx} isActive={checkActivePath(link)}>
            <NextLink
              as={Link}
              aria-current={checkActivePath(link) ? undefined : "page"}
              href={`${link}`}
              className={checkActivePath(link) ? "" : "text-foreground-900"}
            >
              {name}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <ThemeSwitch className="flex" />

      <NavbarMenu>
        {pages.map(({ name, link }, idx) => (
          <NavbarMenuItem key={`${name}-${idx}`}>
            <NextLink
              as={Link}
              onPress={() => setIsMenuOpen(false)}
              aria-current={checkActivePath(link) ? undefined : "page"}
              href={`${link}`}
              className={
                checkActivePath(link) ? "w-full" : "w-full text-foreground-900"
              }
            >
              {name}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Nav;
