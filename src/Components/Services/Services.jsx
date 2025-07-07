import React from 'react';

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: "💻",
    features: ["React & Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning"],
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50"
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing"],
    gradient: "from-green-500 to-teal-600",
    bgGradient: "from-green-50 to-teal-50"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces with exceptional user experience.",
    icon: "🎨",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    gradient: "from-pink-500 to-red-600",
    bgGradient: "from-pink-50 to-red-50"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions.",
    icon: "☁️",
    features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
    gradient: "from-orange-500 to-yellow-600",
    bgGradient: "from-orange-50 to-yellow-50"
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business.",
    icon: "📢",
    features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50"
  },
  {
    id: 6,
    title: "Consulting",
    description: "Expert technology consulting to optimize your digital strategy.",
    icon: "🧠",
    features: ["Technology Audit", "Strategy Planning", "Team Training", "Project Management"],
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We provide comprehensive digital solutions to help your business thrive in the modern world.
          From concept to deployment, we're with you every step of the way.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto text-center mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
