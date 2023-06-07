/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head.next != null) {
    arr.push(head.val);
    head = head.next;
  }
  arr.push(head.val);
  for (let i = 0, j = arr.length - 1; j >= 0; i++, j--) {
    if (arr[i] != arr[j]) return false;
  }
  return true;
};
