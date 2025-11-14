// NCLEX Dashboard Interactive Features

document.addEventListener('DOMContentLoaded', function() {

    // Initialize all interactive features
    initFilterTabs();
    initButtonHandlers();
    initLogoutHandler();

    // Display welcome message
    console.log('ELAB NCLEX Dashboard loaded successfully!');
});

/**
 * Initialize filter tabs functionality
 */
function initFilterTabs() {
    const tabs = document.querySelectorAll('.tab');
    const workItems = document.querySelectorAll('.work-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Filter work items based on selected tab
            const filterType = this.textContent.trim().toLowerCase();
            filterWorkItems(filterType, workItems);
        });
    });
}

/**
 * Filter work items based on selected filter
 */
function filterWorkItems(filterType, workItems) {
    workItems.forEach(item => {
        const statusBadge = item.querySelector('.status-badge');

        if (filterType === 'all') {
            item.style.display = 'block';
        } else if (filterType === 'pending') {
            // Show items that are not started or in progress
            if (statusBadge && (statusBadge.classList.contains('not-started') ||
                statusBadge.classList.contains('in-progress'))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        } else if (filterType === 'completed') {
            // Show completed items (currently none in the sample data)
            if (statusBadge && statusBadge.classList.contains('completed')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

/**
 * Initialize button click handlers
 */
function initButtonHandlers() {
    // Continue assignment buttons
    const continueButtons = document.querySelectorAll('.btn-primary');
    continueButtons.forEach(btn => {
        if (btn.textContent.includes('Continue') || btn.textContent.includes('Start')) {
            btn.addEventListener('click', handleStartAssignment);
        } else if (btn.textContent.includes('Watch')) {
            btn.addEventListener('click', handleWatchReplay);
        }
    });

    // View details/tasks buttons
    const viewButtons = document.querySelectorAll('.btn-secondary');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewDetails);
    });

    // Resource links
    const resourceLinks = document.querySelectorAll('.resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', handleResourceClick);
    });

    // Help links
    const helpLinks = document.querySelectorAll('.help-link');
    helpLinks.forEach(link => {
        link.addEventListener('click', handleHelpClick);
    });
}

/**
 * Handle assignment start/continue
 */
function handleStartAssignment(e) {
    e.preventDefault();
    const workItem = e.target.closest('.work-item') || e.target.closest('.card');
    const assignmentTitle = workItem ? workItem.querySelector('.assignment-name, .work-title').textContent : 'assignment';

    showNotification(`Starting ${assignmentTitle}...`, 'info');

    // Simulate navigation delay
    setTimeout(() => {
        console.log('Navigating to assignment:', assignmentTitle);
        // In a real application, this would navigate to the assignment page
    }, 500);
}

/**
 * Handle watch replay
 */
function handleWatchReplay(e) {
    e.preventDefault();
    const workItem = e.target.closest('.work-item');
    const replayTitle = workItem ? workItem.querySelector('.work-title').textContent : 'replay';

    showNotification(`Opening ${replayTitle}...`, 'info');

    setTimeout(() => {
        console.log('Opening replay:', replayTitle);
    }, 500);
}

/**
 * Handle view details
 */
function handleViewDetails(e) {
    e.preventDefault();
    const workItem = e.target.closest('.work-item') || e.target.closest('.card');
    const itemTitle = workItem ? workItem.querySelector('.assignment-name, .work-title').textContent : 'item';

    showNotification(`Loading details for ${itemTitle}...`, 'info');

    setTimeout(() => {
        console.log('Viewing details for:', itemTitle);
    }, 500);
}

/**
 * Handle resource click
 */
function handleResourceClick(e) {
    e.preventDefault();
    const resourceName = e.target.closest('.resource-item').querySelector('span').textContent;

    showNotification(`Opening ${resourceName}...`, 'info');

    setTimeout(() => {
        console.log('Opening resource:', resourceName);
    }, 500);
}

/**
 * Handle help link click
 */
function handleHelpClick(e) {
    e.preventDefault();
    const helpType = e.target.textContent;

    showNotification(`Opening ${helpType}...`, 'info');

    setTimeout(() => {
        console.log('Help requested:', helpType);
    }, 500);
}

/**
 * Handle logout
 */
function initLogoutHandler() {
    const logoutBtn = document.querySelector('.logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();

            if (confirm('Are you sure you want to logout?')) {
                showNotification('Logging out...', 'info');

                setTimeout(() => {
                    console.log('User logged out');
                    // In a real application, this would redirect to login page
                }, 1000);
            }
        });
    }
}

/**
 * Show notification to user
 */
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        backgroundColor: type === 'info' ? '#3498db' : type === 'success' ? '#27ae60' : '#e74c3c',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '9999',
        fontSize: '14px',
        fontWeight: '500',
        animation: 'slideIn 0.3s ease-out',
        maxWidth: '300px'
    });

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Append to body
    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Update progress bar animation
 */
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const targetWidth = progressBar.style.width;
        progressBar.style.width = '0%';

        setTimeout(() => {
            progressBar.style.width = targetWidth;
        }, 100);
    }
}

// Animate progress bar on load
animateProgressBar();

/**
 * Add hover effects to cards
 */
const cards = document.querySelectorAll('.card, .sidebar-card, .work-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/**
 * Handle responsive navigation for mobile
 */
function handleResponsiveFeatures() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        console.log('Mobile view activated');
        // Add any mobile-specific features here
    }
}

// Check on load and resize
handleResponsiveFeatures();
window.addEventListener('resize', handleResponsiveFeatures);

/**
 * Simulate data updates (for demonstration)
 */
function simulateDataUpdate() {
    // This function could be used to fetch updated data from an API
    console.log('Checking for updates...');

    // Example: Update progress percentage
    // In a real app, this would come from the backend
}

// Check for updates every 5 minutes (for demonstration purposes)
// setInterval(simulateDataUpdate, 300000);
