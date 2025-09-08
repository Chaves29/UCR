// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero scroll indicator
const scrollIndicator = document.querySelector('.hero-scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.article-card, .category-card').forEach(el => {
    observer.observe(el);
});

// Add floating animation to stat items on hover
const statItems = document.querySelectorAll('.stat-item');
if (statItems.length > 0) {
    statItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'none';
            item.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.animation = 'statFloat 4s ease-in-out infinite';
            item.style.transform = '';
        });
    });
}

// Header con efecto de scroll
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
}

// Animación de números en las estadísticas
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '+';
        }, 50);
    });
}

// Ejecutar animación de números cuando la sección sea visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateNumbers, 1500);
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroObserver.observe(heroSection);
}

// Efecto de typing para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('.newsletter-input').value;
        
        if (email) {
            // Aquí se podría integrar con un servicio de newsletter
            alert('¡Gracias por suscribirte! Te mantendremos informado sobre nuevos contenidos.');
            e.target.querySelector('.newsletter-input').value = '';
        }
    });
}

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth reveal animations
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);

// Inicializar efectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clases para animaciones
    const animatedElements = document.querySelectorAll('.article-card, .category-card');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Efecto de partículas en el hero (opcional)
    createParticles();
});

// Función para crear partículas flotantes
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(76, 175, 80, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${5 + Math.random() * 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;
        
        hero.appendChild(particle);
    }
}

// CSS para las partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(particleStyle);

// Blog Post Form Functionality
function clearForm() {
    const form = document.getElementById('newPostForm');
    if (form) {
        form.reset();
        // Show confirmation
        showNotification('Formulario limpiado', 'info');
    }
}

// Handle new post form submission
const newPostForm = document.getElementById('newPostForm');
if (newPostForm) {
    newPostForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const postData = {
            title: formData.get('postTitle'),
            category: formData.get('postCategory'),
            author: formData.get('readingAuthor'),
            tags: formData.get('postTags'),
            excerpt: formData.get('postExcerpt'),
            content: formData.get('postContent'),
            date: new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            readingTime: estimateReadingTime(formData.get('postContent'))
        };
        
        // Validate required fields
        if (!postData.title || !postData.category || !postData.author || !postData.excerpt || !postData.content) {
            showNotification('Por favor, completa todos los campos requeridos', 'error');
            return;
        }
        
        // Save post (in a real application, this would send to a server)
        savePost(postData);
        
        // Show success message
        showNotification('¡Análisis publicado exitosamente!', 'success');
        
        // Clear form
        this.reset();
        
        // Scroll to top of posts section
        document.querySelector('.blog-posts').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Estimate reading time based on content length
function estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
}

// Save post to localStorage (in a real app, this would be a server call)
function savePost(postData) {
    let posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    postData.id = Date.now().toString();
    posts.unshift(postData); // Add to beginning of array
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    // Update the posts display
    updatePostsDisplay();
}

// Update posts display with new posts
function updatePostsDisplay() {
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const postsGrid = document.querySelector('.blog-posts');
    
    if (posts.length > 0 && postsGrid) {
        // Add new posts to the beginning of the grid
        posts.slice(0, 3).forEach((post, index) => {
            if (!document.querySelector(`[data-post-id="${post.id}"]`)) {
                const postElement = createPostElement(post);
                postsGrid.insertBefore(postElement, postsGrid.firstChild);
            }
        });
    }
}

// Create post element
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.setAttribute('data-post-id', post.id);
    
    const tags = post.tags ? post.tags.split(',').map(tag => `<span class="post-tag">${tag.trim()}</span>`).join('') : '';
    
    article.innerHTML = `
        <div class="post-image">
            <i class="fas fa-book-open post-icon"></i>
        </div>
        <div class="post-content">
            <div class="post-header">
                <div class="post-category">${post.category}</div>
                <div class="post-author">Análisis de: ${post.author}</div>
            </div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span class="post-date"><i class="fas fa-calendar"></i> ${post.date}</span>
                <span class="post-reading-time"><i class="fas fa-clock"></i> ${post.readingTime}</span>
            </div>
            ${tags ? `<div class="post-tags">${tags}</div>` : ''}
            <a href="#" class="post-link" onclick="viewPost('${post.id}')">Leer análisis completo <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return article;
}

// View full post (placeholder function)
function viewPost(postId) {
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        // In a real application, this would navigate to a post detail page
        alert(`Análisis: ${post.title}\n\nContenido:\n${post.content}`);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 1000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification animation styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        opacity: 0.7;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(notificationStyles);

// Load existing posts on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePostsDisplay();
});