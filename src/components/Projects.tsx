
import React from 'react';
import { Button } from './ui/button';
import { ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StayScape',
      description: 'A full-stack accommodation platform with CRUD listings, Mapbox maps, Cloudinary uploads, and session-based authentication. Built with React, Node.js, and MongoDB.',
      link: 'https://stayscape-v7dj.onrender.com/listings',
      github: 'https://github.com/SumerThakur1771/StayScape',
      tech: ['React', 'Node.js', 'MongoDB', 'Mapbox', 'Cloudinary'],
      image: '/lovable-uploads/eb5dea90-7779-4f0f-8eae-f73280d2a173.png'
    },
    {
      title: 'EchoMates',
      description: 'A Figma-designed SaaS prototype for international student networking with AI-based prompts and goal tracking. Comprehensive UX research and design.',
      link: 'https://www.figma.com/proto/ZcOYtt6E7OLUVqNIPX41us/EchoMates_Final-Exam',
      github: 'https://www.figma.com/design/ZcOYtt6E7OLUVqNIPX41us/EchoMates_Final-Exam?node-id=79-153&t=oUw3n7Exz6qQEhhP-0',
      tech: ['Figma', 'UX Design', 'Prototyping', 'AI Integration'],
      image: '/lovable-uploads/2e1897c3-7005-4aae-90d4-593b636ca9be.png'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background via-pink-950/10 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            My Projects
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fadeInUp ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden border border-purple-500/20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500/30 hover:bg-purple-500/20 px-6 py-3 rounded-full font-medium"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    {project.title === 'EchoMates' ? (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Wireframe Link
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Code
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
