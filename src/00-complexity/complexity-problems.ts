/**
 * DSA - Complexity Practice Problems
 *
 * IMPORTANT:
 * Pehle khud solve karo.
 * Har question ke liye likho:
 *
 * 1. Best-case Time Complexity
 * 2. Worst-case Time Complexity
 * 3. Space Complexity
 * 4. 1-2 lines me reason
 *
 * Solutions intentionally nahi diye gaye hain.
 */

// --------------------------------------------------
// Problem 1
// --------------------------------------------------

function problem1(nums: number[]): number | undefined {
    return nums[0];
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 2
// --------------------------------------------------

function problem2(nums: number[]): void {
    for (const num of nums) {
        console.log(num);
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 3
// --------------------------------------------------

function problem3(nums: number[]): boolean {
    for (const num of nums) {
        if (num === 10) {
            return true;
        }
    }

    return false;
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 4
// --------------------------------------------------

function problem4(nums: number[]): number[] {
    const result: number[] = [];

    for (const num of nums) {
        result.push(num * 2);
    }

    return result;
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 5
// --------------------------------------------------

function problem5(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 6
// --------------------------------------------------

function problem6(users: string[], products: string[]): void {
    for (const user of users) {
        console.log(user);
    }

    for (const product of products) {
        console.log(product);
    }
}

/*
Assume:
users.length = n
products.length = m

Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 7
// --------------------------------------------------

function problem7(users: string[], products: string[]): void {
    for (const user of users) {
        for (const product of products) {
            console.log(user, product);
        }
    }
}

/*
Assume:
users.length = n
products.length = m

Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 8
// --------------------------------------------------

function problem8(n: number): void {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 9
// --------------------------------------------------

function problem9(n: number): void {
    let i = 1;

    while (i < n) {
        i = i * 2;
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 10
// --------------------------------------------------

function problem10(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        let x = nums.length;

        while (x > 1) {
            x = Math.floor(x / 2);
        }
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 11
// --------------------------------------------------

function problem11(nums: number[]): void {
    for (let i = 0; i < 10; i++) {
        console.log(nums[i]);
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 12
// --------------------------------------------------

function problem12(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(nums[i], j);
        }
    }
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 13
// --------------------------------------------------

function problem13(nums: number[]): number {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 14
// --------------------------------------------------

function problem14(nums: number[]): number[] {
    const even: number[] = [];

    for (const num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }

    return even;
}

/*
Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/


// --------------------------------------------------
// Problem 15 - Mixed
// --------------------------------------------------

function problem15(
    users: string[],
    products: string[],
    orders: number[]
): void {
    for (const user of users) {
        console.log(user);
    }

    for (const product of products) {
        for (const order of orders) {
            console.log(product, order);
        }
    }
}

/*
Assume:
users.length = n
products.length = m
orders.length = p

Your Answer:
Best Time:
Worst Time:
Space:
Reason:
*/
