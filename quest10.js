// 10. **Symbol Comparison:**
//     Write code to:
//     - Declare two symbols with the same description (`"key"`).  
//     - Compare them using `===` and print the result.

       const symbol1 = Symbol(2);
       const symbol2 = Symbol(2);
       
       console.log(symbol1 === symbol2 ); // false
       