// Animation collection
const animations = [
    {
        title: "Glowing Button",
        description: "Pulsating glow effect around buttons. Perfect for primary call-to-action buttons. Examples: 'Sign Up Now', 'Purchase', 'Download' buttons on landing pages",
        preview: "glowing-button",
        complexity: "Easy",
        tags: ["Button", "Glow", "Interactive"]
    },
    {
        title: "3D Card Flip",
        description: "Smooth 3D card rotation effect revealing front and back content. Ideal for product showcases, team member profiles, or flashcards. Examples: Product features, pricing plans",
        preview: "flip-card-3d",
        complexity: "Intermediate",
        tags: ["3D", "Card", "Hover"]
    },
    {
        title: "Typing Effect",
        description: "Real-time typing animation simulating human typing. Perfect for hero sections, chatbots, or dynamic text displays. Examples: Welcome messages, automated responses",
        preview: "typing-effect",
        complexity: "Easy",
        tags: ["Text", "Typing", "Dynamic"]
    },
    {
        title: "Floating Action Button",
        description: "Material Design floating button with ripple effect. Great for primary actions in mobile-first designs. Examples: Add new post, compose message, quick actions",
        preview: "fab-button",
        complexity: "Intermediate",
        tags: ["Button", "Material", "Ripple"]
    },
    {
        title: "Gradient Border",
        description: "Animated gradient border that shifts colors. Excellent for highlighting premium content or special offers. Examples: Featured products, subscription cards, VIP sections",
        preview: "gradient-border",
        complexity: "Intermediate",
        tags: ["Border", "Gradient", "Container"]
    },
    {
        title: "Shake Animation",
        description: "Attention-grabbing shake effect for notifications or validation. Perfect for form validation or alerts. Examples: Error messages, new notification indicators",
        preview: "shake-element",
        complexity: "Easy",
        tags: ["Notification", "Shake", "Alert"]
    },
    {
        title: "Scale Hover",
        description: "Smooth scaling animation on hover. Enhances interactive elements with depth. Examples: Product cards in e-commerce, gallery images, clickable panels",
        preview: "scale-hover",
        complexity: "Easy",
        tags: ["Hover", "Scale", "Interactive"]
    },
    {
        title: "Pulse Animation",
        description: "Heartbeat-like pulsing effect for drawing attention. Great for status indicators or highlights. Examples: Live status indicator, notification badges, important buttons",
        preview: "pulse",
        complexity: "Easy",
        tags: ["Pulse", "Attention", "Subtle"]
    },
    {
        title: "Floating Element",
        description: "Gentle floating motion creating a light, airy feel. Perfect for background elements or decorative items. Examples: Cloud graphics, testimonial cards, hero images",
        preview: "floating",
        complexity: "Easy",
        tags: ["Float", "Movement", "Subtle"]
    },
    {
        title: "Progress Bar",
        description: "Animated progress indicator with gradient fill. Essential for showing completion or loading status. Examples: File upload progress, quiz completion, step indicators",
        preview: "progress-bar",
        complexity: "Intermediate",
        tags: ["Progress", "Loading", "Status"]
    },
    {
        title: "Rotating Card",
        description: "3D rotating card revealing additional information. Perfect for product details or feature showcases. Examples: Product specifications, team member bios",
        preview: "rotating-card",
        complexity: "Advanced",
        tags: ["3D", "Card", "Rotate"]
    },
    {
        title: "Bouncing Button",
        description: "Playful bouncing animation for interactive elements. Great for gaming or child-friendly interfaces. Examples: Game start button, achievement unlocked notification",
        preview: "bouncing-button",
        complexity: "Easy",
        tags: ["Button", "Bounce", "Playful"]
    },
    {
        title: "Ripple Effect",
        description: "Material Design-inspired ripple on click. Provides tactile feedback for any clickable element. Examples: All buttons in Material Design interfaces, menu items",
        preview: "ripple-effect",
        complexity: "Intermediate",
        tags: ["Material", "Ripple", "Interactive"]
    },
    {
        title: "Smoke Effect",
        description: "Ethereal smoke animation for mystical or dramatic effects. Perfect for gaming or atmospheric websites. Examples: Fantasy game portals, special effect transitions",
        preview: "smoke-effect",
        complexity: "Advanced",
        tags: ["Smoke", "Particle", "Effect"]
    },
    {
        title: "Elastic Menu",
        description: "Stretchy, elastic menu items with playful movement. Great for mobile navigation or interactive menus. Examples: Mobile app menus, gaming interfaces",
        preview: "elastic-menu",
        complexity: "Intermediate",
        tags: ["Menu", "Elastic", "Navigation"]
    },
    {
        title: "Confetti Burst",
        description: "Colorful confetti explosion for celebrations. Perfect for achievement or success messages. Examples: Competition winner announcement, signup completion",
        preview: "confetti-burst",
        complexity: "Advanced",
        tags: ["Celebration", "Particles", "Animation"]
    },
    {
        title: "Ink Spread",
        description: "Organic ink spreading effect from click point. Ideal for creative websites or interactive backgrounds. Examples: Artist portfolios, creative agency sites",
        preview: "ink-spread",
        complexity: "Intermediate",
        tags: ["Ink", "Spread", "Creative"]
    },
    {
        title: "Magnetic Button",
        description: "Button that attracts the cursor like a magnet. Creates engaging interactive elements. Examples: Social media share buttons, call-to-action buttons",
        preview: "magnetic-button",
        complexity: "Intermediate",
        tags: ["Button", "Magnetic", "Interactive"]
    },
    {
        title: "DNA Helix",
        description: "Double helix rotation animation for scientific presentations. Perfect for medical or scientific websites. Examples: Research lab sites, biology educational platforms",
        preview: "dna-helix",
        complexity: "Advanced",
        tags: ["Science", "Biology", "3D"]
    },
    {
        title: "Crystal Growth",
        description: "Crystalline formation animation effect. Ideal for nature or science visualizations. Examples: Mineralogy websites, chemistry educational platforms",
        preview: "crystal-growth",
        complexity: "Advanced",
        tags: ["Nature", "Growth", "Science"]
    },
    {
        title: "Hologram Effect",
        description: "Futuristic hologram glitch effect. Perfect for sci-fi or tech-focused interfaces. Examples: Tech product launches, futuristic dashboards",
        preview: "hologram",
        complexity: "Advanced",
        tags: ["Hologram", "SciFi", "Tech"]
    },
    {
        title: "Neural Network",
        description: "Animated neural network visualization. Ideal for AI and machine learning projects. Examples: AI startup websites, data science platforms",
        preview: "neural-network",
        complexity: "Advanced",
        tags: ["AI", "Network", "Tech"]
    },
    {
        title: "Fire Ring",
        description: "Circular fire animation with dynamic flames. Great for dramatic effects or loading indicators. Examples: Gaming portals, festival websites",
        preview: "fire-ring",
        complexity: "Advanced",
        tags: ["Fire", "Effect", "Animation"]
    },
    {
        title: "Water Ripple",
        description: "Realistic water ripple effect on interaction. Perfect for nature-themed or calming interfaces. Examples: Spa websites, water product showcases",
        preview: "water-ripple",
        complexity: "Intermediate",
        tags: ["Water", "Nature", "Effect"]
    },
    {
        title: "Aurora Waves",
        description: "Northern lights-inspired wave animation. Beautiful for atmospheric backgrounds. Examples: Travel websites, nature photography portfolios",
        preview: "aurora-waves",
        complexity: "Advanced",
        tags: ["Nature", "Light", "Background"]
    },
    {
        title: "Time Portal",
        description: "Spinning vortex effect for transitions. Perfect for sci-fi themes or loading states. Examples: Time-travel themed sites, game loading screens",
        preview: "time-portal",
        complexity: "Advanced",
        tags: ["Portal", "SciFi", "Effect"]
    },
    {
        title: "Magic Sparkles",
        description: "Magical particle effects following cursor movement. Great for children's websites or festive themes. Examples: Disney-style websites, holiday specials",
        preview: "magic-sparkles",
        complexity: "Intermediate",
        tags: ["Magic", "Particles", "Fun"]
    },
    {
        title: "Cyber Circuit",
        description: "Animated circuit board pattern with glowing paths. Perfect for tech themes. Examples: IT services websites, electronics product pages",
        preview: "cyber-circuit",
        complexity: "Advanced",
        tags: ["Tech", "Circuit", "Digital"]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const scrollToTop = document.querySelector('.scroll-to-top');
const viewButtons = document.querySelectorAll('.view-btn');
const animationGrid = document.querySelector('.animation-grid');

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterAnimations(searchTerm);
});

