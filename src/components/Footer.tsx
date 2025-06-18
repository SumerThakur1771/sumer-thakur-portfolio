
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
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
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-purple-500/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-purple-500/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-purple-500/20">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Sumer Thakur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
