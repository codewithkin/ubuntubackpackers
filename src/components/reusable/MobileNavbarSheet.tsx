"use client";
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button";

function MobileNavbarSheet() {
    // Track the state of the menu
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" md:hidden flex flex-col border-b border-slate-900 p-4">
        <article className="flex w-full justify-between items-center">
            {/* Branding */}
            <article className="flex gap-2 items-center ">
                        <Image
                            src="/images/brand/logo.png"
                            alt="Ubuntu Backpackers Logo"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <h1 className="text-xl font-bold">Ubuntu Backpackers</h1>
                    </article>

                    <Sheet>
            <SheetTrigger>
   {/* Menu icon / button */}
   <Menu size={34} strokeWidth={1.7} />
            </SheetTrigger>
            <SheetContent className="w-full flex flex-col justify-between">
                <SheetHeader>
                    <SheetTitle className="text-xl">Menu</SheetTitle>
                </SheetHeader>

                <ul className="flex flex-col gap-6 px-4">
            <li>
                <Link className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline text-lg"  href="/">Home</Link>
            </li>
            <li>
                <Link className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline text-lg"  href="/explore">Explore</Link>
            </li>
            <li>
                <Link className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline text-lg"  href="/about">About</Link>
            </li>
            <li>
                <Link className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline text-lg"  href="/contact">Contact</Link>
            </li>
            <li>
                <Link className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline text-lg" href="/restaurant">Restaurant</Link>
            </li>
            </ul>


            <SheetFooter>
                {/* CTA */}
            <Button className="w-full py-6" asChild>
                <Link href="/rooms">
                    Book a room
                </Link>
            </Button>
            </SheetFooter>
            </SheetContent>
        </Sheet>
        </article>

        {/* Links */}
       
       
    </nav>
  )
}

export default MobileNavbarSheet
