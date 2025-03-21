let obj={
    name: "Santosh",
    age: 28
}

function personInfo(){
    console.log(`${this.name} has age ${this.age}`);
}

personInfo.call(obj)