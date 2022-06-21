class stack{
    constructor(){
        this.array=[]
    }

    append(data){
        this.array.push(data)
    }
    display(){
        console.log(this.array)
    }
    peek(){
        console.log(this.array[this.array.length -1])
    }
    remove(){
        this.array.pop()
    }
}

const mystack = new stack();
mystack.append(5)
mystack.append(1)
mystack.append(8)
mystack.append(1)
mystack.append(2)
mystack.peek()
mystack.remove()
mystack.display()