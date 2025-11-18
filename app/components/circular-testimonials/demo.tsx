import React from "react";
import { CircularTestimonials } from './circular-testimonials';

const testimonials = [
  {
    quote:
      " is a vibrant city where ancient history and authentic Moroccan spirit meet in every corner.",
    name: "Marrakech ",
    designation: "Restaurant Critic",
    src:
      "/citys/marrakech.jpg",
  },
  {
    quote:
      "is a coastal gem where ocean winds, artistic spirit, and historic charm meet in perfect harmony.",
    name: "Essaouira",
    designation: "Frequent Visitor",
    src:
      "/citys/essaouira.jpg",
  },
  {
    quote:
      "is a desert paradise where golden dunes, silence, and endless horizons create an unforgettable escape.",
    name: "Merzouga",
    designation: "Satisfied Customer",
    src:
      "/citys/Merzouga.jpg",
  },
  {
    quote:
      "is a peaceful blue haven where calm streets and mountain views create a dreamlike escape.",
    name: "Chefchaouen ",
    designation: "Satisfied Customer",
    src:
      "/citys/Chefchaouen.jpg",
  },
  {
    quote:
      " is a timeless city where ancient wisdom, culture, and craftsmanship blend into a uniquely Moroccan experience.",
    name: "Fes ",
    designation: "Satisfied Customer",
    src:
      "/citys/fes.jpg",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="flex items-center justify-center min-h-screen p-6">
    <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
