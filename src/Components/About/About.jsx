import React from 'react';

const funFacts = [
  {
    front: '24 Years Experience',
    back: 'We have been delivering quality solutions since 2000.',
    icon: '🎉',
  },
  {
    front: '100+ Projects',
    back: 'Successfully completed over 100 diverse projects.',
    icon: '📈',
  },
  {
    front: 'Global Clients',
    back: 'Served clients in more than 15 countries.',
    icon: '🌍',
  },
  {
    front: 'Award Winning',
    back: 'Recognized for innovation and excellence.',
    icon: '🏆',
  },
];

const team = [
  { name: 'Jane Doe', role: 'Founder & CEO' },
  { name: 'John Smith', role: 'Lead Developer' },
  { name: 'Emily Lee', role: 'Project Manager' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are passionate about delivering innovative solutions and making a positive impact for our clients worldwide.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {funFacts.map((fact, idx) => (
          <div
            key={idx}
            className="[perspective:1000px]"
          >
            <div className="relative h-40 w-full transition-transform duration-500 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] cursor-pointer">
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 text-center [backface-visibility:hidden]">
                <span className="text-4xl mb-2">{fact.icon}</span>
                <span className="font-semibold text-lg text-gray-800">{fact.front}</span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <span className="font-medium">{fact.back}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 w-48">
              <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mb-2">
                {member.name.charAt(0)}
              </div>
              <div className="font-semibold text-gray-800">{member.name}</div>
              <div className="text-gray-500 text-sm">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;