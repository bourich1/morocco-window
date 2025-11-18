import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero/hero"
import { CircularTestimonialsDemo } from "./components/circular-testimonials/demo";

export default function Home() {
  return (
        <>
          <Header />
          <Hero />
          <CircularTestimonialsDemo />
        </>
  );
}
