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

        //Get the value of the clicked operator
        operator = clicked.innerText;

        //Pass the value of the First input
        oldnumber = inputs.innerText;

        switch(operator){

            //For Readability
            //Pass the oldnumber value again into another html tag called above 'oldinput' 
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

//Equals Button
// Used ParseInt() to convert the string, because the default value of innerText is a String. 
//Example
//console.log(typeof(inputs.innerText));
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
//Set all variables to 0 or Empty
clear.addEventListener('click',()=>{
        inputs.innerText = ""
        oldinput.innerText =""
        oldnumber = 0;
        total = 0;

})
