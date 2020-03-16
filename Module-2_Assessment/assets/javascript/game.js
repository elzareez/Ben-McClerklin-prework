var keyPress = function(){
    console.log(event.key);
    let keyPush = [];
    keyPush.push(event.key);
    document.querySelector('#lettersGuessed').innerText = keyPush;

}
 //Getting references to the DOM elements
let keyPush = document.querySelector('#lettersGuessed')
document.addEventListener('keyup', keyPress)
