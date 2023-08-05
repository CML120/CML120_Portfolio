import React, { useEffect, useRef, useState } from 'react';
import './Resume.css';

const Resume = () => {
  const developerProficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    // Add more skills as needed
  ];
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJobExpansion = (index) => {
    setExpandedJobs((prevExpandedJobs) => ({
      ...prevExpandedJobs,
      [index]: !prevExpandedJobs[index],
    }));
  };
  
  const [currentProficiencyIndex, setCurrentProficiencyIndex] = useState(0);
  const proficiencyRef = useRef(null);

  useEffect(() => {
    // Update the scrolling text continuously every 1 second
    const interval = setInterval(() => {
      setCurrentProficiencyIndex(
        (prevIndex) => (prevIndex + 1) % developerProficiencies.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [developerProficiencies.length]);

  const education = [
    {
      degree: 'Bachelor of Science',
      major: 'IT Systems and Communications',
      university: 'University of Wisconsin – Stout',
      location: 'Menomonie, WI',
    },
    {
      degree: 'Associate of Applied Science',
      major: 'Software Development',
      university: 'Fox Valley Technical College',
      location: 'Appleton, WI',
    },
    {
      degree: 'Associate of Applied Science',
      major: 'Electro-Mechanical Systems',
      university: 'Fox Valley Technical College',
      location: 'Appleton, WI',
    },
  ];

  const workHistory = [
    {
      title: '👉Inventory Control',
      company: 'Boston Scientific',
      locations: ['Arden Hills, MN'],
      startDate: 'January 2023',
      endDate: 'Present',
      duties: [
        'Investigate and resolve discrepancies in patient registration data with a keen attention to detail and accuracy.',
        'Analyze and process patient data from Body Guardian heart monitors, ensuring timely and error-free data entry.',
      ],
    },
    {
      title: '👉Technical Support and Consultant',
      companies: ['Yang Sister’s Kitchen', 'Trident Productions'],
      locations: ['St. Paul, MN', 'Oshkosh, WI'],
      startDate: 'July 2020',
      endDate: 'December 2022',
      duties: [
        'Provide expert assistance to home-based businesses in managing social media platforms, curating engaging content for YouTube and Facebook.',
        'Research, acquire, and implement effective and user friendly video editing software to enhance content quality and viewership.',
        'Collaborate on the development of a digital recipe book, ensuring seamless integration of technology and culinary expertise.',
      ],
    },
    {
      title: '👉IT Intern/ Junior Analyst',
      company: 'Oshkosh Corporation',
      locations: ['Oshkosh, WI'],
      startDate: 'December 2014',
      endDate: 'April 2020',
      duties: [
        'Administered and maintained an email environment supporting 10,000 users, ensuring optimal performance and uptime.',
        'Resolved an average of 40-50 weekly technical support tickets using Remedy/Service Now, proactively addressing end-user concerns and inquiries.',
        'Conducted comprehensive analysis of 500-700 monthly tickets, identifying patterns and trends to implement long-term solutions for recurring issues.',
        'Provided expert support for WebEx, Sametime, Skype, and mobile devices, assisting employees in maximizing productivity and connectivity.',
      ],
    },
    {
      title: '👉Maintenance Mechanic',
      company: 'Nestle Pizza',
      locations: ['Little Chute, WI'],
      startDate: 'April 2010',
      endDate: 'September 2014',
      duties: [
        'Executed routine preventive maintenance and repairs on factory machinery, optimizing operational efficiency and minimizing downtime.',
        'Documented all repairs, issues, and parts accurately and promptly in the SAP system for efficient tracking and reporting.',
        'Actively contributed to production line activities, collaborating with team members to ensure smooth operations and timely delivery.',
      ],
    },
  ];


  
  return (
    <section>
      <h2>Resume</h2>

      <h3>---Education---</h3>
      <p>
  {' '}

  
</p>
      {education.map((edu, index) => (
        <div key={index}>
          <p>
            {edu.degree} ({edu.major})
            <br />
            {edu.university}
            <br />
            {edu.location}
          </p>
        </div>
      ))}

<h3>---Work History--- </h3>
<a href="/CML120_Portfolio/cheeResume.pdf" download target="_blank" rel="noopener noreferrer">
  -----👉👉👉 You can download my resume here 👈👈👈-----
</a>

<h5>(click each job title to view job details)</h5>

{workHistory.map((job, index) => (
  <div key={index}>
    <h4 onClick={() => toggleJobExpansion(index)}>
      {job.title}
      {job.companies && job.companies.length > 0 ? ` (${job.companies.join(' / ')})` : ''}
      {job.locations && job.locations.length > 0 ? ` (${job.locations.join(' / ')})` : ''}
    </h4>
    <p>
      {job.startDate} – {job.endDate}
    </p>
    {expandedJobs[index] ? (
      <ul>
        {job.duties.map((duty, idx) => (
          <li key={idx} className="job-duties">{duty}</li>
        ))}
      </ul>
    ) : null}
    
  </div>
))}

    
      <div className="skills">
        <h3>Developer Proficiencies</h3>
        
        <div className="scrolling-text">
          <span ref={proficiencyRef} className="proficiency-text">
            {developerProficiencies[currentProficiencyIndex]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
