const Calculator = require('./calculator');

const myCalc = new Calculator();

myCalc.on('addition', (r) => {
    console.log("Sum is >> ", r);
    askCommand();
});


async function askCommand() {
    try {
        let inp = await getInput('WHAT DO YOU WANT TO CALCULATE ?', 'Enter [A,a]=add, [M,m]=Mul, [S,s]=Sub [D,d]=Div and [Q,q]=quit');
        switch (inp) {
            case 'A':
                doAdd();
                break;

            case 'Q':
                console.log('Bye bye!');
                process.exit(0);
            default:
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
        console.log(err);
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