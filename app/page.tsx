import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold font-sans uppercase tracking-wide duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        shivankpndy
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
          <span className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700/60 bg-zinc-900/50 text-zinc-300">
              🎓 Student
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-700/60 bg-zinc-900/50 text-zinc-300">
              🤖 Developer @{" "}
              <Link
                target="_blank"
                href="https://aixor.studio"
                className="underline decoration-zinc-500/70 duration-500 hover:text-zinc-100"
              >
                Aixor Studios
              </Link>
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-700/60 bg-zinc-900/50 text-zinc-300">
              ⚡ AI • Apps • Web • Automations
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-700/60 bg-zinc-900/50 text-zinc-300">
              🥋 MMA athlete
            </span>
          </span>
        </h2>
      </div>
    </div>
  );

}
