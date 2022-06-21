class node{
    constructor(data){
        this.value = data
        this.next = null;         
    }
}

class Queue{
    constructor(){
        this.first= null;
        this.last = null;
        this.length = 0;

    }

    Enqueue(data){
        const newNode = new node(data);
        if(this.length ==0){
            this.first = newNode;
            this.last = newNode;
            this.length++
        }
        else{
            this.last.next = newNode;
            this.last = newNode
            this.length++
        }
    }

    display(){
        console.log(this.first);
        console.log(this.last); 
    }
    dequeue(){
        if(this.length==0){console.log("the queue is already empty")}
        else this.first = this.first.next
             this.length--;
    }
}

const myQueue = new Queue()
myQueue.Enqueue(1);
myQueue.Enqueue(2);
myQueue.Enqueue(3);
myQueue.dequeue()
myQueue.display()
