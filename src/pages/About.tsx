import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kumar Thirukkovalur',
      role: 'Executive Director & CEO',
      image: '',
      bio: '12+ years in Pharma & IT, leading R\&D, marketing, and strategic partnerships, with 2 patents and 20+ publications. Pursuing a DBA in Generative AI with extensive certifications in AI, cloud, and quality systems.'
    },
    {
      name: 'Ananya Parikibandla',
      role: 'Executive Director & CQO',
      image: '/Ananya.png',
      bio: 'Master of Pharmacy with 12+ years in Pharma & IT, specializing in quality, regulatory, and formulation development, with 6+ publications and key certifications. Skilled in strategic leadership and team management.'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Enterprise Clients' },
    { number: '50+', label: 'AI Solutions Deployed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-light mb-6">About Us</h1>
              <p className="text-xl opacity-90">
                Pioneering AI solutions for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <AnimatePresence>
        <section className="container mx-auto px-6 py-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-blue-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Zerokost, we're dedicated to revolutionizing industries through innovative AI solutions. 
              Our mission is to make advanced technology accessible and affordable for businesses of all sizes, 
              helping them achieve their digital transformation goals efficiently and effectively.
            </p>
          </motion.div>
        </section>
      </AnimatePresence>

      {/* Achievements Section */}
      <section className="bg-blue-900 py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center text-white"
              >
                <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
                <p className="text-blue-200">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-blue-900 mb-12 text-center">Our Leadership Team</h2>
        <motion.div 
  className="flex justify-center gap-10 flex-wrap"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-[400px] h-[500px]"
    >
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${member.image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 mb-4">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  ))}
</motion.div>

      </section>

      <Footer />
    </div>
  );
};

export default About;