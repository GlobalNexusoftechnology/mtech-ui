import { Cpu, MonitorCheck, Power, Server, Settings, Wrench, Zap } from 'lucide-react';

const pageData = {
  hero: [
    {
    title: "Power Solutions That Never Fail",
    description:
      "Leading manufacturer of voltage stabilizers, servo stabilizers, and UPS systems for industrial and commercial applications",
    buttons: [
      { label: "Explore Products", link: "#products" },
      { label: "Get Quote", link: "#get-quote" },
    ],
  },
  {
    title: "Leading manufacturer of voltage ",
    description:
      "Leading manufacturer of voltage stabilizers, servo stabilizers, and UPS systems for industrial and commercial applications",
    buttons: [
      { label: "Explore Products", link: "#products" },
      { label: "Get Quote", link: "#get-quote" },
    ],
  },
],

  productRange: [
    {
      icon: Power,
      label: "Servo & Voltage Stabilizer",
    },
    {
      icon: Server ,
      label: "Online & Offline UPS",
    },
    {
      icon: Zap,
      label: "Constant Voltage Stabilizer",
    },
    {
      icon: Settings,
      label: "Servo Voltage Stabilizer",
    },
    {
      icon: MonitorCheck,
      label: "Electric Online UPS",
    },
    {
      icon: Cpu,
      label: "Online UPS",
    },
    {
      icon: Wrench,
      label: "Stabilizer Repairing",
    },
  ],
  team: 
    [
  {
    name: "Sameer Gulam Shaikh",
    position: "CEO & Founder",
    experience: "15+ Years",
    description: "Visionary leader with extensive experience in power solutions and electrical engineering",
    expertise: "Power Systems"
  },
  {
    name: "Neha Kulkarni",
    position: "CTO",
    experience: "12+ Years",
    description: "Tech strategist with a deep focus on electrical system architecture and automation",
    expertise: "System Design"
  },
  {
    name: "Ravi Deshmukh",
    position: "Senior Engineer",
    experience: "10+ Years",
    description: "Hands-on expert in voltage stabilizer production and UPS installation services",
    expertise: "Installation & Maintenance"
  },
  {
    name: "Priya Iyer",
    position: "Head of Operations",
    experience: "9+ Years",
    description: "Efficient operations head ensuring timely delivery and streamlined customer support",
    expertise: "Project Coordination"
  },
],
reviews: [
  {
    name: 'Rajesh Kumar',
    position: 'Plant Manager',
    company: 'ABC Manufacturing Ltd',
    rating: 5,
    product: '60KVA Servo Voltage Stabilizer',
    title: 'Outstanding Performance and Reliability',
    feedback:
      'We installed this voltage stabilizer 8 months ago, and it has been absolutely flawless. Our production line runs 24/7, and we haven’t experienced a single voltage-related shutdown since installation. The oil cooling system works exceptionally well even in our hot factory environment (45°C+).',
    images: ['/review1.png', '/review2.png', '/review3.png'],
  },
  {
    name: 'Neha Sharma',
    position: 'IT Manager',
    company: 'Delta Tech Pvt Ltd',
    rating: 5,
    product: 'Online UPS – 10 KVA',
    title: 'Reliable Power Backup',
    feedback:
      'We’ve been using this UPS for over a year. It has consistently protected our servers and networking equipment without any downtime. Highly recommend for mission-critical setups.',
    images: ['/review1.png', '/review2.png', '/review3.png'],
  },
  {
    name: 'Vikram Joshi',
    position: 'Operations Head',
    company: 'Sunrise Industries',
    rating: 4,
    product: 'Three Phase Servo Stabilizer',
    title: 'Great Investment',
    feedback:
      'The stabilizer helped maintain steady power in our production unit. Build quality is excellent, and customer support was responsive.',
    images: ['/review1.png', '/review2.png', '/review3.png'],
  },
  {
    name: 'Anita Desai',
    position: 'Facility Manager',
    company: 'Greenwave Solutions',
    rating: 5,
    product: 'Air Cooled Voltage Stabilizer',
    title: 'Perfect for Office Use',
    feedback:
      'Compact design and reliable performance. Our entire office runs smoothly even with frequent voltage fluctuations.',
    images: ['/review1.png', '/review2.png', '/review3.png'],
  },
  {
    name: 'Anita Desai',
    position: 'Facility Manager',
    company: 'Greenwave Solutions',
    rating: 3,
    product: 'Air Cooled Voltage Stabilizer',
    title: 'Perfect for Office Use',
    feedback:
      'Compact design and reliable performance. Our entire office runs smoothly even with frequent voltage fluctuations.',
    images: ['/review1.png', '/review2.png', '/review3.png'],
  },
],
  testimonials: [
    {
      stars: 5,
      text:
        '"MTECH\'s voltage stabilizers have significantly improved our production efficiency. Zero downtime in the last 2 years!"',
      author: "Rajesh Kumar",
      role: "Plant Manager",
      company: "ABC Manufacturing Ltd",
    },
    {
      stars: 5,
      text:
        '"MTECH\'s voltage stabilizers have significantly improved our production efficiency. Zero downtime in the last 2 years!"',
      author: "Rajesh Kumar",
      role: "Plant Manager",
      company: "ABC Manufacturing Ltd",
    },
    {
      stars: 5,
      text:
        '"MTECH\'s voltage stabilizers have significantly improved our production efficiency. Zero downtime in the last 2 years!"',
      author: "Rajesh Kumar",
      role: "Plant Manager",
      company: "ABC Manufacturing Ltd",
    },
    {
      stars: 5,
      text:
        '"MTECH\'s voltage stabilizers have significantly improved our production efficiency. Zero downtime in the last 2 years!"',
      author: "Rajesh Kumar",
      role: "Plant Manager",
      company: "ABC Manufacturing Ltd",
    },
  ],

  trustedCompanies: ["/logo/logo-mtech.png", "/logo/logo-mtech.png", "/logo/logo-mtech.png", "/logo/logo-mtech.png"],

  footer: {
    companyName: "MTECH Power Solutions",
    copyright: "Copyright © 2025 MTech Power Solutions",
    sections: {
      "Products & Services": [
        "Servo & Voltage Stabilizer",
        "Online & Offline UPS",
        "Voltage Transformer",
        "Servo Stabilizer",
        "Electric Online UPS",
      ],
      Company: [
      {
        name:'Home',
        link: '/'
      },
      {
        name:'About Us',
        link: '/about-us'
      },
      {
        name:'Products',
        link: '/products'
      },
      {
        name:'Contact Us',
        link: '/contact-us'
      }
      ],
      Contacts: {
        email: "mtechindia@yahoo.co.in",
        phone: "+91 9372435979",
        address:
          "12, Jambhulkar Mala, Wanowrie, Pune, Maharashtra 411040, India",
      },
    },
    links: ["Terms and Conditions", "Privacy Policy"],
  },
};

export default pageData;
