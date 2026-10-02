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
    // TODO
    return 0;
}


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
    // TODO
    return 0;
}


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
    // TODO
    return 0;
}


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
    // TODO
    return 0;
}


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
    // TODO
    return null;
}


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
    // TODO
    return false;
}


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
    // TODO
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
