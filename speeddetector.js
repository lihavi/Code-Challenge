function checkSpeed(speed){
    const speedlimit = 80;
    const kmPerPoint = 5;
    if(speed < speedlimit+kmPerPoint){
        console.log ("Ok");
        return ;
    }
    const points = Math.floor((speed.speedlimit)/kmPerPoint);
    if(points >=12) console.log("license suspended");
    else console.log("points",points);
}