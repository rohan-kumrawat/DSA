/**
 * 01-BASICS — PRACTICE PROBLEMS
 *
 * Har problem me:
 * 1. Pehle khud logic socho
 * 2. Dry run likho
 * 3. Time Complexity likho
 * 4. Space Complexity likho
 * 5. Edge cases socho
 */

// ==================================================
// Problem 1: Count Negative Numbers
// ==================================================

/*
Example:
[-2, 5, -8, 0, 3, -1]

Output:
3

Concept:
Counter
*/

function countNegative(nums: number[]): number {
    let count =0;

    for (const num of nums) {
        if (num < 0) {
            count++;
        }
    }
    return count;
}

console.log(countNegative([-2,5,-8,0,3,-1]));
/*

Problem: Array me kitne negative numbers hai, unka count return krna hai.

Input:
nums= [-2,5,-8,0,3,-1]

Expected Output:
3

Approach:
Yha hame 'kitni bar negative number mila' count krna hai, isliye counter pettern use hoga.

Start me:
count = 0

Ham num ko check krege:
agar num < 0 hai to count ko 1 se increase krege.

Finally count return kar denge.

Dry Run:

nums = [-2,5,-8,0,3,-1]

Start:
count = 0

num = -2
-2 < 0 = true
count = 1

num = 5
5 < 0 = false
count = 1

num = -8
-8 < 0 = true
count = 2

num = 0
0 < 0 = false
count = 2

num = 3
3 < 0 = false
count = 2

num = -1
-2 < 0 = true
count = 3

Final:
count = 3

Time Complexity:
O(n)
Reason: Loop nums ke har element ko ek bar check krta hai ,
agar n elements hai to loop n bar chalega.

Space Complexity:
O(1)
Reasone: Sirf count aur num jaise fixed variables use ho rhe hai.
Koi extra array, Map, Set ya input ke sath grow hone wali memory use nahi ho rahi.

Pattern Used:
Counter Pattern

State Used:
count

count ye yaad rkhta hai ki abhitak kitne negative numbers mile hai.

Edge Cases:

1. Empty Array:
[]
Output = 0

2. No Negative Number:
[9,8]
Output = 0

3. All Negative:
[-2,-4,-5]
Output = 3

4. Zero:
[0]
Output = 0

Final Output:
3
 */

// ==================================================
// Problem 2: Count Numbers Greater Than Target
// ==================================================

/*
nums = [4, 10, 2, 15, 7]
target = 6

Output:
3

Because:
10, 15, 7

Concept:
Counter + Condition
*/

function countGreaterThan(nums: number[], target: number): number {

    let count = 0;
    for(const num of nums) {
        if (num > target) {
            count++;
        }
    }
    return count;
}

/*

Question: Hame nums array me se 'target' number se bde numbers count krne hai .
Input:
nums = [4, 10, 2, 15, 7]
target = 6

Output = 3

Approach: Yaha hame " Kitne numbers 6 se bde hai" count krna hai,
isliye Counter Pattern use hoga.

Start me:
count = 0

Har num ko check karenge:
agar num > 6 hai to count ko 1 se increase karenge.

Finally count return kar denge.


Dry run:

nums = [4, 10, 2, 15, 7]
target = 6

Start:
count = 0

num = 4
4 > 6 = false
count = 0

num = 10
10 > 6 = true
count = 1

num = 2
2 > 6 = false
count = 1

num = 15
15 > 6 = true
count = 2

num = 7
7 > 6 = true
count = 3

Time Complexity = O(n)
Reason:
Loop nums ke har element ko ek bar check krega.
Agar n elements hai to loop n bar chelga.

Space Complexity:
O(1)

Reason:
Sirf count, num aur target jaise fixed variables use ho rahe hain.
Koi extra array, Map, Set ya input ke sath grow hone wali memory use nahi ho rahi.


Pattern Used:
Counter Pattern


State Used:
count

count ye yaad rakhta hai ki abhi tak kitne numbers 'target' se bde mile hain.

Edge cases:

1. Empty Array:
[]
target = 6
count = 0

2. All elements Equal to target :
[6,6,6]
target = 6
count = 0

Useful Test Cases:

3. All Greater
nums = [7, 8, 9]
target = 6
count = 3

4. All Smaller
nums = [1, 2, 3]
target = 6
count = 0

All elements greater than target ya less than target par loop perfectally chalega hi isliye to loop bna hai , to ye edge cases me nhi aana chahiye.

 */


// ==================================================
// Problem 3: Sum of Even Numbers
// ==================================================

/*
[2, 5, 8, 3, 10]

Output:
20

Concept:
Condition + Accumulator
*/