function filterAnimations(searchTerm = '') {
    const cards = document.querySelectorAll('.animation-card');
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       tags.some(tag => tag.includes(searchTerm));
        
        card.style.display = matches ? 'block' : 'none';
        
        // Add fade animation
        if (matches) {
            card.style.animation = 'fadeInUp 0.5s ease-out';
        }
    });
}

// View toggle (grid/list)
viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        animationGrid.className = `animation-grid ${view}-view`;
    });
});

// Scroll to top functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Like functionality
function toggleLike(btn) {
    btn.classList.toggle('active');
    const count = btn.querySelector('.like-count');
    const currentLikes = parseInt(count.textContent);
    count.textContent = btn.classList.contains('active') ? currentLikes + 1 : currentLikes - 1;
    
    // Animation
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// Animation controls
function restartAnimation() {
    const preview = document.getElementById('modalPreview');
    preview.style.animation = 'none';
    preview.offsetHeight; // Trigger reflow
    preview.style.animation = null;
}

function slowDownAnimation() {
    const preview = document.getElementById('modalPreview');
    preview.style.animationDuration = '3s';
    setTimeout(() => {
        preview.style.animationDuration = '1s';
    }, 3000);
}

// Copy code with feedback
function copyCode(type) {
    const codeElement = document.getElementById(`modal${type.charAt(0).toUpperCase() + type.slice(1)}Code`);
    const code = codeElement.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const button = document.querySelector(`button[onclick="copyCode('${type}')"]`);
        const icon = button.querySelector('i');
        const originalIcon = icon.className;
        
        button.classList.add('copied');
        icon.className = 'fas fa-check';
        
        setTimeout(() => {
            button.classList.remove('copied');
            icon.className = originalIcon;
        }, 2000);
    });
}

