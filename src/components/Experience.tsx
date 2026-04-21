import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Database, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      company: 'Libert Mutual.',
      companyUrl: 'https://www.libertymutual.com/',
      position: 'Software Developer',
      period: 'Jun 2025 – Current',
      location: 'Remote',
      description: 'Full-stack development role focusing on building scalable web applications and student opportunity portals.',
      technologies: ['Next.js', 'Tailwind CSS', 'Django', 'Vercel','PostgreSQL', 'CI/CD', 'REST APIs', 'Postman'],
      achievements: [
        'Delivered portal features using React, TypeScript, and Java Spring Boot, improved internal workflows by 30%.',
        'Built Spring Boot REST APIs backed by DynamoDB to support portal workflows and reduce manual handoffs.',
        'Developed reusable React UI components for data-heavy workflows, improving consistency and maintainability across pages',
        'Automated build, deployment, and rollback pipelines using GitHub Actions and Jenkins, increasing release stability and lowering deployment risk.',
        'Implemented authentication and role-based authorization using JWT, strengthening access control across protected routes.',
        'Strengthened API security and reliability with CORS hardening, input validation, and defensive error handling.',
        'Optimized API efficiency through payload shaping, sane timeouts, and standardized error responses.',
        'Deployed and orchestrated containerized services on AWS EKS, achieving 99.5% production uptime.',
        'Increased release confidence by adding unit and integration tests and participating in Agile/Scrum ceremonies.'
      ],
      icon: Code
    },
    {
      company: 'TCS',
      companyUrl: 'https://www.tcs.com/',
      position: 'Software Engineer',
      period: 'Nov 2021 – Jun 2023',
      location: 'Hyderabad, Telangana',
      description: 'Built Spring Boot microservices and Kafka pipelines for automotive safety systems in an Agile environment.',
      technologies: [
'Spring Boot', 'Kafka', 'Kafka Streams', 'Postman', 'OAuth 2.0 / OIDC / JWT', 'Jenkins', 'Docker', 'Git'],
      achievements: [
        'Built and maintained Java Spring Boot microservices with 45+ REST endpoints for an automotive platform; validated API behavior with Postman test suites.',
        'Increased Kafka processing throughput by 30% and reducing latency from 3.5s to 0.7s per message by implementing distributed consumers',
        'Reduced PostgreSQL query latency by 40% through query tuning and indexing improvements.',
        'Developed a diagnostics microservice using Kafka Streams to support scalable, fault-tolerant processing of vehicle events.',
        'Strengthened cross-service security by implementing OAuth 2.0, OpenID Connect, and JWT-based authentication.',
        'Built and deployment workflows using Jenkins, Docker, and Git improving delivery speed and release consistency.',
        'Supported AWS-hosted deployments across EC2, Lambda, and RDS environments during release cycles and updates.',
        'Improved resilience in event-driven services by adding retries, backoff handling, and safer edge-case processing.',
        'Partnered with cross-functional teams in Agile sprints to plan releases, troubleshoot blockers, and ensure seamless production deployments in an Agile environment.'
      ],
      icon: Cpu
    },
    {
      company: 'CueMath',
      companyUrl: 'https://www.cuemath.com/',
      position: 'Software Developer',
      period: 'Jan 2021 – Jun 2021',
      location: 'Bengaluru, Karnataka',
      description: 'Worked on JavaScript-based learning platforms with a focus on performance, analytics, and content integration.',
      technologies: ['JavaScript', 'GeoGebra', 'Web Development', 'Educational Tech', 'Performance', 'User Analytics',],
      achievements: [
        'Improved reliability of JavaScript-based learning applications by resolving UI defects and optimizing flows.',
        'Integrated REST-based content modules to improve client-server data consistency and support dependable content updates.',
        'Fixed rendering and state-management issues to improve responsiveness and user experience across common usage paths.',
        'Analyzed user interaction patterns to guide content updates and prioritize improvements based on actual learner behavior.',
        'Collaborated with product teams to translate requirements into incremental releases and validate outcomes.'
      ],
      icon: Database
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="section-padding pt-20">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <Briefcase className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through various roles and the impact I've made
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experienceData.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary-400 to-primary-600"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <experience.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-lg text-primary-600 font-medium mb-2">
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          <span>{experience.company}</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      ) : (
                        <>
                          <span>{experience.company}</span>
                          <ExternalLink size={16} className="ml-2" />
                        </>
                      )}
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{experience.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Professional Growth
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Major Projects Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 