import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        // এই console.log টি এখন আর দরকার নেই, চাইলে মুছে ফেলতে পারেন
        // console.log('API থেকে পাওয়া ডেটা:', response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.error('প্রজেক্ট ডেটা আনতে সমস্যা হয়েছে!', error);
      });
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {/* projects অ্যারেতে ডেটা থাকলে তা দেখানো হবে */}
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project._id} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-links">
                {/* যদি liveLink থাকে, তবেই এই বাটনটি দেখানো হবে */}
                {project.liveLink && 
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                }
                {/* যদি githubLink থাকে, তবেই এই বাটনটি দেখানো হবে */}
                {project.githubLink && 
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Code</a>
                }
              </div>
            </div>
          ))
        ) : (
          // projects অ্যারে খালি থাকলে এই বার্তাটি দেখানো হবে
          <p>এখনো কোনো প্রজেক্ট যোগ করা হয়নি।</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;