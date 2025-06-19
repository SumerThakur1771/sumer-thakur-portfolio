
import React from 'react';
import { Button } from './ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sumer-thakur-658808288/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/SumerThakur1771', '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-8 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Let's Connect
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:thakur.sum@northeastern.edu"
              className="block p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <div className="flex items-center justify-center gap-3 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-medium">thakur.sum@northeastern.edu</span>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center pt-8">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full border-purple-500/30 hover:bg-purple-500/20"
              onClick={openLinkedIn}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full border-purple-500/30 hover:bg-purple-500/20"
              onClick={openGitHub}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
