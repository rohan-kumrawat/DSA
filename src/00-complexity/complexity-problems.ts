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
Your Answer: O(1)
Best Time: O(1)
Worst Time: O(1)
Space: O(1)
Reason: nums[0] se array ke first element ko direct access kiya jaa rha hai isliye array me 10 elements ho ya 10 lakh access sirf ek hi element ho rha hai isliye time complexity O(1) hogi.
Ab bat kre space complexity ki to koi extra array , set , map ya imput ke sath grow hone wali memory use nhi ho rhi hai , sirf ek hi value return ho rhi hai isliye space complexity bhi O(1) hi hogi.
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
Your Answer:O(n)
Best Time:O(1)
Worst Time:O(n)
Space:O(1)
Reason: loop nums ke har element par chlega isliye agar numns me n elements hai to loop n bar chlega.
is loop me koi early return ya break nhi hai isliye best case aur worst case O(n) hi rhega.
Kyuki koi extra array, map ya set create nhi ho rha.
har iteration me vahi num veriables current element ko hold krta hai, isliye koi extra memory input ke sath grow nhi krti isliye space complexity O(1) hogi.
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
Your Answer: O(n)
Best Time: O(1)
Worst Time: O(n)
Space: O(1)
Reason: is loop me nums ke har element par (num === 10) check hoga isliye agar nums me n elements hai aur nums me 10 nth numbers pe hai ya hai hi nhi to loop n time chalega
isliye time complexity O(n) hogi . best case me pehli bar chlne par bhi condition true ho skti hai isliye best case me time complexity O(1) hogi aur worst case me O(n).
loop me koi extra array, map ya set create nhi ho rha , sirf current num variable use ho rha hai aur koi extra memory input ke sath grow nhi ho rhi isliye space complexity O(1) hogi.
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
Your Answer:O(n)
Best Time:O(n)
Worst Time:O(n)
Space:O(n)
Reason: loop nums ke har element ko har bar process krega aur har element ko 2 se multiply krke ek new array result me push krega isliye yaha time complexity O(n) hogi .
sath hi loop me koi early return ya break bhi nhi hai isliye agar n elements hai to best case aur worst case dono me loop ko n time chlna pdega isliye time complexity O(n) hi hogi.
yha har input ke sath new array grow ho rha hai agar array me n element hai to new array bhi n element ke sath bnega to utni hi memory grow hogi isliye space complexity O(n) hogi.
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
Your Answer: O(n^2)
Best Time: O(1)
Worst Time:o(n^2)
Space:O(1)
Reason: Yha outer loop nums ke elements par chlta hai aur har element ke liye inner loop uske bad wale elements ko copare krta hai.
best case me agar first comparison me hi nums[0] === nums[1] ho jata hai to function turant true ho jaega isliye best case me time complexity O(1) hogi.
worst case me agar koi duplicate naa ho ya duplicate bahut end me mile, to almost har possible pair compare karna pdega to total comparison n*(n+1)/2 hogi jo Big O me O(n^2) hota hai.
Yha koi extra array, set ya map create nhi ho rha hai sirf i aur j variables use ho rhe hai aur input ke sath koi extra memory grow nhi kr rhi hai isliye space complexity O(1) hogi.
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

Your Answer: O(n+m)
Best Time: O(n+m)
Worst Time: O(n+m)
Space: O(1)
Reason: Pehla loop users array ke har elements par chlta hai, agar users.length = n hai to time complexity O(n) hogi.
Dusra loop products array ke har elements par chlta hai, agar products.length = m hai to time complexity O(m) hogi.
dono loops side by side hai isliye complexity add hogi O(n) + O(m) = O(n+m).
Yha dono loop me koi early return ya break nhi hai isliye dono me loop har elements ke liye chlega isliye best time aur worst time dono O(n+m) hi rhega.
Koi extra array , map, set ya input ke sath grow hone wali memory use nhi ho rhi hai isliye space complexity O(1) hogi.
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

Your Answer: O(nm)
Best Time: O(nm)
Worst Time: O(nm)
Space: O(1)
Reason: Outer loop users array ke har elements par chlta hai agar users.length = n hai to outer loop ki time complexity O(n) hogi.
inner loop products array ke har elements ke liye chlega agar products.length = m hai to inner loop ki time complexity O(m) hogi.
dono loop nested hai isliye total time complexity O(nm) hogi.
Sath hi yha koi early return ya break nhi lga hua hai to loop har elements ke liye chlega isliye best time aur worst time O(nm) hoga.
Dono loop me koi extra array, set, map ya koi extra data structure create nhi ho rhi jo input size ke sath grow ho.
Sirf current user aur product reference hi use ho rha hai, isliye space complexity O(1) hogi.
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
Your Answer: O(log n)
Best Time: O(log n)
Worst Time:O(log n)
Space: O(1)
Reason: Har iteration me n ko 2 se divide kiya jaa rha hai .
example: 100-50-25-12-6-3-1
Har iteration me problem roughly half ho rhi hai isliye number of iteration log n ke according grow krta hai isliye time complexity O(log n).
Yha koi early return yaa different input arrangement nhi hai,
same input size n ke liye process hamesa isi tarah chlegi isliye best aur worst time me complexity O(log n) hi hogi.
Yha koi extra array , map, set ya input ke sath grow hone wali koi data structure nhi create ho rha,
sirf n veriable hi update rha hai har bar isliye space complexity O(1) hogi.
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
Your Answer: O(log n)
Best Time: O(log n)
Worst Time:O(log n)
Space: O(1)
Reason: Har iteration me i ko 2 se multiply kiya jaa rha hai jab tak i<n naa ho jaye.
for example n 100 hoga to i is tarah grow hoga-
1-2-4-8-16-32-64-128(false)
Yha iteration log n ke according grow ho rha hai isliye time complexity hogi O(log n).
same input size n ke liye loop ka behaviour fixed hai, i hamesa 1 se start hota hai aur har iteration me double hota hai isliye best aur worst time O(log n) hi hoga.
Koi extra array, set, map ya input ke sath grow hone wala koi data structure nhi create ho rha ,
har iteration me sirf i hi update ho rha hai isliye space complexity O(1) hogi.
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
