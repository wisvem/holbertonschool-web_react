interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
};

const student1: Student = {
    firstName: "Juan",
    lastName: "Gonzales",
    age: 30,
    location: "Bogota"
};
const student2: Student = {
    firstName: "Pedor",
    lastName: "Gonzales",
    age: 30,
    location: "Bogota"
};

let studentsList: Student[] = [student1, student2];
