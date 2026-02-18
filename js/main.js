
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
