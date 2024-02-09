function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile"); 
   
}


function searchSymbols() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var symbols = document.querySelectorAll('.col');
    var resultsContainer = document.getElementById('searchResults');

    var resultsFound = false;

    symbols.forEach(function(symbol) {
        var title = symbol.querySelector('h4').innerText.toLowerCase();
        var description = symbol.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            symbol.style.display = 'flex';
            resultsFound = true;
        } else {
            symbol.style.display = 'none';
        }
    });

      if (!searchTerm) {
        document.getElementById("searchResults").innerText = "לא הוזן טקסט";
        return;
    }

    symbols.forEach(function (symbol) {
        var title = symbol.querySelector('h4').innerText.toLowerCase();
        var description = symbol.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            symbol.style.display = 'flex';
        } else {
            symbol.style.display = 'none';
        }
    });

    if (!resultsFound) {
        resultsContainer.innerText = 'לא נמצאו תוצאות';
    } else {
        resultsContainer.innerText = '';
    }

    document.getElementById("main-nav").classList.remove("hide-mobile");

}

document.addEventListener("DOMContentLoaded", function () {
    const ctnButton = document.querySelector('.ctn');
    const searchSection = document.querySelector('section');

    ctnButton.addEventListener('click', function () {
        searchSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contactBtn");
    const contactPopup = document.getElementById("contactPopup");
    const closePopupBtn = document.getElementById("closePopup");
  
    contactBtn.addEventListener("click", function() {
      contactPopup.style.display = "block";
    });
  
    closePopupBtn.addEventListener("click", function() {
      contactPopup.style.display = "none";
    });
  });







