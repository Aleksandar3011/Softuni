function math(num1, num2, operator){
    let result;
    if(operator == `+`){
        result = num1 + num2;
    }else if(operator == `-`){
        result = num1 - num2;
    }else if(operator == `*`){
        result = num1 * num2;
    }else if(operator == `/`){
        result = num1 / num2;
    }else if(operator == `%`){
        result = num1 % num2;
    }else if(operator == `**`){
        result = num1 ** num2;
    }
    console.log(result);
}

math(5, 6, '+');