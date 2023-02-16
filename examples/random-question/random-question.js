// Question array

const question = [
    "What's your favorite dinosaur and why?",
    "What video game(s) have you played lately?",
    "What bands have you listened to recently? Any favorites?",
    "What is a TV show we should all watch?",
    "Is a hotdog a sandwich? why or why not?",
    "What languages do you know?",
    "What is your hidden talent?",
    "What is a life hack you can't live without?",
    "What is your favorite dance move?",
    "What is your favorite color of the moment? Why?",
    "How would you describe your perfect day?",
    "What is your favorite museum and why?",
    "What location have you always wanted to visit?"
];

const bgColor = [
    "#f79e92",
    "#f7ca92",
    "#f7e892",
    "#9cf792",
    "#92f7de",
    "#92d9f7",
    "#92a3f7"
];

function getNewQuestion() {
    var questionNum = Math.floor(Math.random() * (question.length - 1));
    var bgColorNum = Math.floor(Math.random() * (bgColor.length - 1));
    
    document.getElementById("question").innerHTML = '<div style="background-color: ' + bgColor[bgColorNum] + ';">' + question[questionNum] + '</div>';
    document.getElementById("question-btn").innerHTML = '<button onclick="getNewQuestion()">Get another question</button>';
}