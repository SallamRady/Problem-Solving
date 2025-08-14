function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // If either list is empty, there is no intersection
    if (!headA || !headB) return null;
    
    // Initialize two pointers
    let pointerA = headA;
    let pointerB = headB;
    
    // Loop until we find the intersection or confirm there is none
    // When a pointer reaches the end of its list, redirect it to the beginning of the other list
    // This way, both pointers will travel the same total distance before meeting
    while (pointerA !== pointerB) {
        // Move to the next node or to the beginning of the other list if at the end
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    
    // At this point, pointerA is either at the intersection node or null (if no intersection)
    return pointerA;
};


// Helper function to create linked list from array
function createLinkedList(arr) {
    if (!arr || arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to create test cases with intersections
function createIntersectionTestCase(listAVals, listBVals, intersectVal, skipA, skipB) {
    // Create the lists without connecting them yet
    const headA = createLinkedList(listAVals);
    const headB = createLinkedList(listBVals);
    
    // If no intersection, return both lists as is
    if (intersectVal === 0) return { headA, headB };
    
    // Navigate to the node before intersection in both lists
    let pointerA = headA;
    for (let i = 0; i < skipA - 1; i++) {
        if (pointerA) pointerA = pointerA.next;
    }
    
    let pointerB = headB;
    for (let i = 0; i < skipB - 1; i++) {
        if (pointerB) pointerB = pointerB.next;
    }
    
    // Create the intersection part
    const intersectionValues = listAVals.slice(skipA);
    if (intersectionValues.length > 0) {
        const intersectionList = createLinkedList(intersectionValues);
        
        // Connect both lists to the intersection
        if (pointerA) pointerA.next = intersectionList;
        if (pointerB) pointerB.next = intersectionList;
    }
    
    return { headA, headB };
}

// Test case 1: Lists intersect at node with value 8
const test1 = createIntersectionTestCase(
    [4, 1, 8, 4, 5],     // List A values
    [5, 6, 1, 8, 4, 5],  // List B values
    8,                   // Intersection value
    2,                   // Skip A nodes
    3                    // Skip B nodes
);
console.log("Test Case 1 result:", getIntersectionNode(test1.headA, test1.headB)?.val);

// Test case 2: Lists intersect at node with value 2
const test2 = createIntersectionTestCase(
    [1, 9, 1, 2, 4],     // List A values
    [3, 2, 4],           // List B values
    2,                   // Intersection value
    3,                   // Skip A nodes
    1                    // Skip B nodes
);
console.log("Test Case 2 result:", getIntersectionNode(test2.headA, test2.headB)?.val);

// Test case 3: Lists do not intersect
const test3 = createIntersectionTestCase(
    [2, 6, 4],           // List A values
    [1, 5],              // List B values
    0,                   // No intersection
    0,                   // Skip A nodes (not used)
    0                    // Skip B nodes (not used)
);
console.log("Test Case 3 result:", getIntersectionNode(test3.headA, test3.headB)?.val || "No intersection");
