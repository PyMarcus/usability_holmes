var pts = 0;
var globalSet = new Set();

function getImagePath(alt){
    switch(alt){
        case "Educação":
          return "assets/img/school_h.png";
        case "Varejo":
          return "assets/img/store_h.png";
        case "Saúde":
          return "assets/img/hospital_h.png";
        case "Banco":
          return "assets/img/bank_h.png";
        case "Entretenimento":
          return "assets/img/cine_h.png";
        case "Tecnologia":
          return "assets/img/tec.jpeg";
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
  alert("⚠️OK!");
  
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
        else if(alt == "Varejo"){
          if (index == 0) {
            questionsHtml += questionFour(index, question);
          } else if (index == 1) {
            questionsHtml += questionFive(index, question);
          } else if (index == 2) {
            questionsHtml += questionSix(index, question);
          }
        }
        else if(alt == "Saúde"){
          if (index == 0) {
            questionsHtml += questionSeven(index, question);
          } else if (index == 1) {
            questionsHtml += questionEight(index, question);
          } else if (index == 2) {
            questionsHtml += questionNine(index, question);
          }
        }
        else if(alt == "Banco"){
          if (index == 0) {
            questionsHtml += questionTen(index, question);
          } else if (index == 1) {
            questionsHtml += questionEleven(index, question);
          } else if (index == 2) {
            questionsHtml += questionTwelve(index, question);
          }
        }
        else if(alt == "Entretenimento"){
          if (index == 0) {
            questionsHtml += questionThirteen(index, question);
          } else if (index == 1) {
            questionsHtml += questionFourteen(index, question);
          } else if (index == 2) {
            questionsHtml += questionFifteen(index, question);
          }
        }
        else if(alt == "Tecnologia"){
          if (index == 0) {
            questionsHtml += questionSixteen(index, question);
          } else if (index == 1) {
            questionsHtml += questionSeventeen(index, question);
          } else if (index == 2) {
            questionsHtml += questionEighteen(index, question);
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

 
  // redirectToIndexIfModalOpened();
  if(pts >= 60){
    alert("✔️PARABÉNS!!! Atingiu a pontuação máxima!");
  }
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

// varejo
function questionFour(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Visibilidade do estado do sistema</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Dialética</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Dinâmica dos componentes</label>
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
function questionFive(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Cores claras e intuitivas</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Minimização de carga de memória</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Controle e gerenciamento de permissões do usuário</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Manutenção de padrões</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Prevenção de erros</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionSix(index, question) {
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
        <label class="form-check-label custom-text" for="radio5${index}">Flexibilidade e eficiência de uso</label>
      </div>
    </div>
  `;
}

// Hospital
function questionSeven(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Visibilidade do estado do sistema</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Dinâmica dos componentes</label>
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
function questionEight(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">As cores da tela</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">A leitura de conteúdo</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">A retenção da atenção por parte do usuário</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Manutenção de padrões</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Performance do site</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionNine(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Google</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Contatos</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Inicial</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Setores</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Login</label>
      </div>
    </div>
  `;
}

// bank
function questionTen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Visibilidade do estado do sistema</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Dinâmica dos componentes</label>
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
function questionEleven(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Responsividade</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Comunicação</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Rentenção de atenção</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Desrespeito</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Performance do site</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionTwelve(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Google</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Contatos</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Inicial</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Setores</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Login</label>
      </div>
    </div>
  `;
}

// entretenimento
function questionThirteen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Visibilidade do estado do sistema</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Dinâmica dos componentes</label>
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
function questionFourteen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Responsividade</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Navegabilidade</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Rentenção de atenção</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Desrespeito</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Performance do site</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionFifteen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Google</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Contatos</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Inicial</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Setores</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Todas</label>
      </div>
    </div>
  `;
}

// tecnologia
function questionSixteen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Design estético e minimalista</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Visibilidade do estado do sistema</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Dinâmica dos componentes</label>
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
function questionSeventeen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Responsividade</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Legibilidade</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Rentenção de atenção</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Desrespeito</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Performance do site</label>
      </div>
    </div>
  `;
}

// Terceira questão
function questionEighteen(index, question) {
  return `
    <div class="form-group">
      <label for="question${index}"><p class="custom-title">${question}</p></label>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="1" id="radio1${index}">
        <label class="form-check-label custom-text" for="radio1${index}">Não usar uma tabela</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="2" id="radio2${index}">
        <label class="form-check-label custom-text" for="radio2${index}">Exportar um arquivo</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="3" id="radio3${index}">
        <label class="form-check-label custom-text" for="radio3${index}">Definir duas colunas somente</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="4" id="radio4${index}">
        <label class="form-check-label custom-text" for="radio4${index}">Filtros</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="question${index}" value="5" id="radio5${index}">
        <label class="form-check-label custom-text" for="radio5${index}">Deixar o texto com um wrap e colocar definir a tabela como responsiva</label>
      </div>
    </div>
  `;
}
