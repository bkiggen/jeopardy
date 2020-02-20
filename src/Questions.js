export default class Questions {
  questionQuery(){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://jservice.io/api/clues?category=${randomCat()}`;
      request.onload = function() {
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

    questionArrayMaker(questionArray){
      let clueArray = [];
      for(let i=0; i < 6; i++){
        for(let j=0; j < 5; j++){
        clueArray.push(questionArray[i][j].question);
      }
    }
    return clueArray;
  }
  answerArrayMaker(questionArray){
    let answerArray = [];
    for(let i=0; i < 6; i++){
      for(let j=0; j < 5; j++){
      answerArray.push(questionArray[i][j].answer);
    }
  }
  return answerArray;
}

}

function randomCat() {
  return Math.floor(Math.random() * (5000 - 1000) + 1000);
}
