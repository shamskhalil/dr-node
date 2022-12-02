const Calculator = require('./calculator');

const myCalc = new Calculator();






async function askCommand() {
    try {
        let inp = await getInput('WHAT DO YOU WANT TO CALCULATE ?', 'Enter [A,a]=add, [M,m]=Mul, [S,s]=Sub [D,d]=Div and [Q,q]=quit');
        console.log('Got >> ', inp);

    } catch (err) {
        console.log(err);
    }

}

function doAdd(){
    g
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