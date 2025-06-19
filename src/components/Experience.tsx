
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Event Assistant',
      company: 'Northeastern University',
      location: 'Boston, Massachusetts, United States',
      duration: 'Jan 2025 - Present',
      description: [
        'Maintained safety and order by enforcing Fire Marshal and NU Division of Public Safety regulations.',
        'Delivered welcoming event experiences by addressing inquiries and ensuring smooth audience engagement.',
        'Supported front-of-house operations through ticket checking, program distribution, and patron assistance.'
      ],
      skills: ['Event Management', 'Customer Service', 'Team Collaboration', 'Problem Solving'],
      type: 'work'
    },
    {
      title: 'Digital Operation Intern',
      company: 'Ralson India Limited',
      location: 'Ludhiana, Punjab, India',
      duration: 'Jan 2024 - Jun 2024',
      description: [
        'Enhanced website usability and increased user engagement by 5% through WordPress redesign and optimization.',
        'Achieved 4% growth in organic traffic through targeted SEO strategies and keyword optimization.',
        'Improved workflow efficiency by assisting in Channel Konnect ERP integration, reducing manual errors by 5%.',
        'Boosted user retention and reduced bounce rates by 6% through usability testing and feature refinements.'
      ],
      skills: ['WordPress', 'SEO', 'UI/UX Design', 'ERP Integration'],
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background via-slate-950/20 to-background">
      <div className="container mx-auto max-w-5xl">
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
              className={`relative flex items-start mb-16 animate-fadeInUp ${
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
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">{exp.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-medium text-purple-300">{exp.company}</span>
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {exp.description.map((point, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>

                  {exp.skills.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-purple-300 mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                      Work Experience
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
