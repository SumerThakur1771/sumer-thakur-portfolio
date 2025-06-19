
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Master of Science in Information Systems',
      company: 'Northeastern University',
      location: 'Boston, MA',
      duration: 'Sep 2024 - Present',
      description: 'Pursuing advanced studies in information systems with focus on full-stack development, database management, and software engineering principles.',
      type: 'education'
    },
    {
      title: 'Full Stack Developer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: 'Jun 2023 - Aug 2024',
      description: 'Developed and deployed multiple full-stack web applications using MERN stack. Created responsive user interfaces, implemented RESTful APIs, and integrated third-party services like Mapbox and Cloudinary.',
      type: 'work'
    },
    {
      title: 'Software Developer Intern',
      company: 'Tech Solutions Inc.',
      location: 'Boston, MA',
      duration: 'Feb 2023 - May 2023',
      description: 'Contributed to enterprise-level ERP system development. Implemented performance optimizations that improved system response time by 40%. Collaborated with cross-functional teams using Agile methodologies.',
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background via-slate-950/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 animate-fadeInUp ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform md:-translate-x-2 z-10 animate-pulse">
                <div className="absolute inset-1 bg-background rounded-full"></div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">{exp.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-medium text-purple-300">{exp.company}</span>
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  <div className="mt-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      exp.type === 'education' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {exp.type === 'education' ? 'Education' : 'Work Experience'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
