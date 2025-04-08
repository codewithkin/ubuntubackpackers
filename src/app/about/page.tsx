"use client";
import {motion} from "framer-motion";

const AboutPage = () => {
  return (
    <section className="section">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Welcome to Ubuntu Backpackers</h2>
        <p className="text-lg text-gray-700">
          At Ubuntu Backpackers, we offer more than just a place to stay – we provide a home away from home.
          Located in the heart of Mutare, Zimbabwe, we are committed to making your visit as comfortable,
          affordable, and unforgettable as possible. Our cozy lodgings, combined with personalized service,
          make us the perfect choice for travelers seeking a blend of cultural immersion and comfort.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission at Ubuntu Backpackers is simple: to provide travelers with a warm, welcoming environment
          that fosters cultural exchange, comfort, and a sense of belonging. We believe that travel is more
          than just a journey; it is an opportunity to connect, learn, and grow. Whether you're visiting for a
          few days or planning a longer stay, our goal is to ensure you have an experience that feels like
          home, surrounded by friendly faces and a peaceful atmosphere.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>**Cultural Unity:** We aim to foster connections and learning through shared experiences.</li>
          <li>**Sustainability:** We prioritize eco-friendly practices and are committed to minimizing our impact on the environment.</li>
          <li>**Hospitality:** We believe in the power of a smile and a welcoming atmosphere for all our guests.</li>
          <li>**Affordable Comfort:** We offer clean, comfortable rooms that fit a range of budgets, ensuring everyone can find a suitable option.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          Ubuntu Backpackers was born from a deep love for Africa’s vibrant cultures and the belief that travel
          can bring people together. Our founder, a passionate traveler, wanted to create a space where visitors
          could experience Zimbabwe’s beauty while enjoying an authentic and enriching stay. What started as a
          small guesthouse has grown into a beloved home for travelers from all over the world. We’ve stayed true
          to our roots, embracing Africa’s warmth and hospitality to provide you with an unforgettable stay.
        </p>
      </section>

       {/* Meet the Team */}
       <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a passionate team of individuals, each contributing a unique talent to make Ubuntu Backpackers
          a place where comfort, culture, and creativity blend seamlessly. Get to know the people behind the scenes
          who bring our vision to life and help make your stay unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Christa */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/christa.jpg"
              alt="Christa"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Christa</h3>
            <p className="text-lg text-gray-700">
              Christa, our seasoned veteran, is the heart and soul of Ubuntu Backpackers. She coordinates everything from
              daily operations to the garden, with an artistic touch that shines in every detail. Her homemade meals are
              a guest favorite — trust us, you don’t want to miss them!
            </p>
          </motion.div>

          {/* Unity */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/unity.jpg"
              alt="Unity"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Unity</h3>
            <p className="text-lg text-gray-700">
              Unity is the glue that keeps everything together. Whether it’s tidying up or crafting exquisite cheese, she
              ensures that every guest feels welcome and cared for. Her warm presence makes everyone feel at home.
            </p>
          </motion.div>

          {/* Oliver */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/oliver.jpeg"
              alt="Oliver"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Oliver</h3>
            <p className="text-lg text-gray-700">
              Oliver is our jack-of-all-trades. Whether it's fixing something, building, or just making sure things run
              smoothly, he’s the person to turn to. His passion for detail is reflected in everything from repairs to his
              impressive stonework.
            </p>
          </motion.div>

          {/* Tawanda (Christa's replacement) */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/tawanda.jpg"
              alt="Tawanda"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Tawanda</h3>
            <p className="text-lg text-gray-700">
              Tawanda steps in whenever Christa is away. A networker at heart, she ensures everything runs smoothly and
              stays well-informed. Her dedication to Ubuntu is evident in everything she does.
            </p>
          </motion.div>

          {/* Rudo */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/rudo.jpeg"
              alt="Rudo"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Rudo</h3>
            <p className="text-lg text-gray-700">
              Rudo is the wizard behind our finances, managing every penny with an expert touch. If it’s an Excel
              spreadsheet, Rudo’s already ahead of the game. She keeps track of everything so we can stay focused on
              providing top-notch service to our guests.
            </p>
          </motion.div>

          {/* Eddy */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/eddy.jpg"
              alt="Eddy"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Eddy</h3>
            <p className="text-lg text-gray-700">
              Eddy is the creative spirit of Ubuntu Backpackers. He weaves melodies, creates art, and expresses his
              creativity in every way possible. His work is visible in the paintings adorning our walls and the artistic
              details of our entrance gate.
            </p>
          </motion.div>

          {/* Tatenda */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/tatenda.jpeg"
              alt="Tatenda"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Tatenda</h3>
            <p className="text-lg text-gray-700">
              Tatenda’s craftsmanship is seen in every piece of woodwork at Ubuntu. His dedication to sustainability and
              creating beautiful furniture from reclaimed wood makes him an essential part of our team.
            </p>
          </motion.div>

          {/* Tawanda (2nd) */}
          <motion.div
            className="text-center border border-primary rounded-lg shadow-lg p-6 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderColor: "#f59e0b", // Gold
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <img
              src="/images/people/tawanda.jpeg"
              alt="Tawanda"
              className="rounded-full mb-4 w-32 h-32 mx-auto"
            />
            <h3 className="text-xl font-semibold text-primary">Tawanda</h3>
            <p className="text-lg text-gray-700">
              Tawanda brings rhythm and life to Ubuntu with his musical talents. A member of Dandaroo Vibes, he creates
              an energetic atmosphere that perfectly complements our vibrant, creative community.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;