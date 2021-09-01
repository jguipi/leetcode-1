/**
 * Definition for singly-linked list.
 *
 * */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode(0);
  let carryNumber = false;
  let prevNumber;
  let headPtr = newList;

  while (l1 !== null || l2 !== null) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;

    let sum = x + y;
    if (carryNumber) {
      sum += 1;
      carryNumber = false;
    }

    if (sum > 9) {
      carryNumber = true;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    newList.val = sum % 10;
    prevNumber = newList;
    newList.next = new ListNode(0);
    newList = newList.next;
  }
  prevNumber.next = null;
  if (carryNumber) {
    prevNumber.next = new ListNode(1);
  }
  return headPtr;
};

console.log(addTwoNumbers(new ListNode(2, [4, 3]), new ListNode(5, [6, 4])));
