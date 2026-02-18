/**
 * Main JavaScript File
 * Handles:
 * 1. Sidebar Dropdowns
 * 2. Mobile Navigation (Hamburger Menu)
 * 3. Utility Functions
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. SIDEBAR DROPDOWN LOGIC ---
  // Ensure we are selecting the correct elements. 
  // The previous code used .has-submenu > a, which assumes standard markup.
  const dropdowns = document.querySelectorAll('.has-submenu > a');

  dropdowns.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Stop event from bubbling up to document

      // Toggle the 'open' class on the parent li (has-submenu)
      const parent = trigger.parentElement;
      parent.classList.toggle('open');

      // Log for debugging (optional/removed in prod)
      // console.log('Dropdown clicked:', parent);
    });
  });

  // --- 2. MOBILE NAVIGATION LOGIC ---
  const body = document.body;

  // Inject Hamburger Button & Overlay if they don't exist
  if (!document.querySelector('.menu-toggle')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.setAttribute('aria-label', 'Toggle Navigation');
    body.appendChild(toggleBtn);

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    body.appendChild(overlay);

    // Sidebar Elements
    const sidebar = document.querySelector('.sidebar');

    // Check if sidebar exists
    if (sidebar) {
      // Toggle Function
      function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Toggle Icon
        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }

      // Event Listeners
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      overlay.addEventListener('click', toggleMenu);

      // Close menu when clicking a link inside sidebar (Mobile UX)
      const links = sidebar.querySelectorAll('a:not(.has-submenu > a)'); // Don't close on dropdown triggers
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 900) {
            toggleMenu();
          }
        });
      });
    }
  }
});

// --- UTILITY FUNCTIONS ---

// Convert English numbers to Arabic (Hindi) numerals
function toArabicNum(num) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return num.toString().replace(/\d/g, (d) => map[d]);
}
