

let textEditor = document.querySelector('#text-editor');
let stack = [];

//Do i need this?? Don't think so, focusing on space/enter events.
// textEditor.addEventListener('paste', (event) => {
//   let pastedText = event.target.textContent;
//   // prevent normal input on paste
//   event.preventDefault();
//   console.log(pastedText, 'pasted');
// });

textEditor.addEventListener('keydown', (event) => {
  console.log(event);
  if(event.keyCode === 32 || event.keyCode === 13 || checkTime(event.timeStamp)){
    let typedText = event.target.innerText;
    console.log(checkPalindrome(typedText));
    stack.push(typedText);
  };
});

function checkTime(timeStamp) {
  console.log(timeStamp)
  return false
}

function checkPalindrome(text){
    let n = Math.floor(text.length / 2);
    let length = text.length;
    if(length == 0) return;
    if(length == 1){
      //always a palindrome
      return true;
    }
    let letters, i;

    for(i = 0; i < n; i++){
        if(text[i] === text[length - 1 - i]) {
            continue;
        } else {
          return false;
        }
    }
    return true;
}
