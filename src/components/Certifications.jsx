import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Modal from '@/components/ui/modal';
import { Award, GraduationCap, ShieldCheck } from 'lucide-react';

const certifications = [
  { 
    icon: ShieldCheck, 
    title: "AWS Certified Cloud Practitioner", 
    hasImage: true,
    imageUrl: "/my-website-portfolio/AWS Certified Cloud Practitioner_20250307.png"
  },
  { 
    icon: ShieldCheck, 
    title: "AWS Certified Solutions Architect Associate", 
    hasImage: true,
    imageUrl: "/my-website-portfolio/AWS Certified Solutions Architect - Associate_20251205.jpg"
  },
  { 
    icon: ShieldCheck, 
    title: "ISC2 Certified in Cybersecurity (CC)", 
    hasImage: false
  },
  // { icon: GraduationCap, title: "Magna Cum Laude – Adamson University" },
];

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    if (cert.hasImage) {
      setSelectedCert(cert);
      setIsModalOpen(true);
    }
  };

  return (
    <SectionWrapper id="certifications" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Certifications & Achievements</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
              cert.hasImage ? 'hover:bg-blue-50 cursor-pointer' : 'hover:bg-blue-50'
            }`}
            onClick={() => handleCertClick(cert)}
          >
            <div className="bg-secondary/20 text-secondary p-3 rounded-full">
              <cert.icon className="w-6 h-6" />
            </div>
            <p className="font-semibold text-text/90">{cert.title}</p>
          </div>
        ))}
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedCert && (
          <div className="p-4">
            <h3 className="text-xl font-bold text-center mb-4">{selectedCert.title}</h3>
            <img 
              src={selectedCert.imageUrl} 
              alt={selectedCert.title}
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
};

export default Certifications;