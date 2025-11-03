import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Interested in working together or learning more about my work? Feel free to reach out.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8">
          <a href="mailto:demattaangelicajoyce@gmail.com" className="flex items-center gap-2 font-semibold text-primary-foreground hover:text-secondary transition-colors">
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/angelica-joyce-de-matta-64b143219" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-primary-foreground hover:text-secondary transition-colors">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="/Resume_De_Matta.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-primary-foreground hover:text-secondary transition-colors">
            <FileText size={20} />
            <span>Download Resume</span>
          </a>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Angelica Joyce L. De Matta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;