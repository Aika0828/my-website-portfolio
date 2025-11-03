import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-orange-950/20" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center gap-4 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20"
            >
              <Cloud className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20"
            >
              <Code className="w-8 h-8 text-orange-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
            >
              <Zap className="w-8 h-8 text-emerald-400" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
            AWS Cloud Architect
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into scalable cloud solutions with cutting-edge AWS technologies
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              Serverless Architecture
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              Infrastructure as Code
            </span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              Cloud Security
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-12"
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;