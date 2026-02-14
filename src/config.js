// ============================================
// 🔧 CONFIGURATION FILE
// ============================================
// This file contains all customizable settings for your website
// Update values here instead of editing multiple component files

export const config = {
  // COMPANY INFORMATION
  company: {
    name: "JRK Engineering",
    tagline: "Engineering Reliability. Delivered with Precision.",
    logo: "JRK", // You can replace this with an image path
    description: "Leading construction and engineering company delivering excellence in every project.",
    email: "info@jrkengineering.com",
    phone: "+1 (555) 123-4567",
    address: "123 Engineering Blvd, Tech City, TC 12345",
    businessHours: "Mon - Fri: 8:00 AM - 6:00 PM"
  },

  // EMAIL SERVICE CONFIGURATION (EmailJS)
  // Sign up at https://www.emailjs.com/ to get your keys
  email: {
    serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
    templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
    publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS Public Key
    recipientEmail: "your-email@example.com" // Email where form submissions will be sent
  },

  // SOCIAL MEDIA LINKS
  social: {
    linkedin: "https://linkedin.com/company/jrk-engineering",
    facebook: "https://facebook.com/jrkengineering",
    twitter: "https://twitter.com/jrkengineering",
    instagram: "https://instagram.com/jrkengineering",
    youtube: "https://youtube.com/@jrkengineering"
  },

  // COLORS (CSS Variables)
  colors: {
    primary: "#00d9a3",
    secondary: "#1a1a2e",
    accent: "#ff6b35",
    white: "#ffffff",
    lightGray: "#f5f5f5",
    mediumGray: "#6c757d",
    darkGray: "#2c3e50",
    text: "#1a1a1a"
  },

  // HERO SECTION
  hero: {
    title: "Building Tomorrow,",
    subtitle: "Engineering Today",
    tagline: "Engineering Reliability. Delivered with Precision.",
    description: "With over 15 years of excellence in construction and engineering, we transform visions into reality through innovative design, superior craftsmanship, and unwavering commitment to quality.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
  },

  // SERVICES
  services: [
    {
      id: 1,
      title: "Commercial Construction",
      description: "End-to-end construction solutions for commercial buildings, offices, and retail spaces with focus on quality and timely delivery.",
      icon: "🏢"
    },
    {
      id: 2,
      title: "Industrial Projects",
      description: "Specialized industrial construction including factories, warehouses, and manufacturing facilities built to exact specifications.",
      icon: "🏭"
    },
    {
      id: 3,
      title: "Structural Engineering",
      description: "Expert structural analysis, design, and consulting services ensuring safety and compliance with all building codes.",
      icon: "🏗️"
    },
    {
      id: 4,
      title: "Project Management",
      description: "Comprehensive project management from planning to execution, ensuring projects stay on schedule and within budget.",
      icon: "📋"
    },
    {
      id: 5,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our renovation expertise, breathing new life into commercial and industrial properties.",
      icon: "🔨"
    },
    {
      id: 6,
      title: "MEP Services",
      description: "Complete mechanical, electrical, and plumbing design and installation for all types of construction projects.",
      icon: "⚡"
    }
  ],

  // WHY CHOOSE US
  whyChooseUs: [
    {
      id: 1,
      title: "15+ Years Experience",
      description: "Over a decade of proven excellence in delivering complex engineering projects.",
      icon: "⏱️"
    },
    {
      id: 2,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your complete peace of mind.",
      icon: "✅"
    },
    {
      id: 3,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties and quality assurance.",
      icon: "🏆"
    },
    {
      id: 4,
      title: "On-Time Delivery",
      description: "95% of our projects are completed on or ahead of schedule.",
      icon: "📅"
    }
  ],

  // COMPANY VALUES
  values: [
    {
      id: 1,
      title: "Excellence",
      description: "We pursue excellence in every aspect of our work, from initial design to final delivery."
    },
    {
      id: 2,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and innovative methods to deliver superior results."
    },
    {
      id: 3,
      title: "Integrity",
      description: "Building lasting relationships through honest communication and ethical business practices."
    },
    {
      id: 4,
      title: "Safety",
      description: "Prioritizing the safety of our team, clients, and the public in everything we do."
    }
  ],

  // TESTIMONIALS
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      position: "CEO, Tech Solutions Inc.",
      content: "JRK Engineering exceeded our expectations. Their professionalism and attention to detail transformed our office space into a modern, efficient workplace.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Facilities Manager, Global Manufacturing",
      content: "Outstanding work on our warehouse expansion. The project was completed on time and within budget. Highly recommend their services!",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Owner, Urban Retail Group",
      content: "Their expertise in commercial construction is unmatched. The team was responsive, professional, and delivered exceptional quality.",
      rating: 5
    }
  ],

  // ABOUT SECTION
  about: {
    title: "About JRK Engineering",
    description: "Founded in 2008, JRK Engineering has grown from a small construction firm to a leading name in commercial and industrial construction. Our commitment to quality, innovation, and client satisfaction has earned us numerous industry awards and a reputation for excellence.",
    mission: "Our mission is to deliver engineering and construction solutions that exceed expectations while maintaining the highest standards of safety, quality, and environmental responsibility.",
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Years Experience", value: "15+" },
      { label: "Team Members", value: "150+" },
      { label: "Client Satisfaction", value: "98%" }
    ]
  }
};
