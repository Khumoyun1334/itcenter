import { motion, useReducedMotion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ testimonial, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 } 
    }
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-[#071912] rounded-[1.8rem] border border-emerald-100 dark:border-emerald-900/30 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative"
    >
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/20"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{testimonial.course}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {testimonial.currentJob} at <span className="font-semibold text-gray-700 dark:text-gray-300">{testimonial.company}</span>
          </p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4 text-emerald-500">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            size={16} 
            fill={i < testimonial.rating ? "currentColor" : "none"} 
            className={i < testimonial.rating ? "text-emerald-500" : "text-gray-300 dark:text-gray-600"}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 dark:text-gray-300 flex-grow text-sm md:text-base italic mb-4">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-emerald-900/30 text-xs text-gray-500 dark:text-gray-400">
        <span>Bitirgan yili: {testimonial.graduationYear}</span>
        <span>Maosh: {testimonial.salary}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
