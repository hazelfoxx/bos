import Features from "@/components/Features";
import Hero from "@/components/Hero";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brother Solutions - Printer Setup Guide",
  description: "Brother Solutions - Printer Setup Guide",
 
};

export default function Home() {
  return (
    <>
    
    
     <Hero />
     <Features />
  
     
    </>
  );
}
