import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col gap-4 items-center py-12 px-4 md:px-48">
      <article className="flex flex-col gap-2">
        <h2 className="text-5xl lg:text-8xl font-regular">
          Where culture, comfort, and adventure meet
        </h2>
        <p className="text-slate-600">
          Experience handcrafted comfort, local cuisine, and rich cultural tours
          in Mutare. Ubuntu Backpackers is your cozy gateway to nature,
          adventure, and community in Zimbabwe’s Eastern Highlands.
        </p>
      </article>

      {/* CTA */}
      <Button className="w-full md:w-1/8 py-6 self-end" asChild>
        <Link href="/rooms">Book now</Link>
      </Button>
    </header>
  );
}

export default Header;
