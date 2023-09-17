/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var getSize = function (head) {
    let node = head, counter = 0;
    while (node != null) {
        counter++;
        node = node?.next;
    };
    return counter;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let node = head, next = null, prev = null;
    let n = getSize(head);

    for (let i = 0; i < n; i++) {
        next = node?.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
};