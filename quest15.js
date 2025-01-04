// 5. **Switch-Case Output:**
//    Predict the output of the following code:
//    ```javascript
//    let day = "Sunday";
//    switch (day) {
//        case "Saturday":
//        case "Sunday":
//            console.log("It's the weekend!");
//            break;
//        default:
//            console.log("It's a weekday.");
//    }

    let day = "Sunday";

    switch (day) {
        case 'Saturday':
        case 'Sunday' :
            console.log("It's the weekend!");          
            break;
    
        default:
            console.log("It's the weekday");
            break;
    } // It's the weekend