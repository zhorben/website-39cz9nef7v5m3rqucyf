import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">FitTrack</div>
        <nav>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Testimonials</Button>
          <Button variant="outline">Download App</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;