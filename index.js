const prompt= require("prompt-sync")()
var mark = prompt("Enter your mark")
//input mark should be btwn 0-100
//mark between 79 and 100
if(mark>79 && mark <= 100){
    console.log("A")
}
//mark btwn 60 and 79
else if(mark>=60 && mark <=79){
    console.log("B")
}
//mark btwn 49 and 40
else if(mark>=40 && mark<=59){
    console.log("C")
} 

else if(mark>=40 && mark<=49){
    console.log("D")
}
//mark less than 40
else{
    console.log("E")
}