
// 9. **Array with Functions:**
//    Write a function `getVegOrNonVeg` that:
//    - Takes a boolean `isVegetarian` as input.
//    - Returns:
//      - An array of vegetarian items if `isVegetarian` is `true`.
//      - An array of non-vegetarian items otherwise.
//    Call the function with `true` and print the result.


     function getVegOrNonVeg(isVegetarian) {
        const vegetarianItems= ['Dal, Aloo, Paneer']
        const nonVegetarianItems = ["Fish, Chicken"]
        return getVegOrNonVeg ? vegetarianItems : nonVegetarianItems;
     }

     const vegetarianItems = getVegOrNonVeg(true)
     console.log(vegetarianItems);
     
