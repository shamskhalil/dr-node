const fs = require('fs');
const { promisify } = require('util');

const createfilePromisify = promisify(fs.writeFile);

function createFile(fn, cont) {
    fs.writeFile(fn, cont, (err) => {
        if (err) {
            console.log('Error creating file >> ', err.message);
        } else {
            console.log(`File ${fn} created successfully!`);
        }
    })
}

function createFilePromise(fn, cont) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fn, cont, (err) => {
            if (err) {
                console.log('Error creating file >> ', err.message);
                reject(err.message);
            } else {
                console.log(`File ${fn} created successfully!`);
                resolve(`File ${fn} created successfully!`);
            }
        });
    });
}

//createFile('shams1.txt', 'hello world');
//createFile('shams2.txt', 'hello world');
//createFile('shams3.txt', 'hello world');
//createFile('shams4.txt', 'hello world');

/*
createFilePromise('shams1.txt', 'hello world')
    .then(d => {
        createFilePromise('shams2.txt', 'hello world')
            .then(d => {
                createFilePromise('shams3.txt', 'hello world')
                    .then(d => {
                        createFilePromise('shams4.txt', 'hello world')
                            .then(d => {
                                console.log('Done!');
                            });
                    });
            });
    }).catch(err => console.log(err));
    */
/*
async function doAsyncAwait() {
    try {
        await createFilePromise('shams1.txt', 'hello world')
        await createFilePromise('shams2.txt', 'hello world')
        await createFilePromise('shams3.txt', 'hello world')
        await createFilePromise('shams4.txt', 'hello world')
    } catch (err) {
        console.log(err);
    }
}

doAsyncAwait();
*/

/*
async function doAsyncAwaitPromisify() {
    try {
        await createfilePromisify('shams1.txt', 'hello world')
        await createfilePromisify('shams2.txt', 'hello world')
        await createfilePromisify('shams3.txt', 'hello world')
        await createfilePromisify('shams4.txt', 'hello world')
    } catch (err) {
        console.log(err);
    }
}

doAsyncAwaitPromisify();
*/

function doAll() {
    const promiseArray = [
        createFilePromise('shams1.txt', 'hello world'),
        createFilePromise('shams2.txt', 'hello world'),
        createFilePromise('shams3.txt', 'hello world'),
        createFilePromise('shams4.txt', 'hello world')
    ];
    Promise.race(promiseArray)
        .then((d) => {
            console.log(d);
        })
        .catch(err => console.log(err));
}

doAll();