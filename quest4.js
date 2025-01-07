
// 4. **Combine with Variables:**
//    Write a function `getFullName` that:
//    - Takes `firstName` and `lastName` as arguments.
//    - Returns the full name using a template literal.
//    Declare `const fullName = getFullName('Yash', 'Priyam')` and print `fullName`.

     const getFullName = (firstName, lastName) => {
        return firstName + " " +  lastName;
     }
     const fullName = getFullName('Arvind', 'Devda')
     console.log({fullName});
     