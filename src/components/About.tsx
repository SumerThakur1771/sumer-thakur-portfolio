
import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const About = () => {
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1xwOpe0Yfvg5xhb5EE1lVNv4TfCGVWwmM/view?usp=sharing', '_blank');
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-purple-950/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Master's student in Information Systems at Northeastern University, specializing in full-stack web development and user experience design. With hands-on experience in the MERN stack, I've successfully delivered performance-enhancing solutions in both academic and industry settings.
            </p>
            <p>
              My expertise spans across modern web technologies including React.js, Node.js, MongoDB, and cloud platforms. I'm passionate about creating scalable applications that combine robust backend functionality with intuitive user interfaces, always focusing on clean code architecture and optimal user experience.
            </p>
          </div>

          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            onClick={openResume}
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
