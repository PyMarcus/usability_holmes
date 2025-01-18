var pts = 0;
var globalSet = new Set();

function getImagePath(alt){
    switch(alt){
        case "Educação":
          return "assets/img/school_h.png";
        default:
          return "assets/img/what.png"
    }
}

function changeBackgroundColor(){
  const ids = ["escola", "saude", "varejo", "banco", "entretenimento", "tecnologia"];
  
  let randomNum;
  let id;
  
  // Continuar sorteando até encontrar um id não selecionado
  do {
    randomNum = Math.floor(Math.random() * ids.length);
    id = ids[randomNum];
  } while (globalSet.has(id));  // Verificar se o id já foi selecionado
  
  console.log("random id ", id);
  
  // Adicionar o id ao Set para garantir que ele não será sorteado novamente
  globalSet.add(id);
  
  // Alterar a cor de fundo do id sorteado
  $("#" + id).css("background-color", "red"); 
}

function redirectToIndexIfModalOpened() {
  let redirectTimeout;

  $('#imageQuestionModal').on('show.bs.modal', function (event) {
    clearTimeout(redirectTimeout);

    redirectTimeout = setTimeout(() => {
      window.location.href = "loser.html";
    }, 15000);
  });

  $('#imageQuestionModal').on('hide.bs.modal', function () {
    clearTimeout(redirectTimeout);
  });
}

function solveQuestions() {
  let getPointsA = false;
  let getPointsB = false;
  let getPointsC = false;

  const correctAnswers = {
    1: 1,  
    2: 2,  
    3: 5   
  };

  var answer1 = $("input[name='question0']:checked").val();
  if (answer1) {
    if (parseInt(answer1) === correctAnswers[1]) {
      $('label[for="radio10"]').css('color', 'green');  
      getPointsA = true;
    } else {
      $('label[for="radio10"]').css('color', 'green');
    }
  }

  var answer2 = $("input[name='question1']:checked").val();
  
  if (answer2) {
    if (parseInt(answer2) === correctAnswers[2]) {
      $('label[for="radio21"]').css('color', 'green'); 
      getPointsB = true;
    } else {
      $('label[for="radio21"]').css('color', 'green'); 
    }
  }

  var answer3 = $("input[name='question2']:checked").val();
  
  if (answer3) {
    if (parseInt(answer3) === correctAnswers[3]) {
      $('label[for="radio52"]').css('color', 'green');
      getPointsC = true; 
    } else {
      $('label[for="radio52"]').css('color', 'green');  
    }
  }
  
  if(getPointsA && getPointsB && getPointsC){
    pts += 10;
    let p = document.getElementById("punctuation");
  
    if(p){
      p.textContent = `${pts} pts`;

    }
  }
  
  
}

function createModalContent() {
  try {
    $('#imageQuestionModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); 
      var questions = button.data('questions').split(','); 
      const alt = event.relatedTarget.alt;
      
      var modal = $(this);

      modal.find('#modalImage').attr('src', getImagePath(alt));
    
      var questionsHtml = '';
      questions.forEach(function(question, index) {
        if (alt == "Educação") {
          if (index == 0) {
            questionsHtml += questionOne(index, question);
          } else if (index == 1) {
            questionsHtml += questionTwo(index, question);
          } else if (index == 2) {
            questionsHtml += questionTree(index, question);
          }
        }
      });
      modal.find('#questionsList').html(questionsHtml);
    });

    $('#imageQuestionModalTabs a:first').tab('show');
  } catch (error) {
    console.log(error);
  }
  
}

document.addEventListener("DOMContentLoaded", () => {
  createModalContent();
  changeBackgroundColor();


  const btn = document.getElementById("solve");
  if (btn) {
    btn.addEventListener("click", ()=>{
      solveQuestions();
      changeBackgroundColor();
    });
  }

 
  redirectToIndexIfModalOpened();

});

// questions

// school
// Primeira questão (Educação)
function questionOne(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Padrão de cores não combinantes</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Controle e automação</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Ausência de metodologia ágil</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Criação de erros</label>
      </div>
    </div>
  `;
}

// Segunda questão
function questionTwo(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Reconhecimento em vez de recordação</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Controle e liberdade do usuário</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Consistência e padrões</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Prevenção de erros</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionTree(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Geração de bugs</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Políticas normativas</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Estatística</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Radiologia</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Prevenção de erros</label>
      </div>
    </div>
  `;
}

