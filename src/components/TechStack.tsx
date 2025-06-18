
import React from 'react';

const TechStack = () => {
  const techIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'GitHub', icon: '🐙' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {techIcons.map((tech, index) => (
        <div
          key={tech.name}
          className="tech-icon animate-float group"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
            {tech.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
