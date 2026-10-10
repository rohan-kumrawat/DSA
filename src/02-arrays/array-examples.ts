// 1. Direct Index Access

function getElementAtIndex(
    nums: number[],
    index: number
): number | null {

    if (index < 0 || index >= nums.length) {
        return null;
    }

    return nums[index];
}

console.log(getElementAtIndex([10, 20, 30, 40, 50], 2));