
var topics = ["HTML","CSS","GIT","JS"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];


function listTopics() {
    for (x=0; x<topics.length;x++){
        console.log(topics[x]);
    }   
}

function selectTopics(){
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
       } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'GIT') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JS') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}



// var shapes = ["triangle","square","pentagon","circle"]
// var studentInfo =["lu",54,true];
// console.log(shapes[0]);
// for(var x = 0; x<shapes.length;x++){
//     console.log(shapes[x]);
// }

selectTopics();
// listTopics();


// function hellWorld(){
//    console.log("Hello, World, I'm a function")
// }
// hellWorld();