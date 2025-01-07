
// 6. **Switch Case with Breaks:**
//    Write a script where:
//    - Declare `day = 'Monday'`.
//    - Use `switch-case` with `break` to print:
//      - `"Start of the workweek"` for `"Monday"`.
//      - `"Midweek"` for `"Wednesday"`.
//      - `"Weekend"` for `"Saturday"` and `"Sunday"`.
//      - `"Not a valid day"` otherwise.
        
         let day = "Monday";

        switch (day) {
            case 'Monday':
                console.log("Start of the workweek");
                break;
            case 'Wednesday' :
                console.log("Midweek");
                break;
            case 'Satutrday':
            case 'Sunday': 
                console.log("Weekend");
                break;                
            default:
                console.log("Not a valid day");
                break;
        }