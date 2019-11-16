/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
        let out = '';
        for (let p in someObj) {
          out += p + ': ' + someObj[p] + '\n';
        }
        console.log(out);
      }