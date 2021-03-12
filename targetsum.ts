 const twoSum = (nums, total) => {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === total) {
          return [nums[i], nums[j]];
        }
      }
    }
  };
console.log(twoSum([3,5,-4,8,11,1,-1,6], 10)); 
