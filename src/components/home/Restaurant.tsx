import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function Restaurant() {
  const dishes = [
    {
      name: "Burger",
      description: "A juicy burger with crispy bacon and melted cheddar cheese",
      image: "/images/dishes/burger.jpg",
    },
    {
      name: "Pizza",
      description:
        "A classic margherita pizza with a crispy crust and fresh tomatoes",
      image: "/images/dishes/pizza.jpg",
    },
    {
      name: "Salad",
      description: "A fresh green salad with a light vinaigrette dressing",
      image: "/images/dishes/salad.jpg",
    },
    {
      name: "Sushi",
      description: "A delicious salmon sushi roll with wasabi and soy sauce",
      image: "/images/dishes/sushi.jpg",
    },
    {
      name: "Tacos",
      description:
        "A flavorful taco with a juicy beef patty and crispy tortilla",
      image: "/images/dishes/tacos.jpg",
    },
  ];

  return (
    <section className="section">
      <article className="grid md:grid-cols-2 gap-4">
        <article className="bg-gold rounded-lg p-8 justify-between flex flex-col h-full w-full">
          <article className="flex flex-col items-center h-full">
            <h2 className="heading">Restaurant at Ubuntu Backpackers</h2>
            <p className="text-slate-500">
              Savor the authentic taste of Zimbabwe with our locally-inspired
              dishes, crafted from fresh, seasonal ingredients. At Ubuntu
              Backpackers, every meal is a celebration of culture, community,
              and tradition—bringing people together one plate at a time.
            </p>
          </article>

          {/* CTA */}
          <Button className="w-fit" asChild variant="default">
            <Link href={`/reservations`}>Reservations</Link>
          </Button>
        </article>
        {/* Food images carousel */}
        <article className="w-full h-full md:col-span-1">
          <Carousel className="w-full max-h-[400px]">
            <CarouselContent>
              {dishes.map((dish, index) => (
                <CarouselItem key={index}>
                  <Image
                    alt={`${dish.name} at Ubuntu Backpackers`}
                    width={1000}
                    height={300}
                    src={dish.image}
                     className="h-fit min-w-full rounded-sm object-cover max-h-full md:max-h-[400px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </article>
    </section>
  );
}

export default Restaurant;
