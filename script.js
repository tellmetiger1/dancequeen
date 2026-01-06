// ============================================
// CACHE BUSTING FOR IMAGES
// ============================================
// When you update images, increment this version number
// This ensures browsers fetch the latest images instead of using cached versions
const IMAGE_CACHE_VERSION = '5';

// Helper function to add cache-busting to any image URL
// Use this in onclick handlers: window.open(addCacheBusting('images/path.jpg'), '_blank')
window.addCacheBusting = function(url) {
    if (!url || !url.includes('images/')) return url;
    if (url.includes('?v=')) return url; // Already has version
    const separator = url.includes('?') ? '&' : '?';
    return url + separator + 'v=' + IMAGE_CACHE_VERSION;
};

// Function to add cache-busting query parameter to image URLs
function addCacheBustingToImages() {
    // Update all <img> src attributes
    const images = document.querySelectorAll('img[src^="images/"]');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.includes('?v=')) {
            img.src = window.addCacheBusting(src);
        }
    });
    
    // Update background images in inline styles
    const elementsWithBg = document.querySelectorAll('[style*="background-image"]');
    elementsWithBg.forEach(el => {
        const style = el.getAttribute('style');
        if (style && style.includes('images/') && !style.includes('?v=')) {
            const newStyle = style.replace(/url\(['"]?([^'"]*images\/[^'"]*)['"]?\)/g, (match, url) => {
                return `url('${window.addCacheBusting(url)}')`;
            });
            el.setAttribute('style', newStyle);
        }
    });
    
    // Update onclick attributes that contain image URLs
    const elementsWithOnclick = document.querySelectorAll('[onclick*="images/"]');
    elementsWithOnclick.forEach(el => {
        const onclick = el.getAttribute('onclick');
        if (onclick && onclick.includes('images/') && !onclick.includes('?v=')) {
            const newOnclick = onclick.replace(/(['"])(images\/[^'"]*)(['"])/g, (match, quote1, url, quote2) => {
                return quote1 + window.addCacheBusting(url) + quote2;
            });
            el.setAttribute('onclick', newOnclick);
        }
    });
}

// Run cache busting as soon as possible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCacheBustingToImages);
} else {
    addCacheBustingToImages();
}

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
        emailjs.send('service_um97qoq', 'template_942r9bf', formData)
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

// Competition Learn More modal
function openCompetitionLearnMoreModal() {
    console.log('openCompetitionLearnMoreModal called');
    const modal = document.getElementById('competitionLearnMoreModal');
    const content = document.getElementById('competitionLearnMoreContent');
    
    console.log('Modal element:', modal);
    console.log('Content element:', content);
    
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    if (!content) {
        console.error('Content element not found');
        return;
    }
    
    content.innerHTML = `
        <h2 style="color: #2c2c2c; margin-bottom: 2rem; font-family: 'Playfair Display', serif;">About Our Competition Team</h2>
        
        <div style="margin-bottom: 2.5rem;">
            <h3 style="color: #d4af37; font-size: 1.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Achievements</h3>
            <p style="color: #666; line-height: 1.8; margin-bottom: 1rem;">Our team has consistently delivered top-tier results, including:</p>
            <ul style="color: #666; line-height: 1.8; padding-left: 1.5rem;">
                <li style="margin-bottom: 0.5rem;">Multiple Overall Highest Scores every year</li>
                <li style="margin-bottom: 0.5rem;">Frequent first-place wins across levels</li>
                <li style="margin-bottom: 0.5rem;">Judge's Choice and Best Performance awards</li>
                <li style="margin-bottom: 0.5rem;">Repeated Best Choreography Awards</li>
                <li style="margin-bottom: 0.5rem;">Scholarships and invitations to National Finals</li>
            </ul>
        </div>
        
        <div style="margin-bottom: 2.5rem;">
            <h3 style="color: #d4af37; font-size: 1.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Our Approach</h3>
            <p style="color: #666; line-height: 1.8;">We create custom choreography for each dancer, highlight individual strengths, and maintain efficient, high-quality training. Innovation and originality remain core to our choreographic style.</p>
        </div>
        
        <div>
            <h3 style="color: #d4af37; font-size: 1.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Our Mission</h3>
            <p style="color: #666; line-height: 1.8; margin-bottom: 1rem;">We believe every child deserves the chance to shine.</p>
            <p style="color: #666; line-height: 1.8;">Our goal is to help dancers build confidence, express themselves, and experience the joy of performing on stage—no matter their starting point.</p>
        </div>
    `;
    
    console.log('Calling openModal');
    openModal('competitionLearnMoreModal');
    console.log('Modal display after openModal:', modal.style.display);
}

// Make it globally accessible
window.openCompetitionLearnMoreModal = openCompetitionLearnMoreModal;

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

// Image modal functionality
window.openImageModal = function(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        // Apply cache busting to the image source
        modalImage.src = window.addCacheBusting(imageSrc);
        openModal('imageModal');
    }
};

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
    
    // Add click handler for Learn More button
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Learn More button clicked via event listener');
            if (typeof openCompetitionLearnMoreModal === 'function') {
                openCompetitionLearnMoreModal();
            } else {
                console.error('openCompetitionLearnMoreModal function not found');
            }
        });
    }
});
