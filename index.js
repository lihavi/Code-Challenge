//declaring function mark,grade
//input should be between 0-100
let mark = 100;
let grade;
//use if conditional statements so as to output the correct grade
//mark should be greater than or equal to 79 in order to output grade A
if (mark >= 79){
    grade = 'A';
}
else if (mark >= 60){
    grade = 'B'
}
else if (mark >= 49){
    grade = 'C'
}
else if (mark >= 40){
    grade = 'D'
}
else {
    grade = 'E'
}
console.log(grade);