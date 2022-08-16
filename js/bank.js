const email = document.getElementById('Email');
const mail = console.log(email.innerText);

const password = document.getElementById('Password');
const pass = console.log(password.innerText);

document.getElementById('btn').addEventListener('click', function(){
    if(mail ==='admin@gmail.com' && pass === 'baperBank01'){
        location.href = 'bank.html';
    }
    else{
        location.href = 'index.html/#exampleModal';
    }
})