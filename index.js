let display= "0";
buffer

var display = document.querySelector('.screen');


const number = document.querySelector('.buttons').addEventListener('click', function(event) {
      display.innerText = event.target.innerText;
    });