function sumEven(nums: number[]): number {
    let sum = 0;
    for (const num of nums) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
/*

Problem: nums ke even elements ko sum krna hai .

Input: [2,4,5,8,0,5]

Expected Output:14

Approach: accumulator approch se krege

Dry Run:
nums = [2,4,5,8,0,-5]

sum = 0
num= 2
2 % 2 = 0 = true
0 + 2 = 2

sum = 2
num= 4
4 % 2 = 0 = true
2 + 4 = 6

sum = 6
num= 5
5 % 2 = 1 = false

sum = 6
num= 8
8 % 2 = 0 = true
6 + 8 = 14

sum = 14
num= 0
0 % 2 = 0 = true
14 + 0 = 14

sum =14
num= -5
-5 % 2 = -1 = false

sum = 14

Time Complexity: O(n)
Reason- loop har element ke liye chlega . Agar nums me n elements hai to loop n bar chlega.

Space Complexity: O(1)
Reason- Yha koi new array, set, map ya input ke sath grow hobe wali koi memory bni create ho rhi isliye space O(1) hoga.

Pattern Used: Accumulator Pattern

State Used: sum, num

Edge Cases:
1. []
output = 0

2. [0]
output = 0

 */


// ==================================================
// Problem 4: Product of All Numbers
// ==================================================

/*
[2, 3, 4]

Output:
24

Dhyan:
Accumulator ki starting value carefully choose karna.

Concept:
Accumulator
*/

function productOfNumbers(nums: number[]): number {

    if (nums.length == 0) {
        return 0;
    }
    let product = nums[0];
    for (let i=1; i < nums.length; i++) {
        product *= nums[i];
    }
    return product;
}

/*

Problem: nums ke all elements ka product nikalna calculate krna hai

Input: [2,3,4]
Expected Output: 24

Approach: Yha hame sare elements ka product nikalna hai,
yha accumulator approch use krege.

Dry Run:

start-
product = 2
nums[i]= 3
2*3 = 6

product = 6
nums[i]= 4
6*4 = 24

product = 24

Time Complexity: O(n)
Reason- Jitne element nums me hoge hame product sare elements ka nikalna hai ,
Agar elements n hoge to loop n time chalega.

Space Complexity: O(1)
Reason- Yha koi array, map, set ya input ke sath grow krne wala koi data structure create nhi ho rha .

Pattern Used: accumulator

State Used: product, num

Edge Cases:

1. [0]
output = 0

2. []
output = 0

 */


// ==================================================
// Problem 5: Find Minimum Safely
// ==================================================

/*
[8, 3, -2, 10] → -2
[]              → null

Concept:
Minimum Tracking + Edge Case
*/

function findMinSafe(nums: number[]): number | null {

    if (nums.length == 0) {
        return null;
    }
    let min = nums[0];
    for (let i=1; i < nums.length; i++){
        if(nums[i] < min) {
          min = nums[i];
        }
    }
    return min;
}

/*

nums [8,3,-2,10]

Dry Run :
Start-
min= 8
i=3
i < min : 3 < 8 : true : min= 3

min= 3
i=-2
i < min : -2 < 3 : true : min= -2

min= -2
i=10
i < min : 10 < -2 : false : min= -2

final result = -2

Time Complexity = O(n)
Reason : Loop har element par chalega aur agar n elements hoge to loop n bar chalega.

Space Complexity = O(1)
Reason : Koi extra memeory grow nhi ho rhi.

Edge cases:

1. []
result = null

2. [0]
result = 0


 */

// ==================================================
// Problem 6: Contains Zero
// ==================================================

/*
[4, 7, 0, 10] → true
[4, 7, 2, 10] → false

Try:
Answer milte hi stop karo.

Concept:
Flag / Early Return
*/

function containsZero(nums: number[]): boolean {
    for (const num of nums) {
        if (num === 0){
            return true;
        }
    }
    return false;
}
/*

nums = [4,7,0,10]

dry run:
start -

num = 4
(num === 0) : false

num = 7
(num === 0) : false

num = 0
(num === 0) : true

Time Complexity :
worst case = O(n)
best case = O(1)
Reason : Loop jabtak chalega jabatk 0 nhi mil jata aur agar 0 nth element par hoge to loop n bar chalega.
agar first element hi 0 mil gya to loop ek bar hi chelega.

Space Complexity = O(1)
Reason : Koi extra memeory grow nhi ho rhi.

Edge cases:

1. []
result = false

2. [0]
result = true

*/
// ==================================================
// Problem 7: Find Target Index
// ==================================================

/*
nums = [5, 8, 12, 8]
target = 8

Output:
1

Target na mile:
-1

Concept:
Index Tracking + Early Return
*/

function findTargetIndex(nums: number[], target: number): number {
    for (const num of nums ) {
        if (num === target) {
            return 1;
        }
    }
    return -1;
}


// ==================================================
// Problem 8: Find Minimum Index
// ==================================================

/*
[8, 3, 12, -2, 6]

Output:
3

Assume:
Array non-empty hai.

Concept:
Minimum + Index Tracking
*/

function findMinIndex(nums: number[]): number {
    // TODO
    return 0;
}


// ==================================================
// Problem 9: Swap First and Last
// ==================================================

/*
[10, 20, 30, 40]

After:
[40, 20, 30, 10]

Empty aur single-element array ko safely handle karo.

Concept:
Swapping + Edge Cases
*/

function swapFirstLast(nums: number[]): void {
    // TODO
}


// ==================================================
// Problem 10: Negate Array In-Place
// ==================================================

/*
[2, -5, 0, 8]

After:
[-2, 5, 0, -8]

New array mat banao.

Concept:
In-Place Modification
*/

function negateInPlace(nums: number[]): void {
    // TODO
}


// ==================================================
// Problem 11: Reverse String Array In-Place
// ==================================================

/*
["A", "B", "C", "D"]

After:
["D", "C", "B", "A"]

Concept:
Two indexes + Swapping + In-place
*/

function reverseStrings(words: string[]): void {
    // TODO
}


// ==================================================
// Problem 12: Find Largest With Index
// ==================================================

/*
[8, 3, 20, 6]

Output:
{
    value: 20,
    index: 2
}

Empty array:
null

Concept:
Value + Index Tracking + Edge Case
*/

function findLargestWithIndex(
    nums: number[]
): { value: number; index: number } | null {
    // TODO
    return null;
}


// ==================================================
// Problem 13: Second Smallest Distinct
// ==================================================

/*
[8, 3, 5, 3, 1]

Distinct sorted values:
1, 3, 5, 8

Output:
3

[5]       → null
[5,5,5]   → null

Constraint:
Sorting use mat karo.

Concept:
Multiple State Tracking
*/

function findSecondSmallest(nums: number[]): number | null {
    // TODO
    return null;
}


// ==================================================
// Problem 14: Count and Sum Positives
// ==================================================

/*
[-2, 5, 0, 8, -1, 4]

Output:
{
    count: 3,
    sum: 17
}

Concept:
Counter + Accumulator in one traversal
*/

function analyzePositive(
    nums: number[]
): { count: number; sum: number } {
    // TODO
    return { count: 0, sum: 0 };
}


// ==================================================
// Problem 15: Analyze Numbers
// ==================================================

/*
Ek hi traversal me calculate karo:

- total sum
- positive count
- negative count
- maximum
- minimum

Example:
[4, -2, 7, 10, -5]

Output:
{
    sum: 14,
    positiveCount: 3,
    negativeCount: 2,
    max: 10,
    min: -5
}

Empty array:
null

Concept:
Mixed State Tracking + Edge Cases
*/

function analyzeNumbersPractice(nums: number[]): {
    sum: number;
    positiveCount: number;
    negativeCount: number;
    max: number;
    min: number;
} | null {
    // TODO
    return null;
}


// ==================================================
// Problem 16: Is All Positive?
// ==================================================

/*
[2, 5, 8]  → true
[2, 0, 8]  → false
[2, -1, 8] → false

Jaldi stop karne ki socho.

Concept:
Boolean Result + Early Return
*/

function isAllPositive(nums: number[]): boolean {
    // TODO
    return false;
}


// ==================================================
// Problem 17: Count Maximum Occurrences
// ==================================================

/*
[4, 10, 2, 10, 5, 10]

Maximum = 10
Output = 3

Challenge:
Ek hi traversal me solve karne ki koshish karo.

Concept:
Multiple State Tracking
*/

function countMaxOccurrences(nums: number[]): number {
    // TODO
    return 0;
}


// ==================================================
// Problem 18: Difference Between Max and Min
// ==================================================

/*
[8, 3, 12, -2, 6]

max = 12
min = -2

Output:
14

Empty array:
null

Concept:
Max + Min in one traversal
*/

function maxMinDifference(nums: number[]): number | null {
    // TODO
    return null;
}


// ==================================================
// Self Review
// ==================================================

/*
Har problem ke baad khud se pucho:

1. Maine kaunsi state use ki?
2. Initial value kyu choose ki?
3. State kab update hoti hai?
4. Kya early return possible tha?
5. Kya original input modify hua?
6. Kya new array / Map / Set bana?
7. Empty array ka kya hoga?
8. Duplicate values ka kya hoga?
9. Negative values ka kya hoga?
10. Time Complexity?
11. Space Complexity?
*/
