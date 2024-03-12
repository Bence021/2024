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

            const innerContainer = document.createElement('div');
            cardContainer.appendChild(innerContainer);
            
            /*const cardSeries = document.createElementById('cardSeries');
            const cardRarity = document.createElementById('cardRarity');*/

            const cardName = document.createElement('div');
            const Name = document.createTextNode(card.CharacterName); 
            cardName.classList.add('name');
            cardName.appendChild(Name);
            innerContainer.appendChild(cardName);

            
            /*cardSeries.textContent = card.CharacterName;
            cardSeries.classList.add('card');
            //innerContainer.appendChild(cardSeries);

            
            cardRarity.textContent = card.CharacterName;
            cardRarity.classList.add('card');
            //innerContainer.appendChild(cardRarity);*/

            const cardImage = document.createElement('img');       
            cardImage.referrerPolicy="noreferrer";
            cardImage.src = card.ImageUrl;
            cardImage.alt = card.CharacterName;
            cardImage.classList.add('card');
            innerContainer.appendChild(cardImage);

          }
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });

///ideáig