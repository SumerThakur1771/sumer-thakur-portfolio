
import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-purple-950/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Master's student at Northeastern University, passionate about crafting full-stack applications and intuitive UIs. I've delivered performance-boosting ERP features in industry and shipped production-ready web apps using the MERN stack.
            </p>
            <p>
              I believe in writing clean, efficient code backed by thoughtful UX research. My approach combines technical expertise with user-centered design to create applications that not only function flawlessly but also provide exceptional user experiences.
            </p>
          </div>

          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
