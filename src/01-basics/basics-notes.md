# DSA Basics — Notes

## 1. Variable as State

DSA me variable sirf value store nahi karta. Bahut baar variable ye batata hai ki processing ke dauran **abhi tak kya hua hai**.

Examples:

- `count` → kitni baar condition match hui
- `sum` → abhi tak total kitna hua
- `max` → abhi tak sabse bada number
- `min` → abhi tak sabse chhota number
- `found` → target mila ya nahi
- `maxIndex` → maximum kis index par mila
- `largest`, `secondLargest` → top 2 values

Basic pattern:

1. State initialize karo
2. Input traverse karo
3. Condition ke according state update karo
4. End me result return karo

---

## 2. Counter Pattern

Counter ka use quantity count karne ke liye hota hai.

```ts
function countEven(nums: number[]): number {
    let count = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            count++;
        }
    }

    return count;
}
```

Mental question:

> Kitni baar?

Examples:

- kitne positive numbers?
- kitne active users?
- kitne completed orders?

Typical complexity:

- Time: `O(n)`
- Space: `O(1)`

---

## 3. Accumulator Pattern

Accumulator running result banata hai.

```ts
function calculateTotal(nums: number[]): number {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return sum;
}
```

Example:

```text
nums = [10, 20, 30, 40]

sum:
0
10
30
60
100
```

Counter vs Accumulator:

```text
count++       → kitni baar?
sum += value  → total kitna?
```

---

## 4. Condition + Accumulator

Kabhi sirf condition match karne wali values ko add karna hota hai.

```ts
function sumPositive(nums: number[]): number {
    let sum = 0;

    for (const num of nums) {
        if (num > 0) {
            sum += num;
        }
    }

    return sum;
}
```

Yahan:

- `if` decide karta hai value use hogi ya nahi
- `sum` running total yaad rakhta hai

---

## 5. Maximum Tracking

Mental model:

> Abhi tak jo sabse bada mila hai, use yaad rakho.

```ts
function findMax(nums: number[]): number {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}
```

`max = nums[0]` rakhna important hai.

Agar `max = 0` rakhen aur input ho:

```text
[-8, -3, -10]
```

to galat answer `0` aa sakta hai, jabki actual max `-3` hai.

Typical complexity:

- Time: `O(n)`
- Space: `O(1)`

---

## 6. Minimum Tracking

Maximum ka opposite:

> Abhi tak jo sabse chhota mila hai, use yaad rakho.

```ts
function findMin(nums: number[]): number {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
}
```

---

## 7. Flag Pattern

Flag usually boolean hota hai:

```ts
let found = false;
```

Mental question:

> Kya condition kabhi match hui?

```ts
function containsNegative(nums: number[]): boolean {
    let found = false;

    for (const num of nums) {
        if (num < 0) {
            found = true;
        }
    }

    return found;
}
```

Important:

`if` false hone se `found` automatically false nahi hota.

Variable tabhi change hota hai jab code explicitly assign kare.

---

## 8. Early Return

Agar answer mil gaya hai aur aage ka loop useless hai, turant return kar sakte hain.

```ts
function hasEven(nums: number[]): boolean {
    for (const num of nums) {
        if (num % 2 === 0) {
            return true;
        }
    }

    return false;
}
```

Complexity:

- Best Time: `O(1)`
- Worst Time: `O(n)`
- Space: `O(1)`

Mental question:

> Answer mil gaya hai to kya aage ka loop chalana zaroori hai?

---

## 9. Index Tracking

Kabhi sirf value nahi, uska index bhi chahiye.

```ts
function findMaxIndex(nums: number[]): number {
    let max = nums[0];
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}
```

Important:

```ts
max = nums[i];
maxIndex = i;
```

dono saath update honge.

---

## 10. Swapping

Do values ki positions exchange karna:

```ts
let a = 10;
let b = 20;

const temp = a;
a = b;
b = temp;
```

Complexity:

- Time: `O(1)`
- Space: `O(1)`

Array indexes swap:

```ts
function swapArrayElements(nums: number[], i: number, j: number): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```

Known indexes hone ki wajah se swap `O(1)` hota hai.

---

## 11. In-Place Modification

In-place ka matlab:

> New array banane ke bajay original data structure ko modify karna.

```ts
function doubleInPlace(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * 2;
    }
}
```

Complexity:

- Time: `O(n)`
- Extra Space: `O(1)`

New array approach:

```ts
function doubleWithNewArray(nums: number[]): number[] {
    const result: number[] = [];

    for (const num of nums) {
        result.push(num * 2);
    }

    return result;
}
```

