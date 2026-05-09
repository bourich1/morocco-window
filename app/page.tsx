import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero/hero"
import CircularGallery from "@/components/CircularGallery/CircularGallery";
import Footer from "./components/footer/footer";

const cityImages = [
  { image: "/citys/marrakech.jpg", text: "Marrakech" },
  { image: "/citys/essaouira.jpg", text: "Essaouira" },
  { image: "/citys/Merzouga.jpg", text: "Merzouga" },
  { image: "/citys/Chefchaouen.jpg", text: "Chefchaouen" },
  { image: "/citys/fes.jpg", text: "Fes" },
];


export default function Home() {
  return (
        <main className="bg-[#ffffff]">
          <Header />
          <Hero />
          
         

          <section className="py-20 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#000000] text-center tracking-tight" style={{ fontFamily: 'var(--font-ubuntu)' }}>
              Explore Our Cities
            </h2>
            <p className="text-[#8d6e63] max-w-lg text-center mb-6 font-bold tracking-[0.2em] uppercase text-xs opacity-90">
              Discover the magic and heritage of Morocco
            </p>
            <div className="w-12 h-[1px] bg-[#5D4037]/20 mb-12"></div>
            <div style={{ height: '600px', width: '100%', position: 'relative', overflow: 'hidden' }}>
              {/* Background Brand Text */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-[30%] -translate-y-1/2 font-black tracking-tighter pointer-events-none select-none text-center opacity-[0.03] z-0 text-black uppercase"
                style={{ 
                  fontSize: 'clamp(3rem, 20vw, 13rem)', 
                  fontFamily: 'var(--font-ubuntu)',
                  lineHeight: '0.8'
                }}
              >
                MOROCCO <br /> WINDOW
              </div>

              <div className="relative z-10 h-full">
                <CircularGallery 
                  items={cityImages}
                  bend={3} 
                  textColor="#000000" 
                  font="bold 24px var(--font-ubuntu)"
                  borderRadius={0.05} 
                  scrollEase={0.02}
                  scrollSpeed={1.2}
                />
              </div>
            </div>
          </section>

          <Footer />
        </main>
  );
}
