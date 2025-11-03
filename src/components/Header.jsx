import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Download, ChevronsDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto space-y-6"
      >
        <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1.5 shadow-lg">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <img class="rounded-full w-36 h-36 object-cover" alt="Profile photo of Angelica Joyce L. De Matta" src="https://horizons-cdn.hostinger.com/fb20ab8f-4937-4796-a459-8f0b7538fbdd/9d16faf0a47237eee44bca9e1f9b3221.jpg" />
                </div>
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
          ANGELICA JOYCE L. DE MATTA
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-text/80">
          Cloud | DevOps | IT & Security Engineer
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-text/70">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Malabon City, Philippines</span>
          </div>
          <a href="mailto:demattaangelicajoyce@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} />
            <span>demattaangelicajoyce@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/angelica-joyce-de-matta-64b143219" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className="mr-2 h-4 w-4" /> View Resume
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary transition-transform hover:scale-105">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

      </motion.div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <iframe
          src="/Resume_De_Matta.pdf"
          className="w-full h-[80vh]"
          title="Resume Preview"
        />
      </Modal>
       <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronsDown size={24} className="text-primary/50" />
        </a>
    </header>
  );
};

export default Header;