// Create animation cards with enhanced features
function createAnimationCards() {
    const grid = document.querySelector('.animation-grid');
    grid.innerHTML = '';
    
    animations.forEach((animation, index) => {
        const card = document.createElement('div');
        card.className = 'animation-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';
        
        const previewAnimation = document.createElement('div');
        previewAnimation.className = `preview-animation ${animation.preview}`;
        previewAnimation.innerHTML = animation.previewHtml || '';
        
        const complexityBadge = document.createElement('div');
        complexityBadge.className = 'complexity-badge';
        complexityBadge.textContent = animation.complexity;
        
        previewContainer.appendChild(previewAnimation);
        previewContainer.appendChild(complexityBadge);
        
        const content = document.createElement('div');
        content.className = 'card-content';
        content.innerHTML = `
            <h3 class="card-title">${animation.title}</h3>
            <p class="card-description">${animation.description}</p>
            <div class="card-tags">
                ${animation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        card.appendChild(previewContainer);
        card.appendChild(content);
        
        card.addEventListener('click', () => openModal(animation));
        
        grid.appendChild(card);
    });
}

// Theme toggle functionality
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-theme', prefersDark);
    }
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Modal functionality
function openModal(animation) {
    const modal = document.getElementById('animationModal');
    
    document.getElementById('modalTitle').textContent = animation.title;
    document.getElementById('modalComplexity').textContent = animation.complexity;
    document.getElementById('modalDescription').textContent = animation.description;
    document.getElementById('modalCssCode').textContent = animation.cssCode || '';
    document.getElementById('modalHtmlCode').textContent = animation.htmlCode || '';
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = animation.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    const preview = document.getElementById('modalPreview');
    preview.className = `modal-preview ${animation.preview}`;
    preview.innerHTML = animation.previewHtml || '';
    
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('animationModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('animationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize everything when document loads
document.addEventListener('DOMContentLoaded', () => {
    createAnimationCards();
    initTheme();
    
    // Filter functionality
    document.querySelectorAll('.filter-btn, .tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            document.querySelectorAll('.filter-btn').forEach(b => 
                b.classList.remove('active'));
            
            if (btn.classList.contains('filter-btn')) {
                btn.classList.add('active');
            }
            
            const cards = document.querySelectorAll('.animation-card');
            cards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('.tag'))
                    .map(tag => tag.textContent);
                
                if (filter === 'all' || tags.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
