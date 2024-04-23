class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let l1 = new LinkedList(node1)
