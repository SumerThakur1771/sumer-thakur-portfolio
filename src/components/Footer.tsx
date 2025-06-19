
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sumer-thakur-658808288/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/SumerThakur1771', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:thakur.sum@northeastern.edu';
  };

  return (
    <footer className="border-t border-purple-500/20 bg-gradient-to-t from-purple-950/20 to-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Name */}
          <h3 className="text-2xl font-bold gradient-text">
            Sumer Thakur
          </h3>

          {/* Social links */}
          <div className="flex gap-4">
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-purple-500/20"
              onClick={openLinkedIn}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-purple-500/20"
              onClick={openGitHub}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-purple-500/20"
              onClick={openEmail}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Sumer Thakur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
