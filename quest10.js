
// 10. **Nested Functions:**
//     Write a function `performMath` that:
//     - Takes two numbers as arguments.
//     - Has a nested function `sum` to calculate the sum.
//     - Returns the sum of the two numbers.
//     Call the outer function with `12` and `8` and print the result.


      function performMath(x, y) {
        
        function sum(a, b) {
            return a + b;
        }
        return x + y;
      }
       
      const outerFunction = performMath(12,8)
      console.log({outerFunction});
      
