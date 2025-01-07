
// 6. **Nested Function Prediction:**
//    What will the following code print?
//    ```javascript
//    function outerFunction(a) {
//        function innerFunction(b) {
//            return a + b;
//        }
//        return innerFunction(10);
//    }
//    console.log(outerFunction(5));
//    ```


function outerFunction(a) {
           function innerFunction(b) {
               return a + b;
           }
           return innerFunction(10);
       }
        console.log(outerFunction(5)); // output is 15