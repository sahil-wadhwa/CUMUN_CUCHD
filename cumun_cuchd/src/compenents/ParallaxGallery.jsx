import React from "react";

const ParallaxGallery = () => {
  const sections = [
    {
      image: "https://i.ibb.co/KcyTtsRQ/IMG-9447.jpg",
      title: "Explore Committees",
      desc: "Explore the committees and their agendas.",
      buttonText: "Explore Now",
    },
    {
      image: "https://i.ibb.co/rfHhkp0T/IMG-9321.jpg",
      title: "See the Schedule",
      desc: "See the 3 Day Itinerary.",
      buttonText: "Go to Itinerary",
    },
    {
      image: "https://i.ibb.co/99nHVvpz/IMG-8830.jpg",
      title: "Delegate Registrations",
      desc: "Fill out the delegate registration form.",
      buttonText: "Delegate Registration",
    },
  ];

  return (
    <div className="w-screen h-full relative overflow-hidden">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-screen h-screen bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Foreground Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-lg md:text-xl max-w-xl">{section.desc}</p>
            <button className="mt-6 w-[14vw] max-sm:w-[19vw] px-5 h-[5vh] max-sm:h-[15vh] max-sm:text-center flex items-center justify-center bg-transparent border border-2 border-white text-white rounded-lg hover:bg-red-700 transition duration-300">{section.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxGallery;