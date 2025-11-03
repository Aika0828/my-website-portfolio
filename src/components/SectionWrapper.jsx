import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionWrapper = ({ children, id, className }) => {
  return (
    <motion.section
      id={id}
      className={cn('py-20 md:py-28 px-4', className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;