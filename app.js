function alertbutton(){
    window.location.href = ""; //nincs funkciója
}

///CARD betöltése
// Fetch JSON data
// app.js

var setTitle = 'asd';
/*
document.addEventListener("DOMContentLoaded", function () {
  
  fetch('data/goddes-story.json')
    .then(response => response.json())
    .then(data => {
        
        const cardContainer = document.getElementById('cardContainer');
        
        const setFullName = document.createElement('span');
        setFullName.innerText= "Goddes Story";
        setFullName.classList.add('set-fullname');
        cardContainer.appendChild(setFullName);

        data.cards.forEach(card => {

          if (setTitle !== card.SetNumber){

            setTitle = card.SetNumber;

            //setTitle Container
            const setTitleContainer = document.createElement('div');
            setTitleContainer.classList.add('set-title');
            cardContainer.appendChild(setTitleContainer);

            const Title = document.createElement('div');
            Title.innerText = setTitle;
            Title.classList.add('title-text');
            setTitleContainer.appendChild(Title);

            var toggleButton = document.createElement("button");
            toggleButton.type = "button";
            toggleButton.className = "btn btn-primary btn-toggle";
            toggleButton.setAttribute("data-toggle", "button");
            toggleButton.setAttribute("aria-pressed", "false");
            toggleButton.setAttribute("autocomplete", "off");
            toggleButton.innerText = "=>";
            toggleButton.dataset.b_setNumber = setTitle;
            toggleButton.classList.add('collapse-button');
            setTitleContainer.appendChild(toggleButton);

          }

          //cards
          
          //belső container
            const innerContainer = document.createElement('div');
            innerContainer.dataset.setNumber = setTitle;
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
            

        });

        // Eseménykezelő hozzáadása a gombhoz
        const toggleButtons = document.querySelectorAll('.collapse-button');
        toggleButtons.forEach(button => {
            button.addEventListener("click", function () {
                const setTitle = this.dataset.b_setNumber;
                const innerContainers = document.querySelectorAll(`[data-set-number="${setTitle}"]`);
                innerContainers.forEach(container => {
                    if (container.dataset.setNumber === setTitle) {
                        container.classList.toggle('collapsed');
                        if (container.classList.contains('collapsed')) {
                            container.style.height = '0'; // Összecsukott állapotban a magasság nullára állítása
                        } else {
                            container.style.height = 'auto'; // Kinyitott állapotban az eredeti magasság visszaállítása
                        }
                    }
                });
            });
        });
        
        // Összes konténer összecsukása az oldal betöltődésekor
        const innerContainers = document.querySelectorAll('[data-set-number]');
        innerContainers.forEach(container => {
            container.classList.add('collapsed');
            container.style.height = '0';
        });

        // Összes gomb megnyomása az oldal betöltődésekor
        const toggleButtonss = document.querySelectorAll('.collapse-button');
        toggleButtonss.forEach(button => {
            button.setAttribute('aria-pressed', 'true');
        });

    })
    .catch(error => console.error('Error loading JSON:', error));

});
*/

document.addEventListener("DOMContentLoaded", function () {

  loadJSON('data/goddes-story.json', 'Goddes Story', 'cardContainer');
  loadJSON('data/senpai-goddess-haven.json', 'Senpai Goddess Haven', 'cardContainer');

  function loadJSON(jsonFile, title, containerId) {
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
          
          const cardContainer = document.getElementById(containerId);
          

          //setTitle Container
          const fullNameContainer = document.createElement('div');
          fullNameContainer.classList.add('set-fullname');
          cardContainer.appendChild(fullNameContainer);

          const setFullName = document.createElement('span');
          setFullName.innerText = title;
          setFullName.classList.add('fullname');
          fullNameContainer.appendChild(setFullName);

        data.cards.forEach(card => {

          if (setTitle !== card.SetNumber){

            setTitle = card.SetNumber;

            //setTitle Container
            const setTitleContainer = document.createElement('div');
            setTitleContainer.classList.add('set-title');
            cardContainer.appendChild(setTitleContainer);

            const Title = document.createElement('div');
            Title.innerText = setTitle;
            Title.classList.add('title-text');
            setTitleContainer.appendChild(Title);

            var toggleButton = document.createElement("button");
            toggleButton.type = "button";
            toggleButton.className = "btn btn-primary btn-toggle";
            toggleButton.setAttribute("data-toggle", "button");
            toggleButton.setAttribute("aria-pressed", "false");
            toggleButton.setAttribute("autocomplete", "off");
            toggleButton.innerText = "=>";
            toggleButton.dataset.b_setNumber = setTitle;
            toggleButton.classList.add('collapse-button');
            setTitleContainer.appendChild(toggleButton);

          }

          //cards
          
          //belső container
            const innerContainer = document.createElement('div');
            innerContainer.dataset.setNumber = setTitle;
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
            

        });

          
          
          // Összes konténer összecsukása az oldal betöltődésekor
          const innerContainers = document.querySelectorAll('[data-set-number]');
          innerContainers.forEach(container => {
              container.classList.add('collapsed');
              container.style.height = '0';
          });

          // Összes gomb megnyomása az oldal betöltődésekor
          toggleButtons.forEach(button => {
              button.setAttribute('aria-pressed', 'true');
          });

      })
      .catch(error => console.error(`Error loading ${title} JSON:`, error));
  }

  /*// régi Eseménykezelő hozzáadása a gombhoz
  const toggleButtons = document.querySelectorAll('.collapse-button');
  toggleButtons.forEach(button => {
      button.addEventListener("click", function () {
          const setTitle = this.dataset.b_setNumber;
          const innerContainers = document.querySelectorAll(`[data-set-number="${setTitle}"]`);
          innerContainers.forEach(container => {
              if (container.dataset.setNumber === setTitle) {
                  container.classList.toggle('collapsed');
                  if (container.classList.contains('collapsed')) {
                      container.style.height = '0'; // Összecsukott állapotban a magasság nullára állítása
                  } else {
                      container.style.height = 'auto'; // Kinyitott állapotban az eredeti magasság visszaállítása
                  }
              }
          });
      });
  });*/

  // Eseménykezelő hozzáadása a gombokhoz a megfelelő helyen
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('collapse-button')) {
      const setTitle = target.dataset.b_setNumber;
      const innerContainers = document.querySelectorAll(`[data-set-number="${setTitle}"]`);
      innerContainers.forEach(container => {
        if (container.dataset.setNumber === setTitle) {
          container.classList.toggle('collapsed');
          if (container.classList.contains('collapsed')) {
            container.style.height = '0'; // Összecsukott állapotban a magasság nullára állítása
          } else {
            container.style.height = 'auto'; // Kinyitott állapotban az eredeti magasság visszaállítása
          }
        }
      });
    }
  });

  
});



///ideáig