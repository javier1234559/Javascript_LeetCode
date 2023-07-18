//Fast and Slow Pointer
//141. Linked List Cycle
//https://leetcode.com/problems/linked-list-cycle/

//ListNode
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function hasCycle(head: ListNode | null): boolean {
  //base case
  if (head === null || head.next === null) return false;

  //define fast and slow pointer
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

//head = [3,2,0,-4]
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next.next.next;
console.log(hasCycle(head));

