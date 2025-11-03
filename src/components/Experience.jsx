import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: "Cloud Engineer",
    company: "eCloudvalley Digital Technologies Philippines",
    period: "October 2024 – Present",
    tasks: [
      "Designed and supported cloud infrastructure deployments on AWS, ensuring scalability and high availability.",
      "Automated deployment and configuration processes to improve speed and consistency.",
      "Assisted in security posture improvement projects for enterprise clients.",
      "Monitored system performance, implementing enhancements for reliability and cost optimization."
    ]
  },
  {
    role: "HR Assistant",
    company: "Anglo Eastern Crew Management Philippines",
    period: "August 2024 – October 2024",
    tasks: [
      "Assisted in the data management project for the organization of HR files and employee records.",
      "Conducted auditing, updating, and digital filing of personnel data to enhance data accuracy and accessibility.",
      "Supported the HR team's administrative tasks to ensure compliance with internal policies and data privacy standards."
    ]
  },
  {
    role: "Cloud Engineer Intern – Security",
    company: "eCloudvalley Digital Technologies Philippines",
    period: "March 2024 - June 2024",
    tasks: [
      "Gained practical knowledge in cloud and security best practices.",
      "Supported security documentation and administrative tasks related to cybersecurity initiatives.",
      "Engaged in real-world projects involving endpoint sensor deployments and cloud security improvements.",
      "Supported cloud infrastructure deployments on AWS, ensuring scalability and high availability."
    ]
  }
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Work Experience</h2>
      <div className="relative max-w-3xl mx-auto pl-12">
        <div className="absolute left-0.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        {experienceData.map((job, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute -left-[4rem] top-1.5 w-10 h-10 bg-secondary/20 text-secondary rounded-full flex items-center justify-center ring-8 ring-background">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="pl-4">
              <p className="text-sm text-text/60 font-medium">{job.period}</p>
              <h3 className="text-xl font-bold text-primary mt-1">{job.role}</h3>
              <p className="text-md font-semibold text-text/80 mb-3">{job.company}</p>
              <ul className="list-disc list-inside space-y-2 text-text/70">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;