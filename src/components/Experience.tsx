
import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      title: 'Master of Science in Information Systems',
      company: 'Northeastern University',
      location: 'Boston, Massachusetts',
      duration: 'Sep 2024 - Dec 2026',
      description: [
        'Relevant Coursework: Web Design and User Experience, Application Engineering and Development, Concepts of Object-Oriented Design, User Experience Design and Testing',
        'Maintaining strong academic performance with focus on practical application of theoretical concepts',
        'Actively participating in research projects and collaborative learning environments'
      ],
      skills: ['Information Systems', 'Software Engineering', 'Web Development', 'UX Design'],
      type: 'education'
    },
    {
      title: 'Event Assistant',
      company: 'Northeastern University',
      location: 'Boston, Massachusetts',
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
      location: 'Ludhiana, Punjab',
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-medium text-purple-300">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">{exp.duration}</span>
                  </div>

                  {/* Dropdown toggle button */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
                  >
                    {expandedItems.includes(index) ? (
                      <>
                        <span className="text-sm font-medium">Show Less</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-medium">Show More</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {/* Detailed description - shown when expanded */}
                  {expandedItems.includes(index) && (
                    <div className="space-y-3 mb-4 border-t border-purple-500/20 pt-4">
                      {exp.description.map((point, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                          • {point}
                        </p>
                      ))}
                      
                      {exp.skills.length > 0 && (
                        <div className="mt-4">
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
                    </div>
                  )}
                  
                  <div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
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
