class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      var node = new Node(element);
  
      var current;
  
      if (this.head == null) {
          this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
}

let linked = new LinkedList()

 // insert element at the position index of the list
 insertAt(element, index) {
  if (index < 0 || index > this.size)
    return console.log("Please enter a valid index");
  else {
    // creates a new node
    var node = new Node(element);
    var current, prev;

    current = this.head;

    // add the element to the first index
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      current = this.head;
      var it = 0;

      // iterate over the list to find
      // the position to insert
      while (it < index) {
        it++;
        prev = current;
        current = current.next;
      }

      // adding an element
      node.next = current;
      prev.next = node;
    }
    this.size++;
  }
}

// remove an element from the specified location
removeFrom(index) {
  if (index < 0 || index >= this.size)
    return console.log("Please Enter a valid index");
  else {
    var current,
      prev,
      it = 0;
    current = this.head;
    prev = current;

    // deleting first element
    if (index === 0) this.head = current.next;
    else {
      // iterate over the list to the
      // position to remove an element
      while (it < index) {
        it++;
        prev = current;
        current = current.next;
      }

      // remove the element
      prev.next = current.next;
    }
    this.size--;

    // return the remove element
    return current.element;
  }
}

// remove a given element from the list
removeElement(element) {
  var current = this.head;
  var prev = null;

  // iterate over the list
  while (current != null) {
    // comparing element with current
    // element if found then remove
    // and return true
    if (current.element === element) {
      if (prev == null) this.head = current.next;
      else {
        prev.next = current.next;
      }
      this.size--;
      return current.element;
    }
    prev = current;
    current = current.next;
  }
  return -1;
}

// find the index of element
indexOf(element) {
  var count = 0;
  var current = this.head;

  // iterate over the list
  while (current != null) {
    // compare each element of the list
    // with given element
    if (current.element === element) return count++;
    count++;
    current = current.next;
  }

  // not found
  return -1;
}

// checks the list for empty
isEmpty() {
  return this.size == 0;
}

// gives the size of the list
sizeOfList() {
  console.log(this.size);
}

// prints the list items
printList() {
  var current = this.head;
  var str = "";
  while (current) {
    str += current.element + " ";
    current = current.next;
  }
  console.log(str);
}
}

// creating an object for the
// LinkedList class
var ll = new LinkedList();

// testing isEmpty on empty list
// return true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// return 1
console.log(ll.sizeOfList());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// return 10 20 30 40 50
ll.printList();

// print 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// return 3
console.log("Index of 40 is " + ll.indexOf(40));

// insert 60 at second position
// ll now is contains 10 20 30 40
ll.insertAt(60, 2);

// after insert now contains 10 20 60 30 40
ll.printList();

// return false
console.log("is List Empty ? " + ll.isEmpty());

// remove element from the list by index
console.log(ll.removeFrom(3));

// print 10 20 60 40
ll.printList();


console.log(linked.head)
linked.add(5)
console.log(linked.head)
linked.add(10)
console.log(linked.head)
linked.add(20)
console.log(linked.head)