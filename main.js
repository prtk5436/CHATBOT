// These are words/phrases the user could type in

const trigger = [
  ["hi", "hii", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["what are the departments in engineering",
    "tell me the departments of engineering",
    "what are the different departments of engineering"
  ],
  ["which department is best",
    "which department is good for me",
    "which department you suggest me to take addmission"
  ],
  //civil
  ["leadership creativity strong maths drawing",
    "creativity strong maths drawing strong leadership",
    "strong maths drawing leadership creativity",
    "drawing leadership creativity strong maths"
  ],
  //mech
  ["strong technical problem solver team working drawing",
    "problem solver team working drawing strong technical",
    "team working drawing strong technical problem solver",
    "drawing strong technical problem solver team working"
  ],
  //CM 
  ["strong technical working with hardwares coding organisational",
    "working with hardwares coding organisational strong technical",
    "coding organisational strong technical working with hardwares",
    "organisational strong technical working with hardwares coding"
  ],
  //IT 
  ["strong technical working with softwares coding organisational",
    "working with softwares coding organisational strong technical",
    "coding organisational strong technical working with softwares",
    "organisational strong technical working with softwares coding"
  ],
  //ELECT 
  ["problem solver critical thingking basic circuit knowledge strong maths",
    "critical thingking basic circuit knowledge strong maths problem solver",
    "basic circuit knowledge strong maths problem solver critical thingking",
    "strong maths problem solver critical thingking basic circuit knowledge"
  ],
 ["bro"],
  ["what", "why", "how", "where", "when"]
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ["Hello!", "hii..!", "Hi!", "Hey!", "Hi there!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Bye", "Goodbye", "See you later"],
  ["Chocalate Cake", "Pizza"],
  ["Mechanical, Electrical, IT, Computer, Civil, which one do you like??", "Computer, Civil,Mechanical ,Electrical, IT, which one do you like??", "Electrical, IT,Computer, Civil,Mechanical , which one do you like??"],
  ["please tell me any 4 your skills(like 1.leadership, 2.creativity, 3.strong maths, 4.strong technical, 5.problem solver, 6.team working, 7.drawing, 8.coding, 9.organisational, 10.working with softwares, 11.critical thingking, 12.basic circuit knowledge, 13.working with hardwares)",
    "please select any 4 skills which you like(like 1.leadership, 2.creativity, 3.strong maths, 4.strong technical, 5.problem solver, 6.team working, 7.drawing, 8.coding, 9.organisational, 10.working with softwares, 11.critical thingking, 12.basic circuit knowledge, 13.working with hardwares)",
    "please enter any 4 skills which you really like(like 1.leadership, 2.creativity, 3.strong maths, 4.strong technical, 5.problem solver, 6.team working, 7.drawing, 8.coding, 9.organisational, 10.working with softwares, 11.critical thingking, 12.basic circuit knowledge, 13.working with hardwares)",
    "enter any 4 skills that you have(like 1.leadership, 2.creativity, 3.strong maths, 4.strong technical, 5.problem solver, 6.team working, 7.drawing, 8.coding, 9.organisational, 10.working with softwares, 11.critical thingking, 12.basic circuit knowledge, 13.working with hardwares)"],
  ["Civil is best for you!!", "You can take admission in Civil", "You can go with Civil as your skills perfectly matches...", "According to your skills, I suggest Civil department is good for you"],
  ["Mechanical is best for you!!", "You can take admission in Mechanical", "You can go with Mechanical as your skills perfectly matches...", "According to your skills, I suggest Mechanical department is good for you"],
  ["Computer Dept is best for you!!", "You can take admission in Computer Dept", "You can go with Computer Dept as your skills perfectly matches...", "According to your skills, I suggest Computer department is good for you"],
  ["IT is best for you!!", "You can take admission in IT", "You can go with IT as your skills perfectly matches...", "According to your skills, I suggest IT department is good for you"],
  ["Electrical is best for you!!", "You can take admission in Electrical", "You can go with Electrical as your skills perfectly matches...", "According to your skills, I suggest Electrical department is good for you"],
  ["Bro!"],
  ["Yes?"]
];

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening..."
];

// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input")
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
  debugger
}
