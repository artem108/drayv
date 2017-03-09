
  var aboutBtn = document.getElementById('about');
  var uslugiBtn = document.getElementById('uslugi');
  var priceBtn = document.getElementById('price');
 var contactBtn = document.getElementById('contact');
 function scroll() {

    aboutBtn.onclick = function () {
      scrollBy(0, 700);
    };

    uslugiBtn.onclick = function () {
      scrollBy(0, 1000);
    };

    priceBtn.onclick = function () {
      scrollBy(0, 1500);
    };

    contactBtn.onclick = function () {
      scrollBy(0, 1800);
    };

  }
scroll();
