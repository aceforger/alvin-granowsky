import React, { useState, useEffect } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaComment, 
  FaTag, 
  FaMapMarkerAlt, 
  FaClock,
  FaRainbow,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaHandHoldingHeart,
  FaQuoteLeft,
  FaBookOpen,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaHome,
  FaArrowLeft
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formLoadTime, setFormLoadTime] = useState(null);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (honeypot) {
      newErrors.honeypot = 'Spam detected';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'honeypot') {
      setHoneypot(value);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submitTime = Date.now();
    const formFillTime = submitTime - formLoadTime;
    
    if (formFillTime < 3000) {
      setSubmitStatus('error');
      setErrors({ general: 'Please take more time to fill out the form' });
      return;
    }
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('_honeypot', honeypot);
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/algranowsky@hotmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setHoneypot('');
      } else {
        setSubmitStatus('error');
        setErrors({ general: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ general: 'There was an error sending your message. Please try again.' });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Rainbow Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 via-indigo-600/20 via-blue-600/20 via-green-600/20 via-yellow-600/20 to-red-600/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating Pride Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              background: `hsl(${Math.random() * 360}, 100%, 60%)`,
              boxShadow: `0 0 10px hsl(${Math.random() * 360}, 100%, 60%)`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-pink-400 rounded-full transition-all duration-300 border border-purple-500/30 hover:border-pink-400 backdrop-blur-sm"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
            <FaHome className="text-sm" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRainbow className="text-pink-500 text-4xl animate-pulse" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Get In Touch
            </h1>
            <FaRainbow className="text-purple-500 text-4xl animate-pulse" />
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Have questions about Alvin Granowsky's LGBTQ+ stories or want to connect? 
            Send us a message and we'll respond as soon as possible.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Contact Information with Pride Theme */}
          <div className="lg:w-2/5 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-10 text-white relative overflow-hidden border-r border-purple-500/30">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500 opacity-10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 opacity-5 rounded-full"></div>
            
            {/* Pride flag decorative lines */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 to-yellow-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <FaHandHoldingHeart className="text-pink-300 text-2xl" />
                <h2 className="text-3xl font-bold">Let's Connect</h2>
              </div>
              
              <p className="mb-8 text-purple-100 leading-relaxed">
                Whether you have questions about Alvin's LGBTQ+ books, speaking engagements, 
                or just want to share how his stories touched your heart, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-purple-200">algranowsky@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Response Time</p>
                    <p className="text-purple-200">Usually within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-purple-200">Dallas, Texas</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <p className="text-purple-200 text-sm mb-3 flex items-center gap-2">
                  <FaHeart className="text-pink-400 text-xs" /> Follow the journey
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group">
                    <FaTwitter className="text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group">
                    <FaFacebook className="text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group">
                    <FaInstagram className="text-gray-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group">
                    <FaBookOpen className="text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
              
              {/* Pride Quote */}
              <div className="mt-8 pt-6 border-t border-purple-500/30">
                <FaQuoteLeft className="text-pink-400/30 text-2xl mb-2" />
                <p className="text-purple-200 text-sm italic">
                  "Every love story deserves to be told. Every voice deserves to be heard."
                </p>
                <p className="text-pink-300 text-xs mt-2">— Alvin Granowsky</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form with Dark Theme */}
          <div className="lg:w-3/5 bg-gray-900/80 backdrop-blur-sm p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field */}
              <div className="absolute left-[-5000px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input 
                  type="text" 
                  id="website" 
                  name="honeypot" 
                  tabIndex="-1"
                  value={honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-purple-500/30'} rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-500`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-purple-500/30'} rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-500`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaTag className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-purple-500/30'} rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-500`}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaComment className="h-5 w-5 text-purple-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`block w-full pl-10 pr-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-purple-500/30'} rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-500 resize-none`}
                    placeholder="Your message here..."
                  />
                </div>
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-3" />
                      Send Message
                      <FaHeart className="ml-2 text-pink-300 text-xs" />
                    </>
                  )}
                </button>
              </div>

              {errors.general && (
                <div className="rounded-xl bg-red-900/30 p-4 mt-4 border border-red-500/30 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-300">
                        {errors.general}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="rounded-xl bg-green-900/30 p-4 mt-4 border border-green-500/30 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-300">
                        Message sent successfully! We'll get back to you soon. 🏳️‍🌈
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm border-t border-purple-500/20 pt-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaRainbow className="text-pink-400" />
            <span>Celebrating LGBTQ+ Voices</span>
            <FaHeart className="text-red-400" />
          </div>
          <p>© {new Date().getFullYear()} Alvin Granowsky. All rights reserved.</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          75% { transform: translateY(10px) translateX(-5px); }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
  );
}