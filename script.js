document.onreadystatechange = function (){
    let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    // console.log(123);
    let number = numberInput.value;
    // console.log(number);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number);
    xhr.onload = function () {
        if (this.status == 200 && number != '') {
            // console.log(this.responseText);
            fact.style.display = 'block';
            factText.innerText = this.responseText;
        }
    }

    xhr.send();
}
};
