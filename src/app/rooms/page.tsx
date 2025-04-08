import { Room } from "@/components/home/OurRooms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

const RoomsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center mb-12">Our Rooms</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Card key={room.name} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{room.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Amenities:</h3>
                <ul className="list-disc pl-5 text-sm">
                  {room.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">${room.price} per night</span>
                {room.additionalPersonPrice > 0 && (
                  <span className="text-sm text-gray-500">
                    +${room.additionalPersonPrice} per additional person
                  </span>
                )}
              </div>
              <Button className="mt-4 w-full text-white">
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;