let usernameInput = document.getElementById('usernameInput');
let name = document.getElementById('name');
let submitText = document.getElementById('submitText')
let textBox = document.getElementById('textBox');
let fakeBox = document.getElementById('fakeBox');

name.style.display = "block"
usernameInput.style.display = "block"
submitText.style.display = "block"
resetText.style.display = "none"
textBox.style.display = "none"
fakeBox.style.display = "none"

function submit() {
    if(usernameInput.value == "Aina"){
        name.style.display = "none"
        usernameInput.style.display = "none"
        submitText.style.display = "none"
        textBox.style.display = "block"
        resetText.style.display = "block"
    }else {
        fakeBox.style.display = "block"
        name.style.display = "none"
        usernameInput.style.display = "none"
        submitText.style.display = "none"
        resetText.style.display = "block"
    }
}

function reset() {
    location.reload();
}