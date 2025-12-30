
console.log("Lab-01")

//fullName: ten day du (string)
const fullName = "Nguyen Do Khanh";

//birthYear: nam sinh (number)
const birthYear = 2004;

const today = new Date();
const currentYear = today.getFullYear();

//isStudent: true/false
const isStudent = false;

const calculateAge = currentYear - birthYear;

console.log(`
    Ten: ${fullName}
    Tuoi: ${calculateAge}
    Sinh vien: ${!isStudent}
    `);
