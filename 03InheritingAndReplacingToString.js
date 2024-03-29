function toStringExtension() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {

            super(name, email);
            this.subject = subject
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student

    }

}
toStringExtension();

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan", 'ivan@ivan.com', "Graphics");
let p = new Person("Pesho", 'Pesho@pesh.com');

console.log(t);
console.log(p)