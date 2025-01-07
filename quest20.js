
// 10. **Analyze Variable Scope:**
//     What will the following code print?
//     ```javascript
//     function testScope() {
//         let x = 10;
//         if (x > 5) {
//             let y = x + 5;
//         }
//         return y;
//     }
//     console.log(testScope());
//     ```

function testScope() {
            let x = 10;
            if (x > 5) {
                return  x + 5;
                
            } 
                return 'y';
            }
            
        
        console.log(testScope()); // output is 15
