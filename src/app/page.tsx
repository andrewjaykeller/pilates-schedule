'use client';

import { useEffect, useState } from 'react';

interface Event {
  date: string;
  time: string;
  time24h: string;
  location: string;
  link: string;
  classType: string;
  isFull?: boolean;
}

const SkeletonLoader = () => (
  <div className="space-y-4 animate-pulse">
    {[...Array(3)].map((_, i) => (
      <div 
        key={i}
        className="bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <div className="h-7 bg-violet-100 rounded-lg w-48 mb-2" />
            <div className="h-6 bg-gray-100 rounded-lg w-36 mb-2" />
            <div className="h-5 bg-gray-100 rounded-lg w-64" />
          </div>
          <div className="w-full md:w-auto">
            <div className="h-12 bg-violet-100 rounded-2xl w-full md:w-36" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const events: Event[] = [
    {
      date: '2024-01-16',
      time: '8:30 PM',
      time24h: '20:30',
      location: 'BodyRok Polk',
      link: 'https://partiful.com/e/test-past-event',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-20',
      time: '8:30 PM',
      time24h: '20:30',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/srL2Zbh2WQwHggJSbwO3',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-27',
      time: '8:30 PM',
      time24h: '20:30',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/aRERbjLAXgD0wEDdWfGs',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-30',
      time: '8:30 PM',
      time24h: '20:30',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/NU2GMs3I8Qfj662YVEgG',
      classType: 'Six Packs & Backs',
      isFull: false
    },
    {
      date: '2024-02-06',
      time: '8:30 PM',
      time24h: '20:30',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/zLNrYEyFkl7PwJb1APbO',
      classType: 'Buns and Guns',
      isFull: false
    },
    {
      date: '2024-02-01',
      time: '2:00 PM',
      time24h: '14:00',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/DwIN72dwkGnPBcqFDL5J',
      classType: 'Flow',
      isFull: false
    },
    {
      date: '2024-02-02',
      time: '4:00 PM',
      time24h: '16:00',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/NaSaPXJ0jCOSg7aKfcp6',
      classType: 'Cardio Sculpt',
      isFull: false
    },
    {
      date: '2024-02-08',
      time: '2:00 PM',
      time24h: '14:00',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/qfPSGPhGwpoAPtcBSsBb',
      classType: 'Rok Your Body 2',
      isFull: false
    },
    {
      date: '2024-02-09',
      time: '4:00 PM',
      time24h: '16:00',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/bMKd74sHqShIiUSfPJM0',
      classType: 'Core & Cardio',
      isFull: false
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-teal-50 px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extralight text-gray-800 mb-3 text-center tracking-tight">
            ✨ free pilates w/ aj
          </h1>
          <p className="text-center text-gray-500 mb-8 md:mb-12 font-light tracking-wide text-lg">
            join me for some mindful movement ✌️
          </p>
          <SkeletonLoader />
          <footer className="mt-12 md:mt-16 text-center opacity-50">
            <div className="inline-flex items-center text-gray-400 text-base font-light">
              <div className="w-5 h-5 mr-2 bg-gray-200 rounded-full" />
              view on github
            </div>
          </footer>
        </div>
      </main>
    );
  }

  const today = new Date();

  const futureEvents = events.filter(event => {
    // Parse the 24h time
    const [hours, minutes] = event.time24h.split(':');
    
    // Create event date with correct time
    const eventDate = new Date(event.date);
    eventDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    return eventDate >= today;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-teal-50 px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-extralight text-gray-800 mb-3 text-center tracking-tight">
          ✨ free pilates w/ aj
        </h1>
        <p className="text-center text-gray-500 mb-8 md:mb-12 font-light tracking-wide text-lg">
          join me for some mindful movement ✌️
        </p>
        <div className="space-y-4">
          {futureEvents.length === 0 ? (
            <div className="text-center p-8 bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-sm border border-white/50">
              <p className="text-gray-600 mb-3 text-lg font-light">taking a mindful pause ~</p>
              <p className="text-gray-500">check back soon for new classes! 🧘‍♀️</p>
            </div>
          ) : (
            futureEvents.map((event, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 hover:bg-white/90"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-violet-600 font-medium tracking-tight text-xl mb-2">
                      {event.classType.toLowerCase()}
                    </p>
                    <h3 className="text-lg font-light text-gray-800">
                      {event.location}
                    </h3>
                    <div className="text-gray-500 mt-2 font-light tracking-wide">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      }).toLowerCase()} 
                      <span className="mx-2 opacity-50">~</span> 
                      {event.time.toLowerCase()}
                    </div>
                  </div>
                  <div>
                    <a
                      href={event.isFull ? '#' : event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Reserve spot for ${event.classType} at ${event.location} on ${event.date}`}
                      className={`group/button w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-base font-light transition-all duration-200 whitespace-nowrap ${
                        event.isFull 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-violet-500 hover:bg-violet-600 active:scale-[0.98] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5'
                      }`}
                      onClick={e => event.isFull && e.preventDefault()}
                    >
                      {event.isFull ? 'class full' : 'reserve spot →'}
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <footer className="mt-12 md:mt-16 text-center">
          <a 
            href="https://github.com/andrewjaykeller/pilates-schedule" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="inline-flex items-center text-gray-400 hover:text-violet-500 transition-all duration-200 text-base font-light hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 opacity-75" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            view on github
          </a>
        </footer>
      </div>
    </main>
  );
}
