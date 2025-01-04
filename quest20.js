
// 10. **Nested Ternary Operator:**
//     What will the following code print?
//     ```javascript
//     let age = 16;
//     const message = age >= 18
//         ? "Adult"
//         : age >= 12
//         ? "Teenager"
//         : "Child";
//     console.log(message);

      let age = 16;

      age >= 18 && age < 60 ? console.log("Adult") 
      : age >= 12 && age < 18 ? console.log("Teenager") 
      : age < 12 ? console.log("Child")
      : console.log("Age is not defined");
      