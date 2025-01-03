async function start() {
    const characterCardBox = document.getElementById('character-card-box');
    const characterModalBox = document.getElementById('character-modal-box');

    try {
        const characters = await fetchCharacters();
        const characterCards = getCharacterCards(characters);
        const characterModals = getCharacterModals(characters);

        characterCardBox.innerHTML = characterCards.join('');
        characterModalBox.innerHTML = characterModals.join('');
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        characterCardBox.innerHTML = '<p class="text-danger">Ошибка при загрузке данных. Пожалуйста, попробуйте позже.</p>';
    }
}
