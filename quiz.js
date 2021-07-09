Questions: [
	{
		id: String,
		presentation: String,
		possibleAnswers: ArrayOfStrings,
		correctAnswers : ArrayOfStrings
		
	}
]
var formInput = {
	Questions: [
	{
		id: "MultipleChoiceSingleAnswerQuestionOne",
        question:"What is the only book Oscar Wilde ever wrote?",
        presentation: "inputSingleAnswer",
        possibleAnswers: ["The Importance of Being Earnest","Brave New World","The Thorn Birds","The Picture of Dorian Grey"],
        correctAnswer : ["The Picture of Dorian Grey"]	
	},
	{
        id: "MultipleChoiceSingleAnswerQuestionTwo",
        question:"What year did Oscar Wilde die?",
        presentation: "inputSingleAnswer",
        possibleAnswers: ["1800","1789","1913","1902","1830"],
        correctAnswer : ["1900"]	  
    },
    {
        id: "MultipleChoiceDoubleAnswerQuestionThree",
        question:"What were the names of Oscar Wilde's children?",
        presentation: "inputDoubleAnswer",
        possibleAnswers: ["John Wilde","Brandon Wilde","Cyril Holland","Vyvyan Holland","Earnest Wilde"],
        correctAnswer : ["Cyril Holland","Vyvyan Holland"]
    },
    {
        id: "MultipleChoiceDoubleAnswerQuestionFour",
        question:"Which are Oscar Wilde's syblings?",
        presentation: "inputDoubleAnswer",
        possibleAnswers: ["Johnnie Wilde","Patrick Wilde","Willy Wilde","Harry Wilde","Henry Wilde"],
        correctAnswer : ["Willy Wilde","Henry Wilde"]
    },
    {
        id: "MultipleChoiceDoubleAnswerQuestionFive",
        question:"Which of the following are Oscar Wilde's work?",
        presentation: "inputDoubleAnswer",
        possibleAnswers: ["Importance of Being Earnest","Lady Windermere's Fan","Through the Looking Glass","Hamlet","Brave New World"],
        correctAnswer : ["Importance of Being Earnest","Lady Windermere's Fan"]
    },
    {
        id: "MultipleChoiceSingleAnswerQuestionSix",
        question:"At what age did the author die?",
        presentation: "inputSingleAnswer",
        possibleAnswers: ["65","32","51","46","31"],
        correctAnswer : ["46"]
    },
    {
    id: "MultipleChoiceSingleLineAnswerQuestionSeven",
    question: "What is the first name of Oscar Wilde's wife?",
    presentation: "inputSingleLineAnswer",
    correctAnswer : ["Katie"]
    },
    {
        id: "MultipleChoiceMultiLineAnswerQuestionEight",
    question: "What is the first sentence of The Picture of Dorian Grey?"  ,
    presentation: "inputMultiLineAnswer",
    correctAnswer : ["The studio was filled with the rich odour of roses."]
    }

	]	
}
var globalHtml = "";
//foreach element in Questions, do:
	// create a new html element based off the properties:	
	var htmlElement = "typeA";
    var htmlElement = "typeB";
    var htmlElement = "typeC";
    var htmlElement = "typeD";
	switch(presentation)
	{
		case inputSingleAnswer:
			typeA = <input type="radio" values='{possibleAnswers}'/>;
            break;
        case inputDoubleAnswer:
            typeB =<input type="checkbox" values='{possibleAnswers}'/>;
            break;
        case inputSingleLineAnswer:
            typeC = <input type="text" value=""/>
        case inputMultiLineAnswer:
            typeD = < input type= "textarea" rows="4" cols="50" value=""/>
           break; 
    }
  