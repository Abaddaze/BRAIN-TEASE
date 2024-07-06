// Get references to various DOM elements
const homeImag = document.querySelector(".homeImag");
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Event listener for Start button to show info box
start_btn.onclick = () => {
    homeImag.classList.add("hideInfo");
    info_box.classList.add("activeInfo");
}

// Event listener for Exit button to hide info box
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// Event listener for Continue button to show quiz box
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0); // Display first question
    queCounter(1); // Set question counter
    startTimer(time); // Start the timer
    startTimerLine(0); // Start the timer line
}

// Initialize variables for quiz functionality
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
time = 14; // Timer start time

// Get references to result box buttons
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Event listener for Restart button to reset quiz
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); // Show first question
    queCounter(que_numb); // Reset question counter
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    startTimer(time); // Restart timer
    startTimerLine(widthValue); // Restart timer line
    timeText.textContent = "Time Left"; // Reset timer text
    next_btn.classList.remove("show"); // Hide Next button
}

// Event listener for Quit button to reload the page
quit_quiz.onclick = () => {
    window.location.reload(); // Reload the page
}

// Get reference to Next button
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Event listener for Next button to show next question
next_btn.onclick = () => {
    timeCount.textContent = '15'; // Reset timer text
    if (que_count < 9) { // Check if there are more questions
        que_count++; // Increment question count
        que_numb++; // Increment question number
        showQuestions(que_count); // Show next question
        queCounter(que_numb); // Update question counter
        clearInterval(counterLine); // Clear timer line
        startTimer(time); // Restart timer
        startTimerLine(widthValue); // Restart timer line
        timeText.textContent = "Time Left"; // Reset timer text
        next_btn.classList.remove("show"); // Hide Next button
    } else {
        clearInterval(counter); // Clear timer
        startTimer(time); // Restart timer
        clearInterval(counterLine); // Clear timer line
        showResult(); // Show result box
    }
};

// Function to show questions
function showQuestions(index) {
    let questions = animalsQuestions; // Get questions from animals.js
    const queText = document.querySelector(".que_text");
    queText.innerHTML = `<span>${questions[index].numb}. ${questions[index].question}</span>`; // Display question text

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`; // Display options
    }
    option_list.innerHTML = optionTag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)"); // Add click event to options
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Function to handle option selection
function optionSelected(answer) {
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    let userAns = answer.textContent; // Get user answer
    let correcAns = animalsQuestions[que_count].answer; // Get correct answer
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {
        userScore += 1; // Increment user score
        answer.classList.add("correct"); // Highlight correct answer
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon
    } else {
        answer.classList.add("incorrect"); // Highlight incorrect answer
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon

        // Highlight correct answer
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Disable all options
    }
    next_btn.classList.add("show"); // Show Next button
}

// Function to show result box
function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = `<span>and congrats! , You got <p>${userScore}</p> out of <p>10</p></span>`;
        scoreText.innerHTML = scoreTag; // Display score
    } else if (userScore > 1) {
        let scoreTag = `<span>and nice , You got <p>${userScore}</p> out of <p>10</p></span>`;
        scoreText.innerHTML = scoreTag; // Display score
    } else {
        let scoreTag = `<span>and sorry , You got only <p>${userScore}</p> out of <p>10</p></span>`;
        scoreText.innerHTML = scoreTag; // Display score
    }
}

// Function to start the quiz timer
function startTimer(time) {
    counter = setInterval(timer, 1000); // Set interval to 1 second
    function timer() {
        timeCount.textContent = time; // Update timer text
        time--; // Decrement time
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; // Add leading zero if time is less than 9
        }
        if (time < 0) {
            clearInterval(counter); // Clear timer
            timeCount.textContent = "00"; // Reset timer text
            timeText.textContent = "Time Off"; // Update timer text

            const allOptions = option_list.children.length;
            let correcAns = animalsQuestions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
            }
        }
    }
}
