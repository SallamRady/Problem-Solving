/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var getSize = function (head) {
    let node = head, counter = 0;
    do {
        counter++;
        node = node.next;
    } while (node != null);
    return counter;
};
var getNode = function (head, idx) {
    let node = head, counter = 0;
    while (node != null && counter <= idx) {
        counter++;
        node = node.next;
    }
    return node;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let n = getSize(head);
    let node = getNode(head, Math.floor(n / 2.0)-1);
    head = node;
    console.log(n, Math.ceil(n / 2), node, head)
    return head;
};