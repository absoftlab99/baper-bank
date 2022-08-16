
// calculation
document.getElementById('button').addEventListener('click', function(){
    const dipositField = document.getElementById('diposit-field');
    const dipositAmmount = dipositField.value;
    const a = parseFloat(dipositAmmount);
    
    const currentDiposit = document.getElementById('diposit');
    const oldDipositAmmount = currentDiposit.innerText;
    const ammount = parseFloat(oldDipositAmmount);

    const totalBalance = document.getElementById('total-balance');
    const balanceCheck = totalBalance.innerText;
    const balance = parseFloat(balanceCheck);

    if(a >= 0){
    const totalDiposit = ammount + a;
    currentDiposit.innerText = totalDiposit;
    
    const totalMoney = balance + a;
    totalBalance.innerText = totalMoney;
    
    dipositField.value = ''; 
    }
    else{
        alert('Please input a number')
    }   
})


document.getElementById('withdrow-btn').addEventListener('click', function(){
    
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowAmmount = withdrowField.value;
    const totalWithdrow = parseFloat(withdrowAmmount);

    const currentWithdrow = document.getElementById('total-expance');
    const expance = currentWithdrow.innerText;
    const expanceAmmount = parseFloat(expance);

    const totalBalance = document.getElementById('total-balance');
    const balanceCheck = totalBalance.innerText;
    const balance = parseFloat(balanceCheck);

// totoal expance 

    if(totalWithdrow >= 0){
        const totalExpance = expanceAmmount + totalWithdrow;
        currentWithdrow.innerText = totalExpance;
        withdrowField.value = '';
    }
    else{
        alert('Please input a number');
    }  

    if(totalWithdrow < balance){
        const totalBal = balance - totalWithdrow;
        totalBalance.innerText = totalBal;
    } 
    else{
        alert('Not enough balance!');
    }

    
})