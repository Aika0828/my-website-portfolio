import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-text/80 leading-relaxed">
        Results-driven Cloud and DevOps Engineer with hands-on experience in AWS, Terraform, and CI/CD automation. Passionate about designing secure, scalable, and efficient infrastructures that enhance cloud reliability and performance.
      </p>
    </SectionWrapper>
  );
};

export default About;