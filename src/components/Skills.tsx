
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'Python']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Redux', 'Next.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Postman', 'Figma']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Express', 'Mongoose', 'JWT', 'Cloudinary', 'Mapbox']
    },
    {
      title: 'Design & UX',
      skills: ['Figma', 'Prototyping', 'UX Research', 'Responsive Design', 'UI/UX']
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {allSkills.map((skill, index) => (
            <div
              key={skill}
              className="px-6 py-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full hover:scale-105 hover:bg-purple-500/20 transition-all duration-300 cursor-default animate-fadeInUp hover:shadow-lg hover:shadow-purple-500/25"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm font-medium text-foreground">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default p-2 rounded-lg hover:bg-purple-500/10"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
