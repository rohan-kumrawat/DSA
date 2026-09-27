# Time & Space Complexity

Complexity ka use ye samajhne ke liye hota hai ki:

- input bada hone par hamara code kitna zyada kaam karega
- input bada hone par kitni extra memory use hogi

DSA me mainly do types ki complexity dekhte hain:

1. Time Complexity
2. Space Complexity


# 1. Time Complexity

Time Complexity ka matlab actual seconds nahi hota.

Example:

Ek code mere laptop par 1 second me chale
aur kisi powerful server par 0.2 second me chale.

Isliye seconds reliable measurement nahi hain.

Hum ye dekhte hain:

> Input size badhne par operations / work kitna badh raha hai?

---

# `n` kya hota hai?

DSA me `n` ka matlab generally:

> input ki size

Example:

```ts
const users = ["A", "B", "C", "D"];
```

Yahan:

```text
n = 4
```

Agar 10 lakh users hain:

```text
n = 10,00,000
```

---

# O(1) — Constant Time

O(1) ka matlab ye nahi ki exactly sirf 1 operation hoga.

Iska matlab hai:

> Input kitna bhi bada ho, operations ki quantity fixed rahegi.

Example:

```ts
const firstUser = users[0];
```

Agar:

```text
10 users
1000 users
10 lakh users
```

ho, hum fir bhi direct index `0` access kar rahe hain.

Isliye:

```text
Time Complexity = O(1)
```

## Real-life example

Mujhe pata hai ki Aadhaar card cupboard ke top drawer me hai.

Cupboard me:

```text
10 documents
ya
500 documents
```

ho sakte hain.

Lekin main direct top drawer kholunga.

Sab documents check nahi karunga.

Ye O(1) hai.

---

## Fixed loop bhi O(1) ho sakta hai

Example:

```ts
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

Ye loop hai.

Lekin hamesha sirf 10 baar chalega.

Input size `n` se iska koi relation nahi hai.

Isliye:

```text
O(10)
→ O(1)
```

Important:

> Loop dekhte hi O(n) mat samjho.

Dekho loop input size par depend karta hai ya fixed number par.

---

# O(n) — Linear Time

Agar input me `n` items hain aur hum har item ko ek baar process karte hain:

```ts
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
```

Agar:

```text
5 users → 5 iterations
100 users → 100 iterations
10 lakh users → 10 lakh iterations
```

Input jitna badha, work bhi roughly utna hi badha.

Isliye:

```text
O(n)
```

## Real-life example

Class me teacher ko "Rohan" naam ka student find karna hai.

Teacher ek-ek student ko check karta hai:

```text
Student 1
Student 2
Student 3
...
```

Worst case me Rohan last me hoga.

Teacher ko sab `n` students check karne padenge.

Isliye O(n).

---

# Important Difference: O(1) vs O(n)

Ye:

```ts
console.log(users[500]);
```

O(1) hai.

Kyunki direct index access hai.

Lekin:

```ts
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
```

O(n) hai.

Kyunki hum har user ko access kar rahe hain.

---

# O(n²) — Quadratic Time

Usually jab har item ke liye har item ko process karte hain.

Example:

```ts
for (let i = 0; i < users.length; i++) {

    for (let j = 0; j < users.length; j++) {
        console.log(users[i], users[j]);
    }

}
```

Agar:

```text
n = 5
```

to roughly:

```text
5 × 5 = 25 operations
```

Agar:

```text
n = 100
```

to:

```text
100 × 100 = 10,000
```

Agar:

```text
n = 1000
```

to:

```text
1000 × 1000 = 10,00,000
```

Isliye:

```text
n × n
= n²
= O(n²)
```

## Real-life example

100 students hain.

Har student ko har student ke saath compare karna hai.

Har ek ke liye 100 checks.

Roughly:

```text
100 × 100
```

Ye O(n²) type growth hai.

---

# Nested loop hamesha O(n²) nahi hota

Example:

```ts
for (let i = 0; i < users.length; i++) {

    for (let j = 0; j < 10; j++) {
        console.log(users[i]);
    }

}
```

Outer loop:

```text
n times
```

Inner loop:

```text
10 times fixed
```

Total:

```text
10n
```

Big O me constant ignore hota hai:

```text
O(10n)
→ O(n)
```

Important:

> Nested loop dekhkar direct O(n²) mat bolo.

Check karo dono loops kis input par depend karte hain.

---

# Multiple Inputs: n, m, p

Har input ko same `n` mat samjho.

Example:

```ts
for (const user of users) {
    console.log(user);
}

