// Your code here
class Cat {
    constructor(name,sex){
        this.sex=sex;
        this.name=name;

    }
    speak(){
         return `${this.name} says meow!`
        }
};
cat = new Cat("Sasha", "female")
cat.speak()

class Dog {
    constructor(name,sex){
        this.sex=sex;
        this.name=name;

    }
    speak(){
        return `${this.name} says woof!`}
};
   const dog = new Dog('Rufio','male')
  dog.speak()

class Bird {
    constructor(name,sex){
        this.sex=sex;
        this.name=name;
    }
    speak(){
        if ( this.sex!=='male'){
        return `${this.name} says squawk!`
        }
        else return `It's me! ${this.name}, the parrot!`
    }
    
}
 const bird =new Bird('Pablo','male')
const bird2=new Bird('Mable','lala')
bird2.speak()
bird.speak()