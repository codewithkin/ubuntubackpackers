import { Card, CardContent } from "../ui/card";

export const testimonials = [
  {
    name: "Chipo M.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "March 2024",
    testimonial:
      "Ubuntu Backpackers is the best place I've stayed in Mutare! The staff were so friendly, and the homemade food was delicious. I felt safe, relaxed, and completely at home.",
  },
  {
    name: "Tariro K.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "February 2024",
    testimonial:
      "Loved the rustic African feel and the beautiful gardens. The Flame Lily room was cozy and peaceful. I’ll definitely return for another escape into nature.",
  },
  {
    name: "David N.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    date: "January 2024",
    testimonial:
      "As a traveler on a budget, Ubuntu gave me so much more than I expected. Clean rooms, Wi-Fi, and amazing vibes. I met great people here and enjoyed local culture firsthand.",
  },
  {
    name: "Linda P.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    date: "December 2023",
    testimonial:
      "The Ubuntu team made our honeymoon unforgettable. The loft room was magical under the stars, and their tours were insightful and fun. Highly recommended!",
  },
  {
    name: "Tinashe R.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    date: "November 2023",
    testimonial:
      "Perfect base for exploring Mutare and the Eastern Highlands. The kitchen, the vibe, the art — everything felt thoughtfully done. Big thumbs up!",
  },
];

function Testimonials() {
  return (
    <section className="section">
      <h2 className="heading">What people are saying</h2>

      <article className="grid md:grid-cols-3 md:grid-rows-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white border border-purple-580">
            <CardContent>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
              <p className="mt-2 text-gray-700">{testimonial.testimonial}</p>
            </CardContent>
          </Card>
        ))}
      </article>
    </section>
  );
}

export default Testimonials;
