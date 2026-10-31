import { students } from "./data.js";

const contact = ({ name, email = "No Email" }) => `${name} ->${email}`;

for (const student of students) {
    console.log(contact(student));
}

const [firstStudent, secondStudent] = students;
console.log(`First:${firstStudent.name}, second:${secondStudent.name}`);