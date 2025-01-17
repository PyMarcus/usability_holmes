function createModalContent(){
    $('#imageQuestionModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var imageSrc = button.data('image'); 
        var questions = button.data('questions').split(','); 
      
        var modal = $(this);
      
        // change image
        modal.find('#modalImage').attr('src', "assets/img/what.png");
      
        var questionsHtml = '';
        questions.forEach(function(question, index) {
          questionsHtml += `<div class="form-group">
                              <label for="question${index}"><strong>${question}</strong></label>
                              <textarea class="form-control" id="question${index}" rows="3"></textarea>
                            </div>`;
        });
        modal.find('#questionsList').html(questionsHtml);
      });
}


document.addEventListener("DOMContentLoaded", ()=>{
    createModalContent();
});
