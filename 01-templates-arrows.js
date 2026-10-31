import { students } from "./data.js";

const describe = students => `${students.name} (${students.city}):${students.grade}`;

for(const student of students) {
    console.log(describe(student));
}