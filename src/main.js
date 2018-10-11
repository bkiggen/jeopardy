import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import $ from 'jquery';
import Questions from './Questions.js';




$(document).ready(function() {
    let questionArray = [];
    let questionsList = [];
    let answersList = [];
    let questionQuery = new Questions();
    for(let i=0; i <= 5; i++){
      let promise = questionQuery.questionQuery();
      promise.then(function(response){
        let body = JSON.parse(response);
        questionArray.push(body);
        questionsList = questionQuery.questionArrayMaker(questionArray);
        answersList = questionQuery.answerArrayMaker(questionArray);
      })
    }


    questionQuery.questionQuery()
      .then(function(response){
        console.log(questionArray);
        for(let i=0; i < 6; i++) {
          $(`.category${i}`).html(`<h5>${questionArray[i][0].category.title}</h5>`);
          for(let j=0; j < 6; j++){
            $(`#q${j}${i}`).html(`<p>${questionArray[j][i].question}</p>`);
          }
        }

      })

    $(".question").click(function() {
      const itemId = $(this).attr("id");
      let split = itemId.split("");
      $(`#${itemId}`).html(`${questionArray[split[1]][split[2]].answer}`);
      $(`#${itemId}`).css("background-color", "#102c59");
    })

})
