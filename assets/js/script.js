const locText = document.querySelector('.loc-text span');
const localizationCard = document.getElementById('localization');
const englishItem = document.getElementById('english');
const dutchItem = document.getElementById('dutch');
const chineseItem = document.getElementById('chinese');

function removeActiveClass() {
    englishItem.classList.remove('active');
    dutchItem.classList.remove('active');
    chineseItem.classList.remove('active');
}

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const cardTop = localizationCard.getBoundingClientRect().top + window.scrollY - 200;

    if (scrollPosition >= cardTop && scrollPosition < cardTop + 100) {
        locText.textContent = "The internet is your canvas.";
        removeActiveClass();
        englishItem.classList.add('active'); // Set active for Chinese
    } else if (scrollPosition >= cardTop && scrollPosition < cardTop + 200) {
        locText.textContent = "网络是你的画板。";
        removeActiveClass();
        chineseItem.classList.add('active'); // Set active for Chinese
    } else if (scrollPosition >= cardTop + 300) {
        locText.textContent = "Het internet is jouw canvas.";
        removeActiveClass();
        dutchItem.classList.add('active'); // Set active for Chinese
    }
});



// const homeWrapper = document.querySelector('.made-images-wrapper');
// const belowShadow = document.querySelector('.made-images-wrapper');

// window.addEventListener('scroll', function () {
//     const scrollPosi = window.scrollY;
//     const homeWrapperTop = homeWrapper.getBoundingClientRect().top + window.scrollY - 400;

//     // Check if the scroll position is within a range
//     if (scrollPosi >= homeWrapperTop && scrollPosi < homeWrapperTop + 100) {
//         // this.alert("hello")
//         belowShadow.classList.add('fade-scale-out'); // Fade out below-shadow
//         belowShadow.classList.remove('fade-scale-in'); // Show below-shadow
//     } 
//     else if (scrollPosi >= homeWrapperTop + 200) {
//         belowShadow.classList.add('fade-scale-out1'); // Fade out below-shadow
//     }
//     else if (scrollPosi >= homeWrapperTop + 300) {
//         belowShadow.classList.add('fade-scale-out2'); // Fade out below-shadow
//     }
// });


window.addEventListener('scroll', function() {
    var shadow = document.getElementById('hshadow');
    var shadow1 = document.getElementById('hshadow1');
    var shadow2 = document.getElementById('hshadow2');
    var scrollPosition = window.scrollY;
  
    // Add 'fixed' class if scrolled down, remove if scrolled up
    if (scrollPosition > 100) {
      shadow.classList.add('fade-out-ss');
      shadow1.classList.add('fade-out-ss');
      shadow2.classList.add('fade-out-ss');
      shadow.classList.remove('fade-in-ss');
      shadow1.classList.remove('fade-in-ss');
      shadow2.classList.remove('fade-in-ss');
    } else {
      shadow.classList.remove('fade-out-ss');
      shadow1.classList.remove('fade-out-ss');
      shadow2.classList.remove('fade-out-ss');
      shadow.classList.add('fade-in-ss');
      shadow1.classList.add('fade-in-ss');
      shadow2.classList.add('fade-in-ss');
    }
  });