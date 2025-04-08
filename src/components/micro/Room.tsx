import Image from "next/image";
import { Room as RoomType } from "../home/OurRooms";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowRight, Bed, PersonStandingIcon, Ruler } from "lucide-react";

function Room({ room }: { room: RoomType }) {
  return (
    <article className="flex flex-col gap-2 items-center">
      {/* Room image */}
      <Image
        src={room.image}
        alt={room.name}
        width={600}
        height={600}
        className="w-full"
      />

      {/* Amenities */}
      <article className="flex gap-2 items-center flex-wrap overflow-x-auto w-full">
        {
            room.amenities.map((amenity: string) => (
                <Badge key={amenity} variant="outline">{amenity}</Badge>
            ))
        }
      </article>

      {/* Room metadata */}
      <article className="flex flex-col gap-2 justify-center">
        {/* Room price */}
        <h3 className="text-4xl font-semibold my-2">
          ${room.price}
          <span className="text-slate-500 text-lg font-regular">/ night</span>
        </h3>

        {/* Room name */}
        <h3 className="text-2xl font-medium">{room.name}</h3>
        <p className="text-slate-700">{room.description}</p>

        <article className="my-2 flex text-slate-500 gap-4 text-sm">
          <p className="flex gap-1 items-center"><Bed size={18} /><span>{room.beds} beds</span></p>
          <p className="flex gap-1 items-center"><PersonStandingIcon size={18} /><span>{room.people} people</span></p>
          <p className="flex gap-1 items-center"><Ruler size={18} /><span>{room.size} m<sup>2</sup></span></p>
        </article>
      </article>

        {/* CTA */}     
        <Button className="self-start hover:gap-4 flex gap-2 transition-all duration-300" variant="secondary" asChild >
            <Link href={`/rooms/${room.name.split("").join('')}`}>
            <span>Book {room.name}</span>
            <ArrowRight />
            </Link>
        </Button>
    </article>
  );
}

export default Room;
