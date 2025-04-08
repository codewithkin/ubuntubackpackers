import Header from "@/components/home/Header";
import OurRooms from "@/components/home/OurRooms";
import Restaurant from "@/components/home/Restaurant";
import RoomImage from "@/components/home/RoomImage";

export default function Home() {
  return (
    <main>
      <Header />
      <RoomImage />
      <OurRooms />
      <Restaurant />
    </main>
  );
}
