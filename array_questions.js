 const questions = [
    {
      question: "What is Cost Accounting?",
        options: [
        "Recording daily expenses",
        "Tracking production cost",
        "Bank reconciliation",
        "Marketing analysis"
    ],
        answer: "Recording daily expenses"
    },

    {
        question: "What is Manufacturing Account?",
        options: [
            "Manufacturing Account", 
        "Trading Account",
         "Profit and Loss Account",
          "Balance Sheet"
        ],
        answer: "Manufacturing Account"
    },

    {
        question: "What is Quantum Physics?",
        options: ["Quantum Physics", "Classical Physics", "Relativity", "Thermodynamics"],
        answer: "Quantum Physics"
    },
    {
        question: "Expatiate the concept called: Momentum?",
        options: ["Momentum", "Inertia", "Force", "Energy"],
        answer: "Momentum"
    },
    {
        question: "Clarify the term Morphology?",
        options: ["Morphology", "Anatomy", "Physiology", "Ecology"],
        answer: "Morphology"
    },
    {
        question: "Define Financial Accounting?",
        options: ["Financial Accounting", "Cost Accounting", "Management Accounting", "Tax Accounting"],
        answer: "Financial Accounting"
    },
     {
        question: "Explain the concept Entrepreneurship?",
        options: ["Entrepreneurship", "Management", "Marketing", "Finance"],
        answer: "Entrepreneurship"
    },
    {
        question: "What is Industrial Extension?",
        options: ["Industrial Extension", "Industrial Revolution", "Industrialization", "Industrial Policy"],
        answer: "Industrial Extension"
    },
    {
        question: "What is Biology?",
        options: ["Biology", "Chemistry", "Physics", "Mathematics"],
        answer: "Biology"
    },
    {
        question: "What is Physics?",
        options: ["Physics", "Chemistry", "Biology", "Mathematics"],
        answer: "Physics"
    }
];


const quesText = document.getElementById("question");
const optionText = document.getElementById("options");
const answerText = document.getElementById("answers");
const showBtn = document.getElementById("showAns");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const submitBtn = document.getElementById("submitBtn");
const submitMsg = document.getElementById("submitMsg");
const counterText = document.getElementById("quesCounter");



//This line stores the selected options everytime the options are loaded on the user interface

let selectedAnswers = new Array(questions.length).fill(null);
document.getElementById("options").addEventListener("change", function(e){
    selectedAnswers[numIndex] = e.target.value;
});




let numIndex = 0;


function displayQuestion(){
    
    quesText.innerHTML = questions[numIndex].question;
    counterText.innerHTML = `Question ${numIndex + 1} of ${questions.length}`;
    optionText.innerHTML = "";
    for(let i = 0; i < questions[numIndex].options.length; i++){
        let option = questions[numIndex].options[i];
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}"
        ${selectedAnswers[numIndex] === option ? "checked": ""}>
        ${option}`;
        
        optionText.appendChild(optionElement);
    }   
}
 displayQuestion();





 function displayAnswers(){
    answerText.innerHTML = `Correct Answer: ${questions[numIndex].answer}`;
}







 next.onclick = function(){
    if(numIndex < questions.length - 1){
       numIndex++;
     displayQuestion();
     displayAnswers();
     
    }
 }



prev.onclick = function(){
 if(numIndex > 0){
    numIndex--;
    displayQuestion();
    displayAnswers();
    
 } 
}

let textVisible = false;

showBtn.onclick = function(){
    if(textVisible){
        answerText.style.display = "none";
        showBtn.innerText = "Show Answer";
    } else {
        answerText.style.display = "block";
        displayAnswers();
        showBtn.innerText = "Hide Answer";
    }
    textVisible = !textVisible;

}


submitBtn.onclick = function(){ 
    let score = 0;
    let unanswered = 0;
    for(let i = 0; i < questions.length; i++){


        if(selectedAnswers[i] === null){
            unanswered++;
            
        }else if(selectedAnswers[i] === questions[i].answer){
            score++;
        }

        

    
    }



if (unanswered > 0) {
    submitMsg.innerHTML = `You skipped ${unanswered} questions.
     Your score is ${score}/${questions.length}`;
}
else{
submitMsg.innerHTML = `Your score is: ${score}/${questions.length}`;

}

}