
document.addEventListener('DOMContentLoaded', () => {
  // Dropdown toggle for sidebar
  const dropdowns = document.querySelectorAll('.has-submenu > a');
  dropdowns.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = trigger.parentElement;
      parent.classList.toggle('open');

      // Optional: Close other menus if needed? User didn't ask, but it's cleaner.
      // keeping it simple for now as requested.
    });
  });
});

// Utility to convert English numbers to Arabic (Hindi) numerals
function toArabicNum(num) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return num.toString().replace(/\d/g, (d) => map[d]);
}

// --- MOBILE NAVIGATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Hamburger Button & Overlay
  const body = document.body;

  // Check if button already exists (to avoid duplicates)
  if (!document.querySelector('.menu-toggle')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.setAttribute('aria-label', 'Toggle Navigation');
    body.appendChild(toggleBtn);

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    body.appendChild(overlay);

    // 2. Event Listeners
    const sidebar = document.querySelector('.sidebar');

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

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link (optional, good UX)
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          toggleMenu();
        }
      });
    });
  }
});
