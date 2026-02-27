import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'SQL' },
        { name: 'C' },
        { name: 'HTML5/CSS3' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Zap,
      skills: [
        { name: 'React' },
        { name: 'Redux' },
        { name: 'Node.js' },
        { name: 'Django / Django REST' },
        { name: 'Spring Boot / Spring Framework' },
        { name: 'Tailwind CSS' },
        { name: 'HTML5 / CSS3' },
        { name: 'XML / JSON / YAML' },
        { name: 'D3.js' },
        { name: 'Maven' },
        { name: 'RESTful APIs' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'DynamoDB' },
        { name: 'Supabase' },
        { name: 'AWS RDS' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Jenkins' },
        { name: 'Postman' },
        { name: 'Vercel' },
        { name: 'Jira' },
        { name: 'Kubernetes' },
        { name: 'Terraform' },
        { name: 'CloudFormation' },
        { name: 'AWS (EC2, S3, ECR, EKS, SNS, RDS, Lambda, CloudWatch, SageMaker, Redshift, Kinesis)' },
        { name: 'Kafka / Kafka Streams' },
        { name: 'OAuth 2.0 / JWT / CORS' },
        { name: 'Jest' },
        { name: 'JUnit / Pytest / Spring Test' },
        { name: 'Cypress' }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
      {name}
    </span>
  );

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
              <Code className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <SkillBadge
                    key={idx}
                    name={skill.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Development</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• RESTful API Design</li>
                  <li>• Microservices Architecture</li>
                  <li>• Test-Driven Development</li>
                  <li>• Agile/Scrum Methodologies</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Data & Analytics</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Data Visualization</li>
                  <li>• Semantic Web Technologies</li>
                  <li>• Machine Learning Basics</li>
                  <li>• Statistical Analysis</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Technical Documentation</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">7</div>
              <div className="text-gray-600 dark:text-gray-300">Languages</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">11</div>
              <div className="text-gray-600 dark:text-gray-300">Frameworks/Libraries</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-300">Databases</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">16</div>
              <div className="text-gray-600 dark:text-gray-300">Tools & Cloud</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 