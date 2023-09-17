/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let prev = null, node = head;
    while (node != null && head != null) {
        if (node.val == val) {
            //remove node
            if (prev != null) {
                prev.next = node.next;
                node = node.next;
            } else {
                head = head.next;
                node = head;
            }
        } else {
            prev = node;
            node = node.next;
        }
    }

    return head;
};