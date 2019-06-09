function doTask(name) {
    const p = new Promise((resolve, reject) => {
      console.log(`${name} has started`);
      const duration =   Math.floor(Math.random() * 5000);
      setTimeout(() => {
        resolve(`${name} has ended after ${duration} milliseconds`);
      }, duration);
    });
    return p;
}

Promise
.all([
    doTask('A'),
    doTask('B'),
    doTask('C')
])
.then(results => {
    //first console.log the results
    results.forEach(result => console.log(result));
    return doTask('D');
})
.then(result => {
    console.log(result);
});

doTask('E')
  .then(result => {
    console.log(result);
});

doTask('F')
  .then(result => {
    console.log(result);
});

/**
doTask('A');
doTask('B');
doTask('C');
doTask('D');
doTask('E');
doTask('F');


const p1 = new Promise((resolve, reject) => {
    console.log('Running the asynchronous code here');
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
        console.log('About to fail');
        reject('Error 42: Life has no meaning'); //fail!
    }, duration);
});

p1.then(value => {
    console.log('The promise completed successfully with this value:');
    console.log(value);
}).catch(err => {
    console.log('The promise has failed with this message:');
    console.log(err);
});
**/