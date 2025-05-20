// Handle skills category toggles
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
        const category = header.parentElement;
        const skillsList = category.querySelector('.skills-list');
        const toggleIcon = header.querySelector('.toggle-icon');
        
        // If skills list doesn't exist yet for Frameworks and Skills, create it
        if (!skillsList) {
            const newList = document.createElement('ul');
            newList.className = 'skills-list';
            
            // Add appropriate skills based on category
            if (header.textContent.includes('Languages')) {
                newList.innerHTML = `
                    <li class="skill-item">
                        <div class="skill-icon js-icon">
                            <img src="/icons/javascript.svg" alt="JavaScript">
                        </div>
                        <span>JavaScript</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon html-icon">
                            <img src="/icons/html5.svg" alt="HTML">
                        </div>
                        <span>HTML</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon css-icon">
                            <img src="/icons/css3.svg" alt="CSS">
                        </div>
                        <span>CSS</span>
                    </li>
                `;
            } else if (header.textContent.includes('Frameworks')) {
                newList.innerHTML = `
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/react.svg" alt="React">
                        </div>
                        <span>React.js</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/ruby.svg" alt="Ruby">
                        </div>
                        <span>Ruby on Rails</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/bootstrap.svg" alt="Bootstrap">
                        </div>
                        <span>Bootstrap</span>
                    </li>
                `;
            } else if (header.textContent.includes('Skills')) {
                newList.innerHTML = `
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/git.svg" alt="Git">
                        </div>
                        <span>Git</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/github-skill.svg" alt="GitHub">
                        </div>
                        <span>GitHub</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="/icons/terminal.svg" alt="Terminal">
                        </div>
                        <span>Terminal</span>
                    </li>
                `;
            }
            
            category.appendChild(newList);
            toggleIcon.textContent = '▼';
        } else {
            // Toggle existing skills list
            const isExpanded = skillsList.style.display !== 'none';
            skillsList.style.display = isExpanded ? 'none' : 'grid';
            toggleIcon.textContent = isExpanded ? '▶' : '▼';
        }
    });
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // === Project Modal Popup Logic ===
  const projectData = [
    {
      title: 'Tonic',
      meta: 'CANOPY • Back End Dev • 2023',
      image: '../images/tonic.png',
      description: `A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
    },
    {
      title: 'Multi-Post Stories',
      meta: 'CANOPY • Full Stack Dev • 2023',
      image: '../images/multi-post.png',
      description: `Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
    },
    {
      title: 'Facebook 360',
      meta: 'FACEBOOK • Front End Dev • 2023',
      image: '../images/facebook.png',
      description: `Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
    },
    {
      title: 'Uber Navigation',
      meta: 'UBER • Lead Dev • 2023',
      image: '../images/uber.png',
      description: `A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: '#',
      source: '#',
    },
  ];

  const modalOverlay = document.getElementById('project-modal-overlay');
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close');
  const titleEl = document.getElementById('project-modal-title');
  const metaEl = document.getElementById('project-modal-meta');
  const imgEl = document.getElementById('project-modal-image');
  const descEl = document.getElementById('project-modal-description');
  const techEl = document.getElementById('project-modal-tech');
  const linksEl = document.getElementById('project-modal-links');

  // Defensive checks
  if (!modalOverlay || !modal || !closeBtn || !titleEl || !metaEl || !imgEl || !descEl || !techEl || !linksEl) {
    console.error('One or more modal elements are missing in the HTML.');
    return;
  }

  function openProjectModal(idx) {
    // Make sure idx is within bounds of projectData array
    if (idx < 0 || idx >= projectData.length) {
      console.error('Invalid project index:', idx);
      idx = 0; // Default to first project if index is invalid
    }
    
    const data = projectData[idx];
    titleEl.textContent = data.title;
    metaEl.textContent = data.meta;
    imgEl.src = data.image;
    imgEl.alt = data.title + ' image';
    descEl.textContent = data.description;
    techEl.innerHTML = data.tech.map(t => `<span>${t}</span>`).join(' ');
    linksEl.innerHTML = `
      <a href="${data.live}" target="_blank" rel="noopener">See live <img src="../icons/see-live.svg" alt="Live icon"></a>
      <a href="${data.source}" target="_blank" rel="noopener">See source <img src="../icons/github.svg" alt="GitHub icon"></a>
    `;
    
    // Show the modal
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    console.log('Modal opened for project:', data.title);
  }

  function closeProjectModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
    console.log('Modal closed');
  }

  // Get all project links
  const projectLinks = document.querySelectorAll('.project-link');
  
  if (!projectLinks.length) {
    console.error('No .project-link elements found.');
  } else {
    console.log('Found', projectLinks.length, 'project links');
    
    // Attach click event listeners to each project link
    projectLinks.forEach((link, idx) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Project link clicked:', idx);
        openProjectModal(idx);
      });
    });
  }

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', closeProjectModal);
  
  // Close modal when clicking outside the modal content
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeProjectModal();
  });
  
  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') closeProjectModal();
  });
  
  console.log('Modal functionality initialized');
});