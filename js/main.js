
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

// --- GLOBAL FOOTER INJECTION ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sidebar Logic
  const dropdowns = document.querySelectorAll('.has-submenu > a');
  dropdowns.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = trigger.parentElement;
      parent.classList.toggle('open');
    });
  });

  // 2. Footer Injection (Only if not already present)
  if (!document.getElementById('globalFooter')) {
    const footerInfo = document.createElement('footer');
    footerInfo.id = 'globalFooter';
    footerInfo.innerHTML = `
            <div style="background: linear-gradient(to right, #2c3e50, #4ca1af); color: rgba(255,255,255,0.9); padding: 1.5rem; text-align: center; margin-top: 4rem; border-top: 4px solid #f1c40f; position: relative; z-index: 100;">
                <div style="font-family: 'Tajawal', sans-serif; font-size: 1rem; margin-bottom: 0.5rem;">
                    <i class="fas fa-school ml-2"></i> جميع الحقوق محفوظة لـ <strong>مدرسة محمد بن القاسم الابتدائية</strong> © ${toArabicNum(2025)}
                </div>
                <div style="font-size: 0.85rem; opacity: 0.8;">
                     تصميم وتطوير: <span style="color: #f1c40f; font-weight: bold;">Eng. Nassir</span> 
                     <i class="fas fa-code fa-sm ml-1"></i>
                </div>
            </div>
        `;
    document.body.appendChild(footerInfo);
  }
});
