
/*
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null
        this.tail = null
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    let newNode = new DLLNode(data)
    if(this.head == null){
        this.head = this.tail = newNode;
        return this
    }
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    return this
}
    insertAtBack(data) {
    let newNode = new DLLNode(data)
    if(this.head == null){
        this.head = this.tail = newNode;
        return this
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    return this
    }
}

myFirstDLL = new DoublyLinkedList();
myFirstDLL.insertAtFront(10)
myFirstDLL.insertAtFront(5)
myFirstDLL.insertAtBack(7)
console.log(myFirstDLL.head)
console.log(myFirstDLL.tail)