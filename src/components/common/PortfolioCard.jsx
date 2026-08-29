import { motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const PortfolioCard = ({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1 } 
    }
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white dark:bg-[#071912] rounded-[1.8rem] border border-emerald-100 dark:border-emerald-900/30 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              aria-label="View live site"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
              aria-label="View GitHub repo"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Muallif: <span className="font-semibold text-gray-800 dark:text-gray-200">{project.studentName}</span> ({project.course})</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-gray-100 dark:bg-[#092017] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
