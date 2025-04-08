import Image from "next/image";
import Room from "../micro/Room";

export type Room = {
  name: string;
  description: string;
  price: number; // base price per person or room
  additionalPersonPrice: number; // 0 if not applicable
  people: number; // max number of people it can accommodate
  size: number; // in square meters
  beds: number;
  amenities: string[];
  image: string;
};

const rooms: Room[] = [
  {
    name: "Flame Lily Ensuite",
    description:
      "Flame Lily, named after Zimbabwe's national flower, offers a private ensuite bathroom with a handcrafted elephant sink, a desk, garden view, and coffee/tea making facilities.",
    price: 48,
    additionalPersonPrice: 0,
    people: 2,
    size: 18,
    beds: 2,
    amenities: ["Own Bathroom", "Free WiFi", "Towels", "Fan"],
    image: "/images/showcases/flame-lily-ensuite.png",
  },
  {
    name: "Protea Family Room",
    description:
      "A spacious room for families or friends with shades of blue, a foldable sofa for extra sleeping space, and a desk with shelf for work or reading.",
    price: 40,
    additionalPersonPrice: 17,
    people: 4,
    size: 20,
    beds: 3,
    amenities: ["Shared Bathroom", "Free WiFi", "Towels", "Fan"],
    image: "/images/showcases/protea-family-room.png",
  },
  {
    name: "Aloe Dormitory",
    description:
      "An upstairs dormitory for up to five people, featuring multiple bed options, a cupboard, and a natural, cozy interior ideal for group travelers.",
    price: 17,
    additionalPersonPrice: 0,
    people: 5,
    size: 20,
    beds: 4,
    amenities: [
      "Shared Bathroom",
      "Free WiFi",
      "Towels",
      "Lockable Cupboards",
      "Fan",
    ],
    image: "/images/showcases/aloe-dormitory.png",
  },
  {
    name: "Baobab",
    description:
      "A sunny upstairs room with a double bed, perfect for couples seeking a warm, peaceful stay with golden lighting and simple amenities.",
    price: 35,
    additionalPersonPrice: 0,
    people: 2,
    size: 20,
    beds: 1,
    amenities: ["Shared Bathroom", "Free WiFi", "Towels", "Fan"],
    image: "/images/showcases/baobab.png",
  },
  {
    name: "Bougainvillea",
    description:
      "A compact single room ideal for business travelers. Despite its small size, it can accommodate two people and offers a warm African-themed design.",
    price: 25,
    additionalPersonPrice: 10,
    people: 2,
    size: 20,
    beds: 1,
    amenities: ["Shared Bathroom", "Free WiFi", "Towel", "Fan"],
    image: "/images/showcases/bougainvillea.png",
  },
  {
    name: "Orchid Loft",
    description:
      "A romantic loft with a glass roof view of the stars, designed as a cozy honeymoon suite with a double bed and optional extra mattresses.",
    price: 25,
    additionalPersonPrice: 17,
    people: 4,
    size: 20,
    beds: 3,
    amenities: ["Shared Bathroom", "Free WiFi", "Towels", "Fan"],
    image: "/images/showcases/orchid-loft.png",
  },
  {
    name: "Jacaranda Outside",
    description:
      "A budget outdoor sleeping option with a foldable sofa, ideal for short overnight stays, especially for travelers heading to Mozambique.",
    price: 12,
    additionalPersonPrice: 0,
    people: 2,
    size: 10,
    beds: 1,
    amenities: ["Shared Bathroom", "Free WiFi"],
    image: "/images/showcases/jacaranda-outside.png",
  },
];

function OurRooms() {
  return (
    <section className="section">
      <h2 className="heading">Our Rooms</h2>

      {/* Rooms */}
      <article className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 gap-4 md:grid-rows-1">
        {/* First room (has its own column) */}
        <Room room={rooms[0]} />

        {/* Second and third rooms */}
        {/* Second room */}
        <Room room={rooms[1]} />

        <Room room={rooms[2]} />
      </article>
    </section>
  );
}

export default OurRooms;
