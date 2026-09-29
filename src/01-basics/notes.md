# DSA Basics

## 1. Variable as State

DSA me variable aksar sirf value store nahi karta,
balki ye batata hai ki processing ke dauran abhi tak kya hua hai.

Examples:

- count → abhi tak kitne items mile
- sum → abhi tak total kitna hua
- max → abhi tak sabse bada element
- min → abhi tak sabse chhota element
- found → target mila ya nahi


## 2. Counter

Counter ka use kisi event ki quantity count karne ke liye hota hai.

Example:

```ts
let count = 0;

for (const num of nums) {
    if (num % 2 === 0) {
        count++;
    }
}