for (const product of products) {
    console.log(product);
}
```

Suppose:

```text
users.length = n
products.length = m
```

Pehla loop:

```text
O(n)
```

Doosra loop:

```text
O(m)
```

Dono side-by-side hain:

```text
O(n + m)
```

Hum ise O(n) nahi bolenge kyunki `n` aur `m` independent inputs hain.

---

# Nested Different Inputs

```ts
for (const user of users) {

    for (const product of products) {
        console.log(user, product);
    }

}
```

Outer:

```text
n
```

Inner:

```text
m
```

Total:

```text
n × m
```

So:

```text
O(nm)
```

---

# Important Rule

## Side-by-side loops → ADD

Example:

```text
O(n) + O(m)
= O(n + m)
```

## Nested loops → MULTIPLY

Example:

```text
O(n) × O(m)
= O(nm)
```

Same input ho:

```text
O(n) × O(n)
= O(n²)
```

---

# O(log n) — Logarithmic Time

O(log n) ka simple meaning:

> Har step me problem ka size bahut kam ho raha hai, usually half.

Example:

```ts
while (n > 1) {
    n = Math.floor(n / 2);
}
```

Suppose:

```text
n = 100
```

Flow:

```text
100
50
25
12
6
3
1
```

Har step me value half ho rahi hai.

Isliye:

```text
O(log n)
```

## Real-life example

Dictionary me "Rohan" word find karna hai.

Agar page 1 se ek-ek page check karenge:

```text
O(n)
```

Lekin agar beech ka page khola:

```text
middle page
↓
decide left ya right
↓
aadhi dictionary hata di
```

Har step me aadha data remove.

Ye O(log n) hai.

---

# Double hona bhi O(log n) ho sakta hai

Example:

```ts
let i = 1;

while (i < n) {
    i = i * 2;
}
```

Values:

```text
1
2
4
8
16
32
64
...
```

Har baar double ho rahi hain.

Agar:

```text
n = 10,00,000
```

to roughly around 20 steps me reach kar lenge.

Isliye:

```text
O(log n)
```

Simple signal:

```text
n = n / 2
```

ya

```text
i = i * 2
```

dekho to O(log n) possibility check karo.

---

# O(n log n)

Agar O(n) work ke andar O(log n) work ho:

```ts
for (let i = 0; i < n; i++) {

    let j = n;

    while (j > 1) {
        j = Math.floor(j / 2);
    }

}
```

Outer:

```text
O(n)
```

Inner:

```text
O(log n)
```

Nested hain:

```text
O(n × log n)
```

So:

```text
O(n log n)
```

Efficient sorting algorithms me bhi ye complexity commonly milti hai.

Example:

- Merge Sort
- Quick Sort average case

---

# Big O me Constants Ignore Karte Hain

Example:

```text
O(2n)
```

Big O me:

```text
O(n)
```

Similarly:

```text
O(10n)
O(100n)
O(500n)
```

sab simplify hoke:

```text
O(n)
```

Kyunki Big O exact operations nahi,
growth pattern ko represent karta hai.

---

# Dominant Term

Suppose complexity:

```text
O(n² + n + 10)
```

Agar `n` bahut bada ho:

```text
n²
```

baaki terms se bahut zyada grow karega.

Isliye:

```text
O(n² + n + 10)
→ O(n²)
```

## Example

```text
n = 1000

