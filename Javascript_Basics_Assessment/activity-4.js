let student = ['Ben','Angelica','Rigo'];
for(let i =0; i < 3; i++){
    const newStudent = prompt('Please enter a new student name');
    student.push(newStudent);
}
for(let j = 0; j <student.length; j++){
    console.log(student[j]);
}