
// login form js 
document.getElementById('btn').addEventListener('click', function(){

    const email = document.getElementById('Email');
    const mail = email.value;

    const password = document.getElementById('Password');
    const pass = password.value;

    if(mail ==='admin@gmail.com' && pass === 'baperBank01'){
        location.href = 'bank.html'
    }
    else{
        alert('your given information is wrong please input correct info and then try again')
    }
})