function alertbutton(){
    window.location.href = ""; //nincs funkciója
}

///CHATGPT generált kód
// Fetch JSON data
// app.js

document.addEventListener("DOMContentLoaded", function () {
    fetch('data/goddes-story.json')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        data.cards.forEach(card => {
          if (card.HasImage === 'YES') {
            const cardElement = document.createElement('img');
            cardElement.referrerPolicy="noreferrer";
            cardElement.src = card.ImageUrl;
            cardElement.alt = card.CharacterName;
            cardElement.classList.add('card');
            cardContainer.appendChild(cardElement);
          }
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });

///ideáig