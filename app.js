// let Studenti = function(name, address, phone, course){
//     this.name = name;
//     this.address = address;
//     this.phone = phone;
//     this.course = course;

//     this.info = function(){
//         return  this.name + " " + this.address + "  " + this.phone + " " + this.course;
//     };
//     this.getInfo = function(){
//         return "Name: "+ this.name + "\n" +
//         "Adresa: " + this.address + "\n" + 
//         "Numar: " + this.phone + "\n" +
//         "Curs: " + this.course + "\n" 
//     }
// }
// let student1 = new Studenti("Andrei", "Sos. Oltului", 401234567, "Sport");
// let student1Info = student1.getInfo();
// let show1 = document.getElementById("demo")
// show1.innerHTML = student1Info;
// console.log(student1Info);

// let student2 = new Studenti("Alina", "Sos. Anges", 4023456723, "Limba Romana");
// let student2Info = student2.getInfo();
// let show2 = document.getElementById("demo1")
// show2.innerHTML = student2Info;
// console.log(student2Info);

// let student3 = new Studenti("Marian", "Sos. Berceni", 40234527823, "Geografie");
// let student3Info = student3.getInfo();
// let show3 = document.getElementById("demo2")
// show3.innerHTML = student3Info;
// console.log(student3Info);


class Student{
    constructor(name, address, phone, course){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.course = course;
    }
   
    getInfo(){
        return "Name: " + this.name + "\n" +
        "Adresa: " + this.address + "\n" +
        "Telefon: " + this.phone + "\n" +
        "Cors: " + this.course
    }
}
let student1 = new Student("Andrei", "SOS. Berceni", 4023456543, "Sport");
let show1 = document.getElementById("demo")
show1.innerHTML = student1.getInfo();
console.log(student1.getInfo());

let student2 = new Student("Alina", "Sos. Anges", 4023456723, "Limba Romana");
let show2 = document.getElementById("demo1")
show2.innerHTML = student2.getInfo();
console.log(student2.getInfo());

let student3 = new Student("Marian", "Sos. Berceni", 40234527823, "Geografie");
let show3 = document.getElementById("demo2")
show3.innerHTML = student3.getInfo();
console.log(student3.getInfo());
