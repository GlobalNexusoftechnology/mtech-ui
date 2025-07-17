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
      Company: ["Home", "About Us", "Distributor Enquiry Form", "Testimonial", "Contact Us"],
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
