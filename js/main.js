/**
 * Main JavaScript File
 * Handles:
 * 1. Sidebar Dropdowns
 * 2. Mobile Navigation (Hamburger Menu)
 * 3. Utility Functions
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. SIDEBAR DROPDOWN LOGIC (Event Delegation) ---
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      // Check if the clicked element is, or is inside, a dropdown trigger
      const trigger = e.target.closest('.has-submenu > a');

      if (trigger) {
        e.preventDefault();
        e.stopPropagation(); // Stop bubbling immediately

        const parent = trigger.closest('.has-submenu');
        if (parent) {
          // Toggle the open class
          parent.classList.toggle('open');

          // Optional: Close other menus if you want accordion behavior
          /*
          const others = sidebar.querySelectorAll('.has-submenu.open');
          others.forEach(other => {
            if (other !== parent) {
              other.classList.remove('open');
            }
          });
          */
        }
      }
    });
  }

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
