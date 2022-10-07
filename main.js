/* You need to fill in the proper sections of the for loop to iterate the rawIngredients array.

If the current ingredient is "egg", then add "biscuit" to the finished foods array
If the current ingredient is "beef patty", then add "burger" to the finished foods array
If the current ingredient is "potato", then add "fries" to the finished foods array
Don't be shy about looking at the code in your last exercise to help out with this one. */

const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
    if (ingredient === "egg") {
        finishedFood.push("biscuit")
    } else if (ingredient === "beef patty") {
        finishedFood.push("burger")
    } else if (ingredient === "potato") {
        finishedFood.push("fries")
    }
}

console.log(finishedFood)