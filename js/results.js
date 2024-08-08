import { mbtis, results } from "./data.js";

  console.log(location.href)
  // user의 답변에 따라 넘어온 mbti 값. 쿼리 파라미터 추출
  const fromUserMbti = new URLSearchParams(window.location.search).get('mbti');
  

  //results에서 가져올 데이터의 index
  const renderingNum = mbtis[fromUserMbti]

  const renderingTarget = results[renderingNum]

  const pageTitleEle = document.querySelector('.page-title')
  pageTitleEle.innerHTML = renderingTarget.title

  // 답변 4개 div 모두 찾기
  const pageResults = document.querySelectorAll('.result .page-result')

  // 데이터 객체 한개에 'results' 배열 데이터를 각각의 답변 div에 렌더링
  renderingTarget.results.forEach(function(resultEach, index){
    pageResults[index].innerHTML = resultEach
  })


  const pageCareerEles = document.querySelectorAll('.page-career')

  renderingTarget.jobs.forEach(function(job, index){
    pageCareerEles[index].innerHTML = job;
  })


  const resultImgEle = document.querySelector('.result img')
  console.log( renderingTarget.lectureImg )
  resultImgEle.src = renderingTarget.lectureImg 

  const resultCharacterEle = document.querySelector('.character')

  resultCharacterEle.src = renderingTarget.character

  const resultAEle = document.querySelector('.result a')
  resultAEle.href = renderingTarget.lectureUrl

   
 








  



  

