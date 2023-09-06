/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(); // Create a dummy node as the head of the merged list
    let mergedPtr = dummy; // Pointer to iterate over the merged list
    let ptr1 = list1; // Pointer for list1
    let ptr2 = list2; // Pointer for list2

    // Iterate over the lists until both pointers reach the end
    while (ptr1 && ptr2) {
        if (ptr1.val <= ptr2.val) {
            mergedPtr.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            mergedPtr.next = ptr2;
            ptr2 = ptr2.next;
        }
        mergedPtr = mergedPtr.next;
    }

    // Append the remaining nodes of list1 or list2
    if (ptr1) {
        mergedPtr.next = ptr1;
    } else if (ptr2) {
        mergedPtr.next = ptr2;
    }

    // Return the head of the merged list
    return dummy.next;
};