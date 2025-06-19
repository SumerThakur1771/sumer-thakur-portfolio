
import React from 'react';
import { ChevronDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from './ui/button';
import TechStack from './TechStack';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Profile Image */}
        <div className="relative mb-8 animate-fadeInUp">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center animate-glow">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-4xl font-bold gradient-text">
              ST
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-float"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500/30 rounded-full animate-float delay-1000"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            FULL-STACK WEB DEVELOPER
          </p>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm{' '}
            <span className="gradient-text">
              Sumer Thakur
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm driven by curiosity and a passion for solving real world problems through technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Contact me here
            </Button>
            <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/20 px-8 py-3 rounded-full text-lg font-medium">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center pt-4">
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

        {/* Tech stack icons */}
        <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
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
