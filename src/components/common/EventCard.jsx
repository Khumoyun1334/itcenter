import { motion, useReducedMotion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';

const EventCard = ({ event, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 } 
    }
  };

  const isFull = event.registeredCount >= event.maxSeats;
  const availableSeats = event.maxSeats - event.registeredCount;
  const progressPercentage = (event.registeredCount / event.maxSeats) * 100;

  const typeLabels = {
    openLesson: "Ochiq Dars",
    hackathon: "Xakaton",
    masterclass: "Master-klass",
    meetup: "Meetup"
  };

  const typeColors = {
    openLesson: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    hackathon: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    masterclass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    meetup: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-[#071912] rounded-[1.8rem] border border-emerald-100 dark:border-emerald-900/30 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow h-full relative"
    >
      {event.isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Maxsus
        </div>
      )}
      
      <div className="h-48 overflow-hidden relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-md ${typeColors[event.type] || 'bg-gray-100 text-gray-800'}`}>
            {typeLabels[event.type] || event.type}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{event.title}</h3>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-emerald-500 flex-shrink-0" />
            <span>{new Date(event.date).toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-emerald-500 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-emerald-500 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 flex-grow line-clamp-3">
          {event.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <FiUsers />
              <span>{isFull ? 'Joylar qolmadi' : `${availableSeats} ta bo'sh joy`}</span>
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{event.registeredCount} / {event.maxSeats}</span>
          </div>
          
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 mb-5 overflow-hidden">
            <div 
              className={`h-full rounded-full ${isFull ? 'bg-red-500' : 'bg-emerald-500'}`} 
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          
          <a
            href={event.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-2.5 rounded-xl font-medium transition-colors ${
              isFull 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
            }`}
            onClick={e => isFull && e.preventDefault()}
          >
            {isFull ? "Ro'yxatdan o'tish yopilgan" : "Ro'yxatdan o'tish"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