n² = 10,00,000
n  = 1,000
10 = 10
```

`n²` dominant hai.

---

# Different Inputs ko Remove Nahi Karte

Example:

```text
O(n² + m)
```

Yahan `m` alag independent input hai.

Hum nahi jaante:

```text
m kitna bada ho sakta hai
```

Isliye:

```text
O(n² + m)
```

waise hi rahega.

---

# Best Case, Average Case, Worst Case

Example:

```ts
function findUser(users: string[], target: string) {

    for (const user of users) {

        if (user === target) {
            return user;
        }

    }

    return null;
}
```

## Best Case

Target pehla user hai.

Sirf 1 comparison.

```text
O(1)
```

## Average Case

Target somewhere middle me milta hai.

Roughly:

```text
n / 2
```

Big O me constant ignore:

```text
O(n)
```

## Worst Case

Target last me hai
ya target exist hi nahi karta.

Sab users check karne padenge:

```text
O(n)
```

So:

```text
Best    = O(1)
Average = O(n)
Worst   = O(n)
```

Normally interviewer sirf puche:

> Time complexity kya hai?

to mostly worst-case complexity explain karte hain.

---

# Early Return Important Hai

Example:

```ts
function hasEven(nums: number[]) {

    for (const num of nums) {

        if (num % 2 === 0) {
            return true;
        }

    }

    return false;
}
```

Agar first number even:

```text
Best = O(1)
```

Agar even number last me ho
ya koi even number na ho:

```text
Worst = O(n)
```

Important:

> Loop hone ka matlab best case hamesha O(n) nahi hota.

Early return / break ko bhi check karo.

---

# 2. Space Complexity

Space Complexity ka matlab:

> Input badhne par algorithm kitni EXTRA memory use kar raha hai?

Important word:

```text
EXTRA MEMORY
```

Input jo function ko already mila hai, use generally auxiliary space me count nahi karte.

---

# O(1) Space

Example:

```ts
function sumNumbers(nums: number[]) {

    let sum = 0;

    for (const num of nums) {
        sum = sum + num;
    }

    return sum;
}
```

Agar:

```text
10 numbers
1000 numbers
10 lakh numbers
```

ho, hum fir bhi same variables use kar rahe hain:

```text
sum
num
```

Extra memory input ke saath grow nahi ho rahi.

So:

```text
Space = O(1)
```

---

# Important Confusion

Example:

```ts
for (const num of nums) {
    const doubled = num * 2;
    console.log(doubled);
}
```

Loop `n` baar chalega.

`doubled` variable `n` baar use hoga.

Lekin:

```text
Space = O(1)
```

Kyun?

Space Complexity ye nahi dekhti:

> Variable total kitni baar bana?

Ye dekhti hai:

> Ek time par maximum kitni memory hold ho rahi hai?

Har iteration ke baad purani `doubled` value ki zarurat nahi hai.

Ek time par sirf current value store hai.

Isliye:

```text
O(1)
```

---

# O(n) Space

Example:

```ts
function doubleNumbers(nums: number[]) {

    const result: number[] = [];

    for (const num of nums) {
        result.push(num * 2);
    }

    return result;
}
```

Agar:

```text
10 inputs
```

to result me:

```text
10 values
```

Agar:

```text
10 lakh inputs
```

to result me:

```text
10 lakh values
```

Extra memory input size ke saath grow kar rahi hai.

So:

```text
Space = O(n)
```

---

# Copy banana zaroori nahi hai

Space O(n) hone ke liye input ki exact copy banana necessary nahi hai.

Example:

```ts
const result: number[] = [];

