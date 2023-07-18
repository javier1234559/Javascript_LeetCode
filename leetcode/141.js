"use strict";
//Fast and Slow Pointer
//141. Linked List Cycle
//https://leetcode.com/problems/linked-list-cycle/
Object.defineProperty(exports, "__esModule", { value: true });
//ListNode
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function hasCycle(head) {
    //base case
    if (head === null || head.next === null)
        return false;
    //define fast and slow pointer
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            return true;
    }
    return false;
}
;
//head = [3,2,0,-4]
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next.next.next;
console.log(hasCycle(head));
