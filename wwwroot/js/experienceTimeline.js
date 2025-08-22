window.experienceTimelineInit = function () {
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.exp-role-row[data-animate], .exp-internships-section[data-animate], .exp-intern-card').forEach(card => {
        observer.observe(card);
    });
};
