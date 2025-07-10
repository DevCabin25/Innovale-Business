import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaBookmark, FaShare } from 'react-icons/fa';

const News = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

  
    const featuredNews = [
        {
            id: 1,
            title: "Innovale Business Announces Revolutionary AI-Powered Solutions",
            excerpt: "Leading the digital transformation with cutting-edge artificial intelligence solutions that redefine business efficiency and productivity.",
            image: "/public/update_and_news_1.jpg",
            category: "Technology",
            author: "Sarah Johnson",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            featured: true
        },
        {
            id: 2,
            title: "Global Expansion: Innovale Opens New Offices in Asia-Pacific",
            excerpt: "Strategic expansion into emerging markets demonstrates our commitment to serving clients worldwide with innovative business solutions.",
            image: "/public/update_and_news_2 (1).jpg",
            category: "Business",
            author: "Michael Chen",
            date: "Dec 12, 2024",
            readTime: "4 min read",
            featured: true
        }
    ];

    const newsArticles = [
        {
            id: 3,
            title: "The Future of Digital Marketing: Trends to Watch in 2025",
            excerpt: "Discover the latest trends that will shape digital marketing strategies and consumer engagement in the coming year.",
            image: "/public/experts_1.jpg",
            category: "Marketing",
            author: "Emily Rodriguez",
            date: "Dec 10, 2024",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Sustainable Business Practices: A Guide for Modern Companies",
            excerpt: "How businesses can implement eco-friendly practices while maintaining profitability and competitive advantage.",
            image: "/public/experts_2.jpg",
            category: "Sustainability",
            author: "David Thompson",
            date: "Dec 8, 2024",
            readTime: "7 min read"
        },
        {
            id: 5,
            title: "Cybersecurity in 2025: Protecting Your Digital Assets",
            excerpt: "Essential cybersecurity strategies and best practices to safeguard your business in an increasingly digital world.",
            image: "/public/experts_3.jpg",
            category: "Security",
            author: "Lisa Wang",
            date: "Dec 5, 2024",
            readTime: "8 min read"
        },
        {
            id: 6,
            title: "Remote Work Revolution: Building Effective Virtual Teams",
            excerpt: "Strategies for managing remote teams, maintaining productivity, and fostering collaboration in a virtual environment.",
            image: "/public/experts_4.jpg",
            category: "Workplace",
            author: "James Wilson",
            date: "Dec 3, 2024",
            readTime: "5 min read"
        }
    ];

    const categories = ['All', 'Technology', 'Business', 'Marketing', 'Sustainability', 'Security', 'Workplace'];

    const filteredNews = selectedCategory === 'All' 
        ? newsArticles 
        : newsArticles.filter(article => article.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
  
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Latest News & Insights
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-purple-100">
                            Stay updated with the latest trends, innovations, and insights from Innovale Business
                        </p>
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, or keywords..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-4 pl-14 pr-20 text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300"
                                />
                                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {featuredNews.map((article) => (
                        <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200">
                                        <FaBookmark className="text-lg" />
                                    </button>
                                    <button className="bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200">
                                        <FaShare className="text-lg" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <FaUser className="text-purple-600" />
                                        {article.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-purple-600" />
                                        {article.date}
                                    </div>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
                                    Read More <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((article) => (
                            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                        <div className="flex items-center gap-1">
                                            <FaUser className="text-purple-600" />
                                            {article.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-purple-600" />
                                            {article.date}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{article.readTime}</span>
                                        <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-200">
                                            Read More <FaArrowRight className="text-xs" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get the latest insights, trends, and updates delivered directly to your inbox.
                    </p>
                    <div className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;