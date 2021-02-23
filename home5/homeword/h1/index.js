class People{
    name
    age
    job
    id
    constructor(name,age,job,id){
        this.name=name
        this.age=age 
        this.job=job 
        this.id=id 
    }
}
class Family {
    numOfPeople
    address
    listPeople
    constructor(address){
        this.address=address
        this.numOfPeople=0
        this.listPeople=[]
    }
    addPeople(people){
        this.listPeople.push(people)
    }
}
const child= new People('tri',5,'antrom',123);
const dad= new People('dad',35,'antrom',123);
const mom= new People('mom',35,'antrom',123);
const myFamily= new Family('22C')
myFamily.addPeople(child)
myFamily.addPeople(dad)
myFamily.addPeople(mom)
console.log(myFamily);
