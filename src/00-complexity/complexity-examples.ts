/**
 * DSA - Time & Space Complexity Examples
 *
 * Goal:
 * Har example ko run karke samjho ki time aur space complexity kyu hai.
 */

// --------------------------------------------------
// 1. O(1) Time | O(1) Space
// --------------------------------------------------

function getFirstUser(users: string[]): string | undefined {
    return users[0];
}

console.log("O(1):", getFirstUser(["A", "B", "C"]));


// --------------------------------------------------
// 2. O(n) Time | O(1) Space
// --------------------------------------------------

function printUsers(users: string[]): void {
    for (const user of users) {
        console.log(user);
    }
}

printUsers(["Rohan", "Aman", "Vikas"]);


// --------------------------------------------------
// 3. O(n) Time | O(1) Space
// --------------------------------------------------

function sumNumbers(nums: number[]): number {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return sum;
}

console.log("Sum:", sumNumbers([10, 20, 30, 40]));


// --------------------------------------------------
// 4. O(n) Time | O(n) Space
// --------------------------------------------------

function doubleNumbers(nums: number[]): number[] {
    const result: number[] = [];

    for (const num of nums) {
        result.push(num * 2);
    }

    return result;
}

console.log("Doubled:", doubleNumbers([1, 2, 3, 4]));


// --------------------------------------------------
// 5. O(n²) Time | O(1) Space
// --------------------------------------------------

function hasDuplicateBruteForce(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
}

console.log("Has duplicate:", hasDuplicateBruteForce([1, 2, 3, 2]));


// --------------------------------------------------
// 6. O(n + m) Time | O(1) Space
// --------------------------------------------------

function printUsersAndProducts(
    users: string[],
    products: string[]
): void {
    for (const user of users) {
        console.log("User:", user);
    }

    for (const product of products) {
        console.log("Product:", product);
    }
}

printUsersAndProducts(
    ["Rohan", "Aman"],
    ["Laptop", "Phone", "Mouse"]
);


// --------------------------------------------------
// 7. O(nm) Time | O(1) Space
// --------------------------------------------------

function compareUsersWithProducts(
    users: string[],
    products: string[]
): void {
    for (const user of users) {
        for (const product of products) {
            console.log(user, product);
        }
    }
}

compareUsersWithProducts(
    ["Rohan", "Aman"],
    ["Laptop", "Phone"]
);


// --------------------------------------------------
// 8. O(log n) Time | O(1) Space
// --------------------------------------------------

function divideUntilOne(n: number): void {
    while (n > 1) {
        console.log(n);
        n = Math.floor(n / 2);
    }
}

divideUntilOne(100);


// --------------------------------------------------
// 9. O(log n) Time | O(1) Space
// --------------------------------------------------

function doubleUntilN(n: number): void {
    let i = 1;

    while (i < n) {
        console.log(i);
        i = i * 2;
    }
}

doubleUntilN(1000);


// --------------------------------------------------
// 10. O(n log n) Time | O(1) Extra Space
// --------------------------------------------------

function nLogNExample(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        let n = nums.length;

        while (n > 1) {
            n = Math.floor(n / 2);
        }
    }
}

nLogNExample([1, 2, 3, 4, 5, 6, 7, 8]);


// --------------------------------------------------
// 11. Best O(1), Worst O(n), Space O(1)
// --------------------------------------------------

function findUser(
    users: string[],
    target: string
): string | null {
    for (const user of users) {
        if (user === target) {
            return user;
        }
    }

    return null;
}

console.log(
    "Find user:",
    findUser(["Rohan", "Aman", "Vikas"], "Aman")
);


// --------------------------------------------------
// 12. O(n) Time | O(n) Space
// --------------------------------------------------

function collectEven(nums: number[]): number[] {
    const result: number[] = [];

    for (const num of nums) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }

    return result;
}

console.log("Even:", collectEven([1, 2, 3, 4, 5, 6]));


// --------------------------------------------------
// 13. O(1) Time despite having a loop
// --------------------------------------------------

function fixedLoop(): void {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

fixedLoop();


// --------------------------------------------------
// 14. Nested loop but still O(n)
// --------------------------------------------------

function nestedButLinear(users: string[]): void {
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(users[i], j);
        }
    }
}

nestedButLinear(["A", "B", "C"]);
