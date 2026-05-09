"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("relative w-full bg-white overflow-hidden", className)}>
      {/* Massive Background Text for Texture */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-black tracking-tighter pointer-events-none select-none text-center opacity-[0.02] text-black uppercase"
        style={{ 
          fontSize: 'clamp(5rem, 25vw, 15rem)', 
          fontFamily: 'var(--font-ubuntu)',
          lineHeight: '0.8',
          whiteSpace: 'nowrap'
        }}
      >
        MOROCCO <br /> WINDOW
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center gap-16">
        {/* Brand Header */}
        <div className="flex flex-col items-center gap-6">
          <img 
            src="/logo.svg" 
            alt="Morocco Window" 
            className="h-16 w-auto grayscale brightness-0 opacity-90"
          />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center" style={{ fontFamily: 'var(--font-ubuntu)' }}>
            <span className="text-foreground">WINDOW TO</span> <span className="text-[#8d6e63]">MOROCCO</span>
          </h2>
          <p className="text-muted-foreground font-medium text-center max-w-md leading-relaxed italic" style={{ fontFamily: 'var(--font-playfair)' }}>
            "Discover the magic and heritage of the Kingdom through our curated lens."
          </p>
        </div>
        {/* Legal & Final Line */}
        <div className="w-full border-border/50 flex flex-col items-center" style={{paddingBottom:"20px" , paddingTop:"0px !important"}}>
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground text-center">
            © {new Date().getFullYear()} Morocco Window — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
