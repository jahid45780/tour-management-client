let saveResolve, saveReject;

const myPromise = new Promise((resolve, reject) =>{
    saveResolve = resolve;
    saveReject = reject;
})

myPromise
.then((value) => console.log("resolved",value))
.catch((error) => console.log("rejected",error));

setTimeout(()=>{
  saveResolve("promise resovled");
  saveReject("promise rejected")
},3000)


