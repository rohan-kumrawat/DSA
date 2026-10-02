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

// 3. Maximum Tracking

function findMax(nums: number[]): number {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

console.log(findMax([4, 7, 2, 10, 5]));

/*
nums = [4, 7, 2, 10, 5]

Start:
max = nums[0]

i = 1 → nums[i] = 7 → (7 > 4) = true → max = 7
i = 2 → nums[i] = 2 → (2 > 7) = false → max = 7
i = 3 → nums[i] = 10 → (10 > 7) = true → max = 10
i = 4 → nums[i] = 5 → (5 > 10) = false → max = 10

Final max = 10

Time Complexity = O(n)
Space Complexity = O(1)
 */

// 4. Minimum Tracking

function findMin(nums: number[]): number {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
}

console.log(findMin([4, 7, 2, 10, 5]));

/*
nums = [8, 3, 12, -2, 6]

Start:
min = nums[0]

i = 1 → nums[i] = 3 → (3<8) = true → min = 3
i = 2 → nums[i] = 12 → (12<3) = false → min = 3
i = 3 → nums[i] = -2 → (-2<3) = true → min = -2
i = 4 → nums[i] = 6 → (6<-2) = false → min = -2

Final min = -2

Time Complexity = O(n)
Space Complexity = O(1)
 */

// 5. Flag Pattern

function containsNegative(nums: number[]): boolean {
    let found = false;

    for (const num of nums) {
        if (num < 0) {
            found = true;
        }
    }

    return found;
}

console.log(containsNegative([4, 7, -2, 10, 5]));

/*
Start:
found = false

num = 4
4 < 0 → false
if block chalega hi nahi
found = false

num = 7
7 < 0 → false
if block nahi chalega
found = false

num = -2
-2 < 0 → true
found = true

num = 10
10 < 0 → false
if block nahi chalega
found wahi rahega = true

num = 5
5 < 0 → false
if block nahi chalega
found wahi rahega = true
 */

// 6. Index Tracking

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

console.log(findMaxIndex([8,3,12,6,20,5]));

/*

nums = [8, 3, 12, 6, 20, 5]

Start:
max = 8
maxIndex = 0

i = 1 → nums[i] = 3 → condition = false → max = 8 → maxIndex = 0
i = 2 → nums[i] = 12 → condition = true → max = 12 → maxIndex = 2
i = 3 → nums[i] = 6 → condition = false → max = 12 → maxIndex = 2
i = 4 → nums[i] = 20 → condition = true → max = 20 → maxIndex = 4
i = 5 → nums[i] = 5 → condition = false → max = 20 → maxIndex = 4

Final max = 20
Final maxIndex = 4

Time Complexity = O(n)
Space Complexity = O(1)

 */

// 7. Swapping

function swapExample(): void {
    let a = 10;
    let b = 20;

    const temp = a;
    a = b;
    b = temp;

    console.log(a, b);
}

swapExample();

/*

Start:
a = 10
b = 20

temp = 10
a = 20
b = 10

Final:
a = 20
b = 10

Time Complexity = O(1)
Space Complexity = O(1)

 */

// 8. Swap Array Elements

function swapArrayElements(
    nums: number[],
    i: number,
    j: number
): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const nums = [5, 20, 30, 40];

swapArrayElements(nums, 1, 3);

console.log(nums);

/*

nums = [5, 8, 12, 20, 30]
i = 0
j = 4

Start:
nums = [5,8,12,20,30]

temp = nums[i]
nums[i] = nums[j]
nums = [30,8,12,20,30]

nums[j] = temp
nums = [30,8,12,20,5]

Final nums = [30,8,12,20,5]

Time Complexity = O(1)
Space Complexity = O(1)

 */

// 9. Reverse Array In-Place

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

const arr = [1, 2, 3, 4, 5];

reverseArray(arr);

console.log(arr);

/*

nums = [10, 20, 30, 40, 50, 60]

Start:
left = 0
right = 5
nums = [10, 20, 30, 40, 50, 60]

Iteration 1:
nums[left] = 10
nums[right] = 60
swap ke baad nums = [60, 20, 30, 40, 50, 10]
left = 1
right = 4

Iteration 2:
nums[left] =20
nums[right] = 50
swap ke baad nums = [60, 50, 30, 40, 20, 10]
left = 2
right = 3

Iteration 3:
nums[left] = 30
nums[right] = 40
swap ke baad nums = [60, 50, 40, 30, 20, 10]
left = 3
right = 2

Final nums = [60, 50, 40, 30, 20, 10]

Time Complexity = O(n)
Space Complexity = O(1)

 */

// 10. Second Largest

function findSecondLargest(nums: number[]): number | null {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of nums) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }

        else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) {
        return null;
    }

    return secondLargest;
}

console.log(findSecondLargest([8, 3, 12, 6, 20, 5]));

/*



 */