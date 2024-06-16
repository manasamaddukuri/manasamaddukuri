const marks = 75;
let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Csc";
        break;
    case marks >= 80:
        Branch = "Mech engg";
        break;
    case marks >= 70:
        Branch = "Chem engg";
        break;
    case marks >= 60:
        Branch = "ECE";
        break;
    case marks >= 50:
        Branch = "Civil engg";
        break;
    default:
        Branch = "Agri engg";
        break;
}
console.log(`Student Branch name is : ${Branch}`);


//
let trafficLight = "green";
let message = ""
 
switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "ready to stop";
        break;
    case "green":
        message = "continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}
 
console.log(message);