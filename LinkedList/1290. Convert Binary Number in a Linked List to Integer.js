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
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let node = head, n = getSize(head), result = 0;
    n--;
    do {
        result += parseInt(Math.pow(2, n) * parseInt(node.val));
        console.log(result, node.val, n)
        node = node.next;
        n--;
    } while (node != null);
    return result;
};