'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import Logo from './Logo';
import StyledButton from './StyledButton';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

export interface MenuItem {
  name: string;
  href: string;
  color?:
    | 'primary'
    | 'foreground'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
}

export interface ResponsiveNavbarProps {
  items: MenuItem[];
}

const ResponsiveNavbar = ({ items }: ResponsiveNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-background shadow-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
          icon={
            isMenuOpen ? (
              <IoIosClose className="text-foreground w-24 h-24" />
            ) : (
              <IoIosMenu className="text-foreground w-14 h-14" />
            )
          }
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items.map(({ name, href, color = 'foreground' }) => {
          return (
            <NavbarItem key={`${name}-${href}`}>
              <Link
                color={color}
                href={href}
                className="hover:text-primary transition-colors duration-150"
              >
                {name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <StyledButton>Donate</StyledButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="shadow-sm">
        {items.map(({ name, href, color = 'foreground' }) => {
          return (
            <NavbarMenuItem key={`${name}-${href}`}>
              <Link color={color} className="w-full" href={href} size="lg">
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default ResponsiveNavbar;
