import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Award, GraduationCap, ShieldCheck } from 'lucide-react';

const certifications = [
  { icon: ShieldCheck, title: "AWS Certified Cloud Practitioner" },
  { icon: ShieldCheck, title: "ISC2 Certified in Cybersecurity (CC)" },
  // { icon: GraduationCap, title: "Magna Cum Laude – Adamson University" },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Certifications & Achievements</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
            <div className="bg-secondary/20 text-secondary p-3 rounded-full">
              <cert.icon className="w-6 h-6" />
            </div>
            <p className="font-semibold text-text/90">{cert.title}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;