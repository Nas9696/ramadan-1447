function updatePreview() {
    // Get Values
    const name = document.getElementById('certStudentName').value || 'الاسم هنا';
    const gender = document.getElementById('certGender').value;
    const grade = document.getElementById('certGrade').value || '...';
    const field = document.getElementById('certField').value || '...';

    const teacher = document.getElementById('certTeacher').value || '...';
    const counselor = document.getElementById('certCounselor').value || 'أ. علي بن محمد آل مقبول';
    const manager = document.getElementById('certManager').value || 'أ. سفر بن مبارك آل فلكه';
    // const school = document.getElementById('certSchool').value || 'مدرسة محمد بن القاسم الابتدائية';

    // Logic: Gender
    const isFe = gender === 'female';
    document.getElementById('pGenderTitle').innerText = isFe ? 'للطالبة المتفوقة' : 'للطالب المتفوق';

    // Map to Preview
    document.getElementById('pStudent').innerText = name;
    document.getElementById('pGrade').innerText = grade;
    document.getElementById('pField').innerText = field;
    document.getElementById('pTeacher').innerText = teacher;
    document.getElementById('pCounselor').innerText = counselor;
    document.getElementById('pManager').innerText = manager;
    // document.getElementById('pSchool').innerText = school;
}

function setTheme(themeName) {
    document.getElementById('certificateFrame').className = 'theme-' + themeName;
    document.getElementById('certificateFrame').style.backgroundSize = "cover";
    document.getElementById('certificateFrame').style.backgroundPosition = "center";

    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    // Ideally highlight the clicked button
}

function printCertificate() {
    const printContent = document.getElementById('certificateFrame').outerHTML;
    const win = window.open('', '', 'width=1200,height=900');
    win.document.write(`
        <html dir="rtl">
            <head>
                <title>طباعة الشهادة</title>
                <link rel="stylesheet" href="css/certificates.css">
                <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
                    #certificateFrame { transform: scale(1) !important; box-shadow: none; margin: 0; page-break-after: always; }
                    @media print {
                        @page { size: landscape; margin: 0; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    }
                </style>
            </head>
            <body>
                ${printContent}
            </body>
        </html>
    `);
    win.document.close();
    setTimeout(() => {
        win.focus();
        win.print();
        win.close();
    }, 500);
}

// Init
updatePreview();
