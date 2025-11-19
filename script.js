// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.style-card, .philosophy-content, .community-content, .competition-content');
    animateElements.forEach(el => observer.observe(el));
});

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// FAQ accordion functionality
window.toggleFAQ = function(element) {
    if (!element) {
        console.error('toggleFAQ: element is null');
        return;
    }
    
    const answer = element.nextElementSibling;
    if (!answer) {
        console.error('toggleFAQ: answer element not found');
        return;
    }
    
    if (!answer.classList.contains('faq-answer')) {
        console.error('toggleFAQ: next element is not a faq-answer');
        return;
    }
    
    const isActive = element.classList.contains('active');
    
    // Close all other FAQ items
    const allQuestions = document.querySelectorAll('.faq-question');
    const allAnswers = document.querySelectorAll('.faq-answer');
    
    allQuestions.forEach(q => q.classList.remove('active'));
    allAnswers.forEach(a => a.classList.remove('active'));
    
    // Toggle current item
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('active');
    }
};

// Form validation and submission
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#eee';
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.style.borderColor = '#e74c3c';
            isValid = false;
        }
    }
    
    return isValid;
}

// Initialize EmailJS (only if EmailJS is loaded)
(function() {
    if (typeof emailjs !== 'undefined') {
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init('DJhqNaoXcXDMdW2_v');
    }
})();

function submitForm(formId) {
    if (validateForm(formId)) {
        const form = document.getElementById(formId);
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Prepare form data for EmailJS
        const formData = {
            from_name: form.querySelector('#name').value,
            from_email: form.querySelector('#email').value,
            phone: form.querySelector('#phone').value,
            subject: form.querySelector('#subject').value,
            message: form.querySelector('#message').value,
            to_email: 'dancequeenq77@gmail.com' // Your studio email
        };
        
        // Send email using EmailJS
        emailjs.send('service_4c5xxbd', 'template_942r9bf', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#27ae60';
                
                // Reset form after success
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '#d4af37';
                }, 2000);
            }, function(error) {
                console.log('FAILED...', error);
                submitBtn.textContent = 'Error - Try Again';
                submitBtn.style.background = '#e74c3c';
                
                // Reset button after error
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '#d4af37';
                }, 3000);
            });
    }
}

// Competition gallery modal
function openCompetitionModal(dancerName, dancerCaption = '') {
    const modal = document.getElementById('competitionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalTitle) {
        modalTitle.textContent = dancerName;
        if (modalCaption) {
            modalCaption.textContent = dancerCaption;
        }
        openModal('competitionModal');
    }
}

// Teacher modal
function openTeacherModal(teacherName, teacherBio, teacherSpecialty) {
    const modal = document.getElementById('teacherModal');
    const modalImage = document.getElementById('teacherModalImage');
    const modalBio = document.getElementById('teacherModalBio');
    const modalSpecialty = document.getElementById('teacherModalSpecialty');
    
    if (modal) {
        if (modalBio && modalImage) {
            // Create a temporary div to decode HTML entities
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = teacherBio;
            
            // Extract image and text content
            const imgElement = tempDiv.querySelector('img');
            const paragraphs = tempDiv.querySelectorAll('p');
            
            // Set image
            if (imgElement) {
                modalImage.innerHTML = '';
                modalImage.appendChild(imgElement.cloneNode(true));
            }
            
            // Set text content (paragraphs only)
            if (paragraphs.length > 0) {
                modalBio.innerHTML = '';
                paragraphs.forEach(p => {
                    modalBio.appendChild(p.cloneNode(true));
                });
            }
        }
        
        if (modalSpecialty) {
            modalSpecialty.textContent = teacherSpecialty;
        }
        openModal('teacherModal');
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Initialize tooltips or other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization code here
    
    // Example: Add click handlers for teacher cards
    const teacherCards = document.querySelectorAll('.teacher-card');
    teacherCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.teacher-name').textContent;
            const bio = this.querySelector('.teacher-bio').textContent;
            const specialty = this.querySelector('.teacher-specialty').textContent;
            openTeacherModal(name, bio, specialty);
        });
    });
    
    // Example: Add click handlers for competition items
    const competitionItems = document.querySelectorAll('.competition-item');
    competitionItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.competition-name').textContent;
            openCompetitionModal(name);
        });
    });
    
    // Add click handlers for FAQ questions (backup to inline onclick)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        // Remove existing onclick and use addEventListener instead
        question.removeAttribute('onclick');
        question.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (window.toggleFAQ) {
                window.toggleFAQ(this);
            }
        });
    });
});
