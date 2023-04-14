const button = document.querySelector('button');
const text = document.getElementById('password');

button.addEventListener('click', function() {

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    
    for (var i = 0; i <= passwordLength; i++) {
        
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        
    }
    
    text.innerText = password;
    
});

const copy = document.querySelector('.material-symbols-outlined');

copy.addEventListener('click', function() {

    if (!copy.innerHTML) {
        alert('Please Generate A Password First!');
    } else {
        var copyText = text.innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = copyText;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    
        alert('Copied To Clipboard!');
        
    }
    
});
