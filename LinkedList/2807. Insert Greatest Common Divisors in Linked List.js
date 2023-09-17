/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function GCD(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    let slow = head, fast = head?.next;
    while (fast != null) {
        let gcdNode = new ListNode(GCD(slow.val, fast.val));
        slow.next = gcdNode;
        gcdNode.next = fast;

        slow = fast;
        fast = fast.next;
    }
    return head;
};