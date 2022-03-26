let number = document.querySelectorAll('.number');
let inputs = document.getElementById('input');
let operators = document.querySelectorAll('.operator');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let oldinput = document.getElementById('oldinput');

let oldnumber = 0;


//Display each click of number
number.forEach(click =>{
    click.addEventListener('click',() =>{
        let numInput =  click.innerText; 
        inputs.innerText += numInput;
      
    })
})


//Operators 
let operator;
operators.forEach(clicked => {
    clicked.addEventListener('click',()=>{
        // switch
      operator = clicked.innerText;

      oldnumber = inputs.innerText;
        switch(operator){
            case '+':
                oldinput.innerText = `${oldnumber}  ${operator} `;
                inputs.innerText="";
                break;
            case '*':
                oldinput.innerText = `${oldnumber}  ${operator}  `;
                inputs.innerText="";
                break;
            case '-':
                oldinput.innerText = `${oldnumber}  ${operator}  `;
                inputs.innerText="";
                break;
            case '/':
                oldinput.innerText = `${oldnumber}  ${operator}  `;
                inputs.innerText="";
                break;
        }
    })
})

//Equals 
equal.addEventListener('click',() =>{
    let total = 0;
    oldinput.innerText += inputs.innerText + equal.innerText ;
    switch(operator){
        case '+':
            total = parseInt(oldnumber) + parseInt(inputs.innerText);
            inputs.innerText =  total;
            break;
        case '*':
            total = parseInt(oldnumber) * parseInt(inputs.innerText);
            inputs.innerText =  total;
           
            break;
        case '-':
            total = parseInt(oldnumber) - parseInt(inputs.innerText);
            inputs.innerText = total;
            break;
        case '/':
            total = parseInt(oldnumber) / parseInt(inputs.innerText);
            inputs.innerText = total;
            break;
    }
})
//CLEAR
clear.addEventListener('click',()=>{
        inputs.innerText = ""
        oldinput.innerText =""
        oldnumber = 0;
        total = 0;

})
