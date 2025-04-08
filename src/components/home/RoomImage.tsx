"use client";
import { motion } from "framer-motion";

function RoomImage() {
  return (
    <motion.section
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={{
        x: 1,
        opacity: 1,
      }}
      style={{
        backgroundImage: 'url("/images/showcases/room1.png")',
      }}
      className="bg-cover bg-no-repeat bg-center h-100 w-full"
    ></motion.section>
  );
}

export default RoomImage;
