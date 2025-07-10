import React from 'react';
import bannerImg from '../../../public/banner.png';

const Pages = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 to-blue-100 p-6">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
                <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 p-6">
                    <img src={bannerImg} alt="Project Banner" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-extrabold text-purple-700 mb-3">Welcome to Innovale Business</h2>
                    <p className="text-gray-600 mb-6">
                        We deliver innovative solutions to help your business grow. Explore our key strengths and discover how we can empower your journey to success.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-purple-50 p-4 rounded-lg shadow text-center">
                            <span className="text-3xl">🚀</span>
                            <h3 className="font-semibold mt-2">Fast Delivery</h3>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
                            <span className="text-3xl">💡</span>
                            <h3 className="font-semibold mt-2">Creative Ideas</h3>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg shadow text-center">
                            <span className="text-3xl">🤝</span>
                            <h3 className="font-semibold mt-2">Trusted Partners</h3>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
                            <span className="text-3xl">📈</span>
                            <h3 className="font-semibold mt-2">Business Growth</h3>
                        </div>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 self-start">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pages;
