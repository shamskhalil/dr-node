const Calculator = require('./calculator');

const myCalc = new Calculator();
myCalc.setMaxListeners(1000);

myCalc.on('addition', (r) => {
    console.log("Sum is >> ", r);
    askCommand();
});

myCalc.on('multiplication', (r) => {
    console.log("Mul is >> ", r);
    askCommand();
})

myCalc.on('subtraction', (r) => {
    console.log("Sub is >> ", r);
    askCommand();
})

myCalc.on('division', (r) => {
    console.log("Div is >> ", r);
    askCommand();
})


async function askCommand() {
    try {
        let inp = await getInput('WHAT DO YOU WANT TO CALCULATE ?', 'Enter [A,a]=add, [M,m]=Mul, [S,s]=Sub [D,d]=Div and [Q,q]=quit');
        switch (inp) {
            case 'A':
                doAdd();
                break;
            case 'M':
                doMul();
                break;
            case 'S':
                doSub();
                break;
            case 'D':
                doDiv();
                break;
            case 'Q':
                console.log('Bye bye!');
                process.exit(0);
            default:
                process.stderr.write('\nYour input is not valid, please try again!\n\n')
                askCommand()
                break;
        }

    } catch (err) {
        console.log(err);
    }

}

async function doAdd() {
    try {
        let a = await getInput('Please enter the first number', '');
        let b = await getInput('Please enter the second number', '');
        a = parseInt(a);
        b = parseInt(b);
        myCalc.add(a, b);
    } catch (err) {
        console.log(err.message);
    }

}

async function doMul() {
    try {
        let a = await getInput('Please enter the first number', '');
        let b = await getInput('Please enter the second number', '');
        a = parseInt(a);
        b = parseInt(b);
        myCalc.multiply(a, b);
    } catch (err) {
        console.log(err.message);

    }
}

async function doSub() {
    try {
        let a = await getInput('Please enter the first number', '');
        let b = await getInput('Please enter the second number', '');
        a = parseInt(a);
        b = parseInt(b);
        myCalc.subtract(a, b);
    } catch (err) {
        console.log(err.message);

    }
}

async function doDiv() {
    try {
        let a = await getInput('Please enter the first number', '');
        let b = await getInput('Please enter the second number', '');
        a = parseInt(a);
        b = parseInt(b);
        myCalc.divide(a, b);
    } catch (err) {
        console.log(err.message);

    }
}

function getInput(title, info) {
    return new Promise((resolve, reject) => {
        console.log(title);
        console.log(info);
        process.stdin.on('data', (data) => {
            let input = data.toString();
            input = input.trim();
            input = input.toUpperCase();
            resolve(input);
        });
        process.stdin.on('error', (data) => {
            reject(data);
        });
    })

}

askCommand();