
// 7. **Switch with Function:**
//    Predict the output:
//    ```javascript
//    function checkAgeGroup(age) {
//        switch (true) {
//            case age >= 60:
//                return "Senior";
//            case age >= 18:
//                return "Adult";
//            default:
//                return "Child";
//        }
//    }
//    console.log(checkAgeGroup(25));
//    ```

      function checkAgeGroup(age) {
        switch (true) {
            case age >= 60:
                return "Senior";
                break;
            case age >= 18 && age < 60:
                return "Adult";
                break;
            
            default:
                return "Child";
                break;
        }
      }
      console.log(checkAgeGroup(25)); // output is Adult
      