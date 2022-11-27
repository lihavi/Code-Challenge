//declare a variable which will input student marks
//the input should be btwn 0-100
let mark = 100 ;
let grade;
//declare a variable called grade 
if( mark >= 79){
    grade = 'A';
}
//if the student mark is greater than 79 then grade A will be displayed
else if ( mark >= 60){
    grade = 'B';
}

else if ( mark >= 49){
    grade = 'C';
}
else if ( mark >= 40){
    grade = 'D';
}
else{
    grade = 'E';
}
console.log(grade)
