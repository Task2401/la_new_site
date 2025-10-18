// Navigation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    document.getElementById('backButton').classList.toggle('show', sectionId !== 'servicesSection');
}

function goBack() {
    showSection('servicesSection');
}
