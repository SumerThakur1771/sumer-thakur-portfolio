
import React from 'react';
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import TechStack from './TechStack';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <p className="text-sm font-medium text-purple-400 tracking-wider uppercase">
              FULL-STACK WEB DEVELOPER
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">
                Sumer Thakur
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Turning ideas into scalable, full-stack web apps
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button size="icon" variant="outline" className="rounded-full border-purple-500/30 hover:bg-purple-500/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full border-purple-500/30 hover:bg-purple-500/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full border-purple-500/30 hover:bg-purple-500/20">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right content - Profile image and tech stack */}
        <div className="flex flex-col items-center space-y-8">
          {/* Profile image placeholder */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 flex items-center justify-center animate-glow">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl font-bold gradient-text">
                ST
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500/30 rounded-full animate-float delay-1000"></div>
          </div>

          {/* Tech stack icons */}
          <TechStack />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
