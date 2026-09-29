// Problem 1: Count Positive Numbers

/*
Given an array of numbers,
count karo ki usme kitne positive numbers hain.

Example:
nums = [-2, 5, 0, 8, -1, 4]

Output:
3

Positive numbers:
5, 8, 4
*/

function countPositive(nums: number[]): number {
    let count:number = 0;
    for (const num of nums) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
console.log(countPositive([-2,5,0,8,-1,4]));

/*
Dry Run:
nums = [-2, 5, 0, 8, -1, 4]

Start:
count = 0

num = -2 → 0
num = 5  → 1
num = 0  → 1
num = 8  → 2
num = -1 → 2
num = 4  → 3

Final count = 3

Time Complexity: O(n)
Space Complexity:O(1)
*/



// Problem 2: Sum of Positive Numbers

/*
Given an array of numbers,
sirf positive numbers ka total return karo.

Example:
nums = [-2, 5, 0, 8, -1, 4]

Output:
17

Positive numbers:
5 + 8 + 4 = 17
*/

function sumPositive(nums: number[]): number {
    let sum = 0;
    for (const num of nums) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumPositive([-2,5,0,8,-1,4]));

/*
Dry Run:
nums = [-2, 5, 0, 8, -1, 4]

Start:
sum = 0

num = -2 → 0
num = 5  → 5
num = 0  → 5
num = 8  → 13
num = -1 → 13
num = 4  → 17

Final sum = 17

Time Complexity: O(n)
Space Complexity: O(1)
*/