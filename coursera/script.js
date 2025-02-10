class Math{

    addition(num1, num2){
        return num1 + num2;
    }

    subtraction(num1, num2){
        return num1 - num2;
    }

    multiplication(num1, num2){
        return num1 * num2;
    }

    division(num1, num2){
        if (num2 == 0) {
            return "Cannot Divide by Zero";
        }
        return num1 / num2;
    }

    squared(num1){
        return num1 ** 2;
    }

    squareroot(num1){
        return num1 ** .5;
    }
}

const math = new Math();

let tests = [math.addition(5, 5), math.subtraction(2, -3), math.multiplication(2, 5), math.division(10, 0), math.division(4, 2), math.squared(5), math.squareroot(121)]
console.log(tests);