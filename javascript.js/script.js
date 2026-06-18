const faqs = [

{
    keywords: ["ai", "artificial intelligence"],
    answer: "Artificial Intelligence (AI) enables machines to perform tasks that normally require human intelligence."
},

{
    keywords: ["machine learning", "ml"],
    answer: "Machine Learning is a branch of AI that allows systems to learn from data and improve automatically."
},

{
    keywords: ["data science"],
    answer: "Data Science is the process of extracting useful insights and knowledge from data."
},

{
    keywords: ["deep learning"],
    answer: "Deep Learning is a subset of Machine Learning that uses neural networks with many layers."
},

{
    keywords: ["nlp", "natural language processing"],
    answer: "NLP enables computers to understand and process human language."
},

{
    keywords: ["chatbot"],
    answer: "A chatbot is a software application that interacts with users through text or voice."
},

{
    keywords: ["python"],
    answer: "Python is the most popular programming language for AI, ML, and Data Science."
},

{
    keywords: ["tensorflow"],
    answer: "TensorFlow is an open-source Machine Learning framework developed by Google."
},

{
    keywords: ["pandas"],
    answer: "Pandas is a Python library used for data manipulation and analysis."
},

{
    keywords: ["numpy"],
    answer: "NumPy is a Python library used for numerical and scientific computing."
},

{
    keywords: ["dataset", "data"],
    answer: "A dataset is a collection of data used for training and testing machine learning models."
},

{
    keywords: ["supervised learning"],
    answer: "Supervised Learning uses labeled data to train machine learning models."
},

{
    keywords: ["unsupervised learning"],
    answer: "Unsupervised Learning finds patterns in data without labeled outputs."
},

{
    keywords: ["codealpha", "internship"],
    answer: "CodeAlpha Internship helps students gain practical experience by working on real-world projects."
},

{
    keywords: ["project"],
    answer: "Projects help students apply theoretical concepts to practical applications."
},

{
    keywords: ["html"],
    answer: "HTML is used to create the structure of web pages."
},

{
    keywords: ["css"],
    answer: "CSS is used to style and design web pages."
},

{
    keywords: ["javascript", "js"],
    answer: "JavaScript adds functionality and interactivity to websites."
},

{
    keywords: ["career", "job"],
    answer: "AI, Machine Learning, and Data Science offer excellent career opportunities in the technology industry."
}

];

function sendMessage(){

    const input = document.getElementById("userInput");
    const userText = input.value.trim().toLowerCase();

    if(userText === ""){
        return;
    }

    addMessage(userText, "user-message");

    let response = "Sorry, I couldn't find an answer for that question.";

    for(let faq of faqs){

        for(let keyword of faq.keywords){

            if(userText.includes(keyword)){
                response = faq.answer;
                break;
            }
        }

        if(response !== "Sorry, I couldn't find an answer for that question."){
            break;
        }
    }

    setTimeout(() => {
        addMessage(response, "bot-message");
    }, 500);

    input.value = "";
}

function addMessage(text, className){

    const chatBox = document.getElementById("chatBox");

    const msg = document.createElement("div");

    msg.classList.add(className);

    msg.innerText = text;

    chatBox.appendChild(msg);

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});