import CallToAction from "@/components/home/CallToAction";
import Header from "@/components/home/Header";
import OurRooms from "@/components/home/OurRooms";
import Restaurant from "@/components/home/Restaurant";
import RoomImage from "@/components/home/RoomImage";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <RoomImage />
      <OurRooms />
      <Restaurant />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}
