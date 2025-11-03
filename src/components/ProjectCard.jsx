import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-video bg-secondary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary/20">
        {Icon && <Icon className="w-20 h-20 text-secondary transition-transform duration-300 group-hover:scale-110" />}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 flex justify-between items-start">
          <span className="flex-1">{project.title}</span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ml-2" />
        </h3>
        <p className="text-sm text-text/70 mt-2 flex-grow">{project.description}</p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;