// 3. **Big Numbers:**
//    Write a script to declare two numbers:
//    - `safeNumber` = `Number.MAX_SAFE_INTEGER`.
//    - `unsafeNumber` = `9007199254740995`.  
//    Print both values.
// ---

   
     const safeNumber = Number.MAX_SAFE_INTEGER
     console.log(safeNumber); // 9007199254740991

     const unsafeNumber = BigInt(9007199254740995)
     console.log(unsafeNumber);
     
     