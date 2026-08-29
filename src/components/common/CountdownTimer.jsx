import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);
      
      if (Object.keys(remainingTime).length === 0) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          Guruh boshlandi!
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Keyingi qabul haqida tez orada ma'lumot beramiz.
        </p>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Kun', value: timeLeft.days || 0 },
    { label: 'Soat', value: timeLeft.hours || 0 },
    { label: 'Daqiqa', value: timeLeft.minutes || 0 },
    { label: 'Soniya', value: timeLeft.seconds || 0 }
  ];

  return (
    <div className="flex gap-2 sm:gap-4 justify-center items-center">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl sm:rounded-2xl w-14 h-16 sm:w-20 sm:h-24 flex items-center justify-center shadow-lg border border-emerald-400/30 overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 top-1/2 border-t border-black/20"></div>
            <motion.span 
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl sm:text-4xl font-bold text-white z-10 font-mono tracking-tighter"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
