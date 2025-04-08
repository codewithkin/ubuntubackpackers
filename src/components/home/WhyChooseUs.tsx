import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Palette, Utensils, MapPin, Mountain, Leaf } from "lucide-react";

const whyUbuntu = [
  {
    icon: <Users className="text-primary w-5 h-5 mr-2" />,
    title: "Authentic African Hospitality",
    description:
      "At Ubuntu Backpackers, we don’t just offer a place to sleep—we welcome every guest like family. Our warm and caring hosts ensure your stay feels deeply personal and rooted in the African philosophy of Ubuntu, which celebrates community, kindness, and the connection that binds us all together.",
  },
  {
    icon: <Palette className="text-primary w-5 h-5 mr-2" />,
    title: "Handcrafted Interiors",
    description:
      "Each room at Ubuntu is uniquely styled with handcrafted furniture, vibrant fabrics, and local artwork that tell a story. Designed to reflect the beauty of African design and culture, our interiors blend earthy tones and artistic flair to provide a cozy, inspiring, and truly one-of-a-kind atmosphere.",
  },
  {
    icon: <Utensils className="text-primary w-5 h-5 mr-2" />,
    title: "Home-Cooked Local Cuisine",
    description:
      "Enjoy delicious meals prepared with love, using fresh, locally sourced ingredients. Our kitchen brings traditional Zimbabwean dishes to life with an authentic homemade touch, offering guests a chance to connect with local food culture while enjoying hearty meals that nourish both body and soul.",
  },
  {
    icon: <MapPin className="text-primary w-5 h-5 mr-2" />,
    title: "Perfect Location",
    description:
      "Conveniently located in the heart of Mutare, Ubuntu Backpackers offers easy access to shops, transport links, and nearby attractions. Whether you’re crossing borders, exploring the city, or planning an adventure into the mountains, our central spot makes us the ideal base for any type of traveler.",
  },
  {
    icon: <Mountain className="text-primary w-5 h-5 mr-2" />,
    title: "Explore Nature & Culture",
    description:
      "From scenic hikes in the Eastern Highlands to cultural experiences with local artisans and communities, we offer authentic ways to connect with Zimbabwe’s natural beauty and heritage. We can help you plan unforgettable outings that go beyond sightseeing and create lasting memories.",
  },
  {
    icon: <Leaf className="text-primary w-5 h-5 mr-2" />,
    title: "Relaxing, Communal Space",
    description:
      "Ubuntu isn’t just a place to sleep—it’s a place to connect. Our garden, communal kitchen, and cozy shared spaces encourage travelers to relax, share stories, cook meals together, and forge new friendships. We’ve created a homey environment where guests from around the world can feel truly at peace.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section max-w-3xl mx-auto py-12">
      <h2 className="heading text-center mb-8">
        Why Choose Ubuntu Backpackers?
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {whyUbuntu.map((point, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg"
          >
            <AccordionTrigger className="text-left px-4 py-2 flex items-center gap-2">
              {point.icon}
              <span>{point.title}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-sm text-muted-foreground">
              {point.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default WhyChooseUs;
