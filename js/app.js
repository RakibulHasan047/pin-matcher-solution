function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-number');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnSuccessMessage = document.getElementById('un-success');

    if(typeNumber === currentPin){
        
        pinSuccessMessage.style.display = 'block';
        pinUnSuccessMessage.style.display = 'none';
    }
    else{
        
        pinUnSuccessMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})