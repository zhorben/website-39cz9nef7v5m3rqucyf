import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import { Dumbbell, LineChart, Calendar, Trophy } from 'lucide-react'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Dumbbell, LineChart, Calendar, Trophy } from 'lucide-react';

const Index: React.FC = () => {
  const [email, setEmail] = useState('');

  const features = [
    { icon: <Dumbbell />, title: 'Workout Tracking', description: 'Log your exercises, sets, and reps with ease' },
    { icon: <LineChart />, title: 'Progress Analytics', description: 'Visualize your fitness journey with detailed charts' },
    { icon: <Calendar />, title: 'Personalized Plans', description: 'Get custom workout plans tailored to your goals' },
    { icon: <Trophy />, title: 'Achievement System', description: 'Stay motivated with rewards for hitting milestones' },
  ];

  const testimonials = [
    { name: 'Sarah L.', text: 'FitTrack helped me lose 20 pounds and gain confidence!' },
    { name: 'Mike R.', text: 'The personalized plans are like having a trainer in my pocket.' },
    { name: 'Emma T.', text: 'I love seeing my progress over time. It keeps me motivated!' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      toast.success('Thanks for signing up! Check your email for the download link.');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <FeaturesSection features={features} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection: React.FC<{ email: string; setEmail: (email: string) => void; handleSubmit: (e: React.FormEvent) => void }> = ({ email, setEmail, handleSubmit }) => (
  <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
    <div className="container mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Transform Your Fitness Journey
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Track workouts, set goals, and achieve success with FitTrack
      </motion.p>
      <motion.form 
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-xs"
          required
        />
        <Button type="submit" variant="secondary">
          Get Early Access
        </Button>
      </motion.form>
    </div>
  </section>
);

const FeaturesSection: React.FC<{ features: Array<{ icon: JSX.Element; title: string; description: string }> }> = ({ features }) => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose FitTrack?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC<{ testimonials: Array<{ name: string; text: string }> }> = ({ testimonials }) => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Index;