"use client";

import Link from 'next/link';
import './contact.css'; // Make sure you have this CSS file

// UPDATED: New, cleaner SVG icons
const icons = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  upwork: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.42 8.84c-1.32-1.92-2.3-3.44-3.64-4.87a.5.5 0 0 0-.7-.03l-4.03 3.36c-1.12.93-2 2.1-2.2 3.37-.23 1.39.22 2.83 1.05 4.14 1.15 1.8 2.5 3.55 4.3 4.4.55.26 1.15.26 1.7.02 2.2-1.02 3.52-2.73 4.4-4.43.9-1.74 1.15-3.4.52-4.96zm-.8 5.2c-.63 1.2-1.6 2.3-2.92 3.14-1.1.7-2.3.66-3.36-.1-1.46-1.05-2.5-2.6-3.3-4.1-.53-1-.8-2.03-.6-3.07.18-.9.65-1.74 1.4-2.4l3.1-2.58.1-.05c.53-.4 1.1-.73 1.7-1.03.22-.1.44-.2.66-.3.2.3.4.6.6.9.8 1.1 1.4 2.3 2.1 3.5.6 1.1.9 2.2.32 3.29z"/>
    </svg>
  ),
};

const contactLinks = [
  { name: 'Email', icon: icons.email, href: 'mailto:paudeladrin@gmail.com' },
  { name: 'LinkedIn', icon: icons.linkedin, href: 'https://www.linkedin.com/in/adrinpaudel/' },
  { name: 'GitHub', icon: icons.github, href: 'https://github.com/AdrinPaudel' },
  { name: 'Upwork', icon: icons.upwork, href: 'https://www.upwork.com/freelancers/~0113a4196ce52a04c4' },
];


const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-subtitle">
        I&apos;m open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-links-wrapper">
        {contactLinks.map((link) => (
          <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-card">
            <div className="contact-icon">{link.icon}</div>
            <span className="contact-name">{link.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
