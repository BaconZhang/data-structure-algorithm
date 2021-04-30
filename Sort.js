/**
 * 冒泡排序
 * @param {number[]} nums
 */
function bubbleSort(nums) {
  if (nums.length < 2) return nums
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length -i - 1; j++) {
      if (nums[j] > nums[j+1]) { // 交换
        let tmp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = tmp;
      }
    }
  }
  return nums
}

const nums = [5,6,4]
console.log(bubbleSort([...nums]))