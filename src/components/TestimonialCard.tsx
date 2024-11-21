import React from 'react'
import { motion } from 'framer-motion'

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-600 mb-4">"{text}"</p>
      <p className="font-semibold">{name}</p>
    </motion.div>
  );
};

export default TestimonialCard;