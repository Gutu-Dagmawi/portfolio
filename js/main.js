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
                            <img src="icons/javascript.svg" alt="JavaScript">
                        </div>
                        <span>JavaScript</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon html-icon">
                            <img src="icons/html5.svg" alt="HTML">
                        </div>
                        <span>HTML</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon css-icon">
                            <img src="icons/css3.svg" alt="CSS">
                        </div>
                        <span>CSS</span>
                    </li>
                `;
            } else if (header.textContent.includes('Frameworks')) {
                newList.innerHTML = `
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/react.svg" alt="React">
                        </div>
                        <span>React.js</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/ruby.svg" alt="Ruby">
                        </div>
                        <span>Ruby on Rails</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/bootstrap.svg" alt="Bootstrap">
                        </div>
                        <span>Bootstrap</span>
                    </li>
                `;
            } else if (header.textContent.includes('Skills')) {
                newList.innerHTML = `
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/git.svg" alt="Git">
                        </div>
                        <span>Git</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/github-skill.svg" alt="GitHub">
                        </div>
                        <span>GitHub</span>
                    </li>
                    <li class="skill-item">
                        <div class="skill-icon">
                            <img src="icons/terminal.svg" alt="Terminal">
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