// styles.js

// Функция для добавления эффекта при наведении на карточку персонажа
function addHoverEffect() {
    const cards = document.querySelectorAll('.character-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Функция для инициализации всех стилей и эффектов
function initStyles() {
    addHoverEffect();
}

// Экспорт функций для использования в других файлах
export { initStyles };