// import {Promise} from 'es6-promise'

const promise = new Promise((resolve, reject) => {
   resolve(123);
});

promise.then((res)=>{
    console.log("I Get called", res == 123);
});

promise.catch((err)=>{
    console.log("it's false");
});