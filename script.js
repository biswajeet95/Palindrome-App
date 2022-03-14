var text = document.getElementById("text");
var userInput = document.getElementById("userInput");
var isPalindrome = document.getElementById("isPalindrome");


function checkPalindrome(){
    var regularExpression = /[\W_]/g;
    var lowerRegValue = text.value.toLowerCase().replace(regularExpression,'');
    var reverseValue = lowerRegValue.split('').reverse().join('');

   
 

    if(reverseValue === lowerRegValue){
        if(text.value != ''){
          isPalindrome.classList.remove('false');
        isPalindrome.classList.add('true');
        isPalindrome.innerHTML = 'isPalindrome';
        userInput.innerHTML = text.value;   
        }else{
            userInput.innerHTML = '';
            isPalindrome.classList.remove('true','false');
            isPalindrome.innerHTML = 'Enter a word which read backward';
        }
       
    }else{
        isPalindrome.classList.remove('true');
        isPalindrome.classList.add('false');
        isPalindrome.innerHTML = 'is not Palindrome';
        userInput.innerHTML = text.value; 
    }
}

document
.querySelector("#text")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    checkPalindrome();
  }
});