for (const num of nums) {

    if (num % 2 === 0) {
        result.push(num);
    }

}
```

Hum sirf even numbers store kar rahe hain.

Suppose `k` even numbers hain.

Technically:

```text
Space = O(k)
```

Lekin worst case me sab numbers even ho sakte hain:

```text
k = n
```

So worst-case:

```text
Space = O(n)
```

---

# Output Space vs Auxiliary Space

Kabhi interviewer specifically bole:

> Output ko count mat karo.

Example:

```ts
function collectEven(nums: number[]) {

    const result: number[] = [];

    for (const num of nums) {

        if (num % 2 === 0) {
            result.push(num);
        }

    }

    return result;
}
```

Output include karoge:

```text
Space = O(n)
```

Agar output array exclude kar diya:

```text
Auxiliary Space = O(1)
```

kyunki working memory me sirf fixed variables hain.

---

# Quick Recognition Rules

Code dekhte hi ye questions pucho:

## Time ke liye

### Direct fixed operation?

```ts
users[0]
```

→ O(1)

### Har element ek baar?

```ts
for (... n ...)
```

→ O(n)

### Har element ke andar har element?

```text
n × n
```

→ O(n²)

### Har step me half?

```text
n = n / 2
```

→ O(log n)

### n work ke andar log work?

```text
n × log n
```

→ O(n log n)

---

## Space ke liye

### Sirf fixed variables?

```text
sum
count
max
current
```

→ O(1)

### New array / Map / Set input ke saath grow?

```text
result.push(...)
map.set(...)
set.add(...)
```

→ commonly O(n)

---

# Common Mistakes

## Mistake 1

Loop dekha aur direct O(n) bol diya.

Wrong.

Example:

```ts
for (let i = 0; i < 10; i++)
```

Fixed 10 iterations:

```text
O(1)
```

---

## Mistake 2

Nested loops dekhe aur direct O(n²).

Wrong.

Check karo inner loop fixed hai ya input based.

```ts
for (let i = 0; i < n; i++) {
    for (let j = 0; j < 10; j++) {}
}
```

Complexity:

```text
O(n)
```

---

## Mistake 3

Do alag inputs ko same `n` maan liya.

Users:

```text
n
```

Products:

```text
m
```

Separate loops:

```text
O(n + m)
```

Nested:

```text
O(nm)
```

---

## Mistake 4

Loop me variable baar-baar update hua to Space O(n) maan liya.

Wrong.

Example:

```ts
let sum = 0;

for (...) {
    sum = sum + value;
}
```

Same variable reuse ho raha hai.

```text
Space = O(1)
```

---

# Complexity Order

Generally better to worse:

```text
O(1)
↓
O(log n)
↓
O(n)
↓
O(n log n)
↓
O(n²)
↓
O(2^n)
```

Input bada hone par difference bahut bada ho jata hai.

---

# Final Mental Model

Time Complexity:

> Input badha to CODE KA KAAM kitna badha?

Space Complexity:

> Input badha to EXTRA MEMORY kitni badhi?

---

# Interview Explanation Example

Agar code array ko ek baar traverse karta hai:

> The time complexity is O(n) because we traverse all n elements once.
> The space complexity is O(1) because we only use a fixed number of variables and no extra data structure grows with the input size.

Agar new array bhi bana raha hai:

> The time complexity is O(n) because we traverse the input once.
> The space complexity is O(n) because the result array can contain up to n elements.

---

# Cheat Sheet

| Pattern | Complexity |
|---|---|
| Fixed operation | O(1) |
| Direct array index | O(1) |
| One full traversal | O(n) |
| Two full nested traversals | O(n²) |
| n users + m products | O(n + m) |
| n users × m products | O(nm) |
| Data half every step | O(log n) |
| n operations each doing log n work | O(n log n) |
| Fixed extra variables | O(1) space |
| Extra array/Map/Set grows with input | O(n) space |

---

# One Line Revision

```text
O(1)       → fixed work
O(log n)   → half / double each step
O(n)       → process every item once
O(n log n) → n items × log work
O(n²)      → every item × every item

Space O(1) → fixed extra memory
Space O(n) → extra memory grows with input
```
