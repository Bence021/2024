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

            //belső container
            const innerContainer = document.createElement('div');
            cardContainer.appendChild(innerContainer);

            //belső-fejléc container
            const headerContainer = document.createElement('div');
            headerContainer.classList.add('header-container');
            innerContainer.appendChild(headerContainer);


            //név
            const cardName = document.createElement('div');
            const Name = document.createTextNode(card.CharacterName); 
            cardName.classList.add('name');
            cardName.appendChild(Name);
            headerContainer.appendChild(cardName);

            cardName.addEventListener('mouseover', function() {
              cardName.style.overflow = 'visible';
              cardName.style.whiteSpace = 'normal';
            });
          
            cardName.addEventListener('mouseout', function() {
              cardName.style.overflow = 'hidden';
              cardName.style.whiteSpace = 'nowrap';
            });
            


            //ritkaság
            const cardRarity = document.createElement('div');
            const Rarity = document.createTextNode(card.Rarity);
            cardRarity.classList.add('rarity');
            cardRarity.appendChild(Rarity);
            headerContainer.appendChild(cardRarity);
            

            //cím
            const cardSeries = document.createElement('div');
            const Series = document.createTextNode(card.SeriesName);
            cardSeries.classList.add('series-name');
            cardSeries.appendChild(Series);
            innerContainer.appendChild(cardSeries);

            cardSeries.addEventListener('mouseover', function() {
              cardSeries.style.overflow = 'visible';
              cardSeries.style.whiteSpace = 'normal';
            });
          
            cardSeries.addEventListener('mouseout', function() {
              cardSeries.style.overflow = 'hidden';
              cardSeries.style.whiteSpace = 'nowrap';
            });


            //kép
            const cardImage = document.createElement('img');       
            cardImage.referrerPolicy="noreferrer";
            cardImage.src = card.ImageUrl;
            cardImage.alt = card.CharacterName;
            cardImage.classList.add('image');
            innerContainer.appendChild(cardImage);
            

          }
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });

///ideáig