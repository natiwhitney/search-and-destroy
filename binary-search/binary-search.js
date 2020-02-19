'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let n = array.length

  // bases
  if (!n) return false;
  if (n === 1 && array[0] === target) return true;

  // calculate midpoint
  const mid = Math.floor(n/2)
  const val = array[mid]
  if (val === target) return true;

  let leftHalf;
  // 3 is a special case, search left half only
  if (n === 2) {
    leftHalf = array.slice(0,1)
    return binarySearch(leftHalf, target)
  }

  // for n >=3, apply general case
  if (target < val) {
    leftHalf = array.slice(0, mid)
    return binarySearch(leftHalf, target)
  } else {
    let rightHalf = array.slice(mid + 1, n)
    return binarySearch(rightHalf, target)
  }

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
