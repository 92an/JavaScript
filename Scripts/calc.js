function Calculator() {
    this.value = 0;
}

Calculator.prototype.add = function(number){
    if(typeof(number) == "number"){
        this.value += number;
    } else {
        alert("Error!");
    }
}


/* this function does simple addition 2 numbers */

function addition(a, b){
    if(typeof(a) == "number" && typeof(b) == "number"){
    let result = a + b;
    return result;
    } else {
        alert("Error!")
    }
}


/* Drinking code age check */
function whatCanIDrink(age){
    if(typeof(age) == "number"){
        if(age < 0){
            let message = "Sorry. I can’t tell what drink because that age is incorrect!";
            return message;
        } else if(age < 14) {
            let message = "Drink Toddy";
            return message;
        } else if(age < 18) {
            let message = "Drink Coke";
            return message;
        } else if(age < 21) {
            let message = "Drink Beer";
            return message;
        } else if(age < 130) {
            let message = "Drink Wiskey";
            return message;
        } else {
            let message = "Sorry. I can’t tell what drink because that age is incorrect!";
            return message;
        }
    } else {
        alert("Error: please enter a valid age");
    }
}

/* FizzBuzz code */

function fizzBuzz(number){
    if(typeof(number) == "number"){
        for(var i = 1; i <= number; i++){
            var message = "";
            if(i % 3 == 0){message += "Fizz";}
            if(i % 5 == 0){message += "Buzz";}
            if(message == ""){message = i;}
            console.log(message);
        }
    } else {
        alert("Need to input a number!")
    }
}

