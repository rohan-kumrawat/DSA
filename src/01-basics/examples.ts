// #1 Counter Example

function countEven(nums: number[]): number {
    let count = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEven([2,5,8,9,12]));

/*
nums = [2, 5, 8, 9, 12]

Start: count = 0

num = 2  → even → count =1
num = 5  → odd  → count = 1
num = 8  → even → count = 2
num = 9  → odd  → count = 2
num = 12 → even → count = 3

Final count = 3

Time complexity = O(n)
Space complexity = O(1)
*/

// 2. Accumulator Example

function calculateTotal(nums: number[]): number {
    let sum = 0;

    for (const num of nums) {
        sum = sum + num;
    }

    return sum;
}

console.log(calculateTotal([10, 20, 30, 40]));

/*
nums = [10, 20, 30, 40]

Start:
sum = 0

num = 10 → sum = 10
num = 20 → sum = 30
num = 30 → sum = 60
num = 40 → sum = 100

Final sum = 100

Time Complexity = O(n)
Space Complexity = O(1)
 */