"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

function CallToAction() {
  return (
    <section className="bg-gold section text-center rounded-2xl mt-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Ready to Experience True Ubuntu?
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-6">
          Book your stay today and discover authentic African hospitality,
          handcrafted comfort, and unforgettable memories in the heart of
          Mutare.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/rooms">
            <Button size="lg">Book a Room</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
