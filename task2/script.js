
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const characterCards = document.querySelectorAll('.character-card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        characterCards.forEach(card => {
            const characterName = card.querySelector('h2').textContent.toLowerCase();
            if (characterName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    prevButton.addEventListener('click', () => {
        alert('Previous page (functionality not implemented)');
    });

    nextButton.addEventListener('click', () => {
        alert('Next page (functionality not implemented)');
    });
});
