// 7. **Find User Type:**
//    Write a script to check the type of user:
//    - Declare `userType = 'admin'`.
//    - Use a `switch-case` statement to print:
//      - `"Admin privileges"` for `"admin"`.
//      - `"Moderator privileges"` for `"moderator"`.
//      - `"User privileges"` for `"user"`.
//      - `"Invalid user type"` otherwise.

        let userType = "admin";

        switch (userType) {
            case 'admin':
                console.log('Admin privileges');
                break;
            case 'moderator' :
                console.log('Moderator privileges');
                break;
            case 'user' :
                console.log('User privileges');
                break;
            default:
                console.log('Invalid user type');
                break;
        }