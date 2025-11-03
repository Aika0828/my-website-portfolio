import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { FileCode, Network, GitMerge, Wifi, Activity, ShieldAlert, Container, Share2, Laptop as NotebookText } from 'lucide-react';

const projectsData = [
    { title: "Infrastructure as a Code - Terraform", description: "Standardized infrastructure deployment using Terraform for consistency and efficiency.", url: "https://www.notion.so/Terraform-Method-of-Procedure-29a6aa96f90b80f89ab4c67e174468dc", icon: FileCode },
    { title: "Private Networking with VPC Endpoints", description: "Secured AWS service access within a VPC, avoiding public internet exposure.", url: "https://www.notion.so/Private-Networking-with-VPC-Endpoints-29e6aa96f90b809b925be6830d1c20f6", icon: Network },
    { title: "Interconnecting VPC with VPC Peering", description: "Established private connections between VPCs for seamless resource sharing.", url: "https://www.notion.so/Interconnecting-VPC-with-VPC-Peering-29e6aa96f90b802db499d91a78d83134", icon: GitMerge },
    { title: "AWS Client VPN", description: "Enabled secure remote access to AWS resources for distributed teams.", url: "https://www.notion.so/AWS-Client-VPN-29e6aa96f90b809e9a98da2605443096", icon: Wifi },
    { title: "Integration of Amazon X-Ray", description: "Implemented distributed tracing to analyze and debug application performance.", url: "https://www.notion.so/Integration-of-Amazon-Xray-1f26aa96f90b80a19883f7817f14bda4", icon: Activity },
    { title: "AWS WAF Best Practices", description: "Protected web applications from common exploits with AWS WAF configurations.", url: "https://www.notion.so/AWS-WAF-Best-Practices-1f36aa96f90b8013be5fedd19f770c50", icon: ShieldAlert },
    { title: "ECS Challenge", description: "Solved a complex challenge involving container orchestration with Amazon ECS.", url: "https://www.notion.so/ECS-Challenge-1bc6aa96f90b80b7bb40e1480b78162b", icon: Container },
    { title: "Network Challenge 2", description: "Designed and troubleshooted an advanced AWS networking scenario.", url: "https://www.notion.so/Network-Challenge-2-1896aa96f90b80c381ddf7d71a88d1ea", icon: Share2 },
    { title: "AWS Technical Notes", description: "A collection of technical notes, code snippets, and cloud engineering insights.", url: "https://www.notion.so/NOTES-18b6aa96f90b803aa907e8b0c900c1cf", icon: NotebookText }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;