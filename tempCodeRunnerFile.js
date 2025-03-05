function AsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  function main() {
    AsyncFunction().then(function(value) {
        console.log(value);
    });
  }
  
  main();