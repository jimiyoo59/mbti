import { questions } from './data.js'

//요소 찾기
const progressValueEl = document.querySelector('.progress .value')
const questionEl = document.querySelector('.question')
const numberEl = document.querySelector('.number')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')


let currentNumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML= question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  expandProgress();
}

choice1El.addEventListener('click',function(){
  nextRenderQuestion(0);
})
choice2El.addEventListener('click',function(){
  nextRenderQuestion(1);
})

function nextRenderQuestion(choiceNum) {
  
  if(currentNumber===questions.length-1){
    location.href = '/results.html?mbti='+mbti
    return;
  }
  const question = questions[currentNumber]
  mbti = mbti+ question['choices'][choiceNum].value
  currentNumber = currentNumber+ 1;
  renderQuestion();
}
//노란색 프로그래스바
function expandProgress(){
  // 요소의 inline style에 있는 width 값을 가져옵니다.
// const widthValue = progressValueEl.style.width;

// // // widthValue 출력
// //   console.log("widthChat" + widthValue);
// //   console.log("width: "  + progressValueEl.style.width)
// //   console.log(currentNumber)
// //   // progressValueEl.style.width = ((currentNumber+1) * 10) + '%'
// //   progressValueEl.style.width = (progressValueEl.style.width+1)* 10 + '%'

//  // 현재 width 값을 가져옵니다 (px 단위).
//  const currentWidth = parseFloat(window.getComputedStyle(progressValueEl).getPropertyValue('width'));

//  // 전체 progress bar의 너비를 가져옵니다.
//  const totalWidth = parseFloat(window.getComputedStyle(progressValueEl.parentElement).getPropertyValue('width'));

//  // 현재 width를 비율(%)로 변환합니다.
//  const currentWidthPercent = (currentWidth / totalWidth) * 100;

//  console.log("width : " + currentWidthPercent)

 // 새로운 width 값을 설정합니다.
 const newWidthPercent = ((currentNumber+1) * 10); // 10%씩 증가
 progressValueEl.style.width = newWidthPercent + '%';
 


}

renderQuestion()  