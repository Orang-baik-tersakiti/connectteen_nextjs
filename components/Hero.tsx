'use client'
import { useRef } from "react";
import { Button } from "./ui/button";
import { Users, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[url('/img/hero.jpg')] bg-cover bg-center">
      <div className={`relative z-10 text-center animate-fade-in text-white px-6 py-16 max-w-5xl mx-auto
      transition-all duration-500 ease-out`}>

        <div className="flex justify-center mb-6">
          <div className="bg-white/20 cursor-pointer backdrop-blur-lg rounded-full border-4 border-white/40 shadow-2xl">
            <img
              src="/img/connectteen_icon.jpg"
              className="w-28 h-28 rounded-full hover:opacity-90 transition-transform duration-300"
              alt="ConnectTeen"
            />
          </div>
        </div>

        <h1 className="mb-2 md:text-3xl text-2xl font-bold drop-shadow-lg">
          Haii Teens! Selamat Datang
        </h1>

        <p className="mb-8 lg:text-xl md:w-[34rem] text-[1rem] drop-shadow-md">
          Temukan teman baru, bagikan cerita, dan jelajahi dunia bersama di ConnectTeen Community!
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <Button
            size="default"
            onClick={() => onNavigate("send")}
            className="gap-2 bg-white text-sm text-blue-600 hover:bg-blue-100 shadow-xl cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            Ayo buat pesanmu!
          </Button>

          <Button
            size="default"
            variant="outline"
            className="gap-2 bg-blue-400 text-sm border-2 border-white text-white hover:bg-blue-300 shadow-xl cursor-pointer"
          >
            <Users className="w-5 h-5" />
            Jelajahi komunitas
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white rounded-t-[50px]" />
    </section>
  );
}