Complexity:

- Time: `O(n)`
- Space: `O(n)`

In-place hamesha automatically better nahi hota. Agar original data preserve karna zaroori ho to new array useful ho sakta hai.

---

## 12. Reverse Array In-Place

```ts
function reverseArray(nums: number[]): void {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
}
```

Example:

```text
[1, 2, 3, 4, 5]
↓
[5, 4, 3, 2, 1]
```

Loop roughly `n/2` baar chalta hai.

Big O:

```text
O(n/2) → O(n)
```

So:

- Time: `O(n)`
- Space: `O(1)`

---

## 13. Second Largest — Multiple State Tracking

Yahan 2 states track karni hoti hain:

```text
largest
secondLargest
```

```ts
function findSecondLargest(nums: number[]): number | null {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        return null;
    }

    return secondLargest;
}
```

Main concept:

```text
new largest mila
↓
old largest → secondLargest
new value   → largest
```

`num < largest` duplicate largest ko distinct second-largest banne se rokta hai.

Example:

```text
[20, 20, 12]
```

Distinct second largest = `12`

Complexity:

- Time: `O(n)`
- Space: `O(1)`

---

## 14. `-Infinity`

`-Infinity` kisi bhi normal finite number se chhota hota hai.

```ts
let largest = -Infinity;
```

Isliye first valid number easily largest ban sakta hai.

---

## 15. Edge Cases

DSA me unusual/boundary inputs ko check karna important hai.

Common edge cases:

```text
[]                → empty array
[5]               → single element
[5, 5, 5]         → duplicates
[-8, -2, -10]     → all negative
[0]               → zero
[1, 2, 3, 4]      → already sorted
[4, 3, 2, 1]      → reverse sorted
```

Har problem me sab relevant nahi honge.

Mental question:

> Mera code unusual input par kya karega?

---

## 16. Empty Array Handling

```ts
function findMaxSafe(nums: number[]): number | null {
    if (nums.length === 0) {
        return null;
    }

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}
```

`number | null` ka meaning:

- valid answer ho → number
- answer exist na kare → null

Single-element array:

```text
nums = [5]

max = 5
loop iterations = 0
return 5
```

---

## 17. Mixed State Tracking

Ek hi traversal me multiple results nikal sakte hain.

```ts
function analyzeNumbers(nums: number[]) {
    if (nums.length === 0) {
        return null;
    }

    let sum = 0;
    let positiveCount = 0;
    let max = nums[0];

    for (const num of nums) {
        sum += num;

        if (num > 0) {
            positiveCount++;
        }

        if (num > max) {
            max = num;
        }
    }

    return {
        sum,
        positiveCount,
        max
    };
}
```

Yahan:

- `sum` → accumulator
- `positiveCount` → counter
- `max` → maximum tracking

Ek hi loop hai, isliye:

- Time: `O(n)`
- Space: `O(1)`

---

## 18. Quick Pattern Recognition

Question padhte hi poochho:

```text
Kitni baar?             → Counter
Total kitna?            → Accumulator
Sabse bada?             → Max tracking
Sabse chhota?           → Min tracking
Mila ya nahi?           → Flag
Kis index par?          → Index tracking
Do positions badalni?   → Swap
Top 2 values?           → Multiple states
Original modify karna?  → In-place
```

---

## 19. Final Mental Checklist

Har basic DSA problem me ye socho:

1. Mujhe kya state yaad rakhni hai?
2. State ki initial value kya hogi?
3. State kab update hogi?
4. Kya answer milte hi early return kar sakta hu?
5. Kya original input modify ho raha hai?
6. Kya new array/Map/Set ban raha hai?
7. Empty array ka kya hoga?
8. Duplicate values ka kya hoga?
9. Negative values ka kya hoga?
10. Time Complexity kya hai?
11. Space Complexity kya hai?

---

## 20. Complexity Summary

| Pattern | Time | Extra Space |
|---|---:|---:|
| Counter | O(n) | O(1) |
| Accumulator | O(n) | O(1) |
| Find max/min | O(n) | O(1) |
| Flag search | O(n) | O(1) |
| Early-return search | Best O(1), Worst O(n) | O(1) |
| Track max index | O(n) | O(1) |
| Swap known indexes | O(1) | O(1) |
| Reverse in-place | O(n) | O(1) |
| New transformed array | O(n) | O(n) |
| Second largest | O(n) | O(1) |
| Mixed state tracking | O(n) | O(1) |
