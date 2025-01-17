'use client';

import { useEffect, useState } from 'react';

interface Event {
  date: string;
  time: string;
  location: string;
  link: string;
  classType: string;
  isFull?: boolean;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const events: Event[] = [
    {
      date: '2024-01-16',
      time: '8:30 PM',
      location: 'BodyRok Polk',
      link: 'https://partiful.com/e/test-past-event',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-20',
      time: '8:30 PM',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/srL2Zbh2WQwHggJSbwO3',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-27',
      time: '8:30 PM',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/aRERbjLAXgD0wEDdWfGs',
      classType: 'Rok Your Body 1',
      isFull: false
    },
    {
      date: '2024-01-30',
      time: '8:30 PM',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/NU2GMs3I8Qfj662YVEgG',
      classType: 'Six Packs & Backs',
      isFull: false
    },
    {
      date: '2024-02-06',
      time: '8:30 PM',
      location: 'Polk BodyRok',
      link: 'https://partiful.com/e/zLNrYEyFkl7PwJb1APbO',
      classType: 'Buns and Guns',
      isFull: false
    },
    {
      date: '2024-02-01',
      time: '2:00 PM',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/DwIN72dwkGnPBcqFDL5J',
      classType: 'Flow',
      isFull: false
    },
    {
      date: '2024-02-02',
      time: '4:00 PM',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/NaSaPXJ0jCOSg7aKfcp6',
      classType: 'Cardio Sculpt',
      isFull: false
    },
    {
      date: '2024-02-08',
      time: '2:00 PM',
      location: 'FiDi BodyRok',
      link: 'https://partiful.com/e/qfPSGPhGwpoAPtcBSsBb',
      classType: 'Rok Your Body 2',
      isFull: false
    },
    {
      date: '2024-02-09',
      time: '4:00 PM',
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
    return null;
  }

  const today = new Date();
  today.setFullYear(2025);
  today.setHours(0, 0, 0, 0);
  console.log('Today (midnight, 2025):', today.toISOString());

  const futureEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setFullYear(2025);
    eventDate.setHours(0, 0, 0, 0);
    console.log(`Comparing - Event: ${event.date}, Event midnight (2025): ${eventDate.toISOString()}`);
    const isFuture = eventDate >= today;
    console.log(`Is future? ${isFuture}`);
    return isFuture;
  });

  console.log('Total future events:', futureEvents.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-violet-100 to-teal-100 px-4 py-8 md:p-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-2 text-center tracking-wide">
          ✨ Free Pilates with AJ
        </h1>
        <p className="text-center text-gray-600 mb-10 font-light tracking-wide">
          Join me for some mindful movement
        </p>
        <div className="space-y-4">
          {futureEvents.length === 0 ? (
            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-sm">
              <p className="text-gray-600 mb-2">Taking a mindful pause.</p>
              <p className="text-gray-500 text-sm">Check back soon for new classes! 🧘‍♀️</p>
            </div>
          ) : (
            futureEvents.map((event, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-gray-800">
                    {event.location}
                  </h3>
                  <p className="text-sm text-violet-600 font-medium tracking-wide mt-0.5">
                    {event.classType}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="text-gray-600 text-sm">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })} 
                    <span className="mx-2">•</span> 
                    {event.time}
                  </div>
                  <a
                    href={event.isFull ? '#' : event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                      event.isFull 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-violet-600 hover:bg-violet-700 active:scale-[0.98] text-white shadow-sm'
                    }`}
                    onClick={e => event.isFull && e.preventDefault()}
                  >
                    {event.isFull ? 'Class Full' : 'Reserve Spot'}
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        <footer className="mt-12 text-center text-sm text-gray-500">
          <a 
            href="https://github.com/andrewjaykeller/pilates-schedule" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-violet-600 transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </footer>
      </div>
    </main>
  );
}
