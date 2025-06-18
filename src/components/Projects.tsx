
import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StayScape',
      description: 'A full-stack accommodation platform with CRUD listings, Mapbox maps, Cloudinary uploads, and session-based authentication.',
      link: 'https://stayscape-v7dj.onrender.com/listings',
      tech: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'Cloudinary']
    },
    {
      title: 'EchoMates',
      description: 'A Figma-designed SaaS prototype for international student networking with AI-based prompts and goal tracking.',
      link: 'https://www.figma.com/proto/ZcOYtt6E7OLUVqNIPX41us/EchoMates_Final-Exam',
      tech: ['Figma', 'UX Design', 'Prototyping', 'AI Integration']
    },
    {
      title: 'Tiny Taskers',
      description: 'A SaaS job platform built with React, Redux, and Node.js featuring multilingual support, JWT authentication, and scalable APIs.',
      link: '#',
      tech: ['React', 'Redux', 'Node.js', 'JWT', 'i18n']
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-pink-950/10 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project screenshot placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-6 flex items-center justify-center text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                {project.title.charAt(0)}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/20 group-hover:border-purple-400/50 transition-all"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
