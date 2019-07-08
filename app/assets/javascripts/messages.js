$(function(){

  var chat__main=$(".chat__main");


  function appendMessage(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image ? `<img src="${ message.image }" width="200" height="200">` : "";
 
    var html =`
    <div class="chat__main__message">
      <div class="chat__main__message__name">
        ${message.user_name}
      </div>
      <div class="chat__main__message--gray">
        ${message.created_at}
      </div>
      <div class="chat__main__message__text">
        ${content}
        ${image}
      </div>
    </div>`;

    chat__main.append(html);
  };



  $(".new_message").on("submit",function(e){
    e.preventDefault();

    var formData= new FormData(this);
    var url= $(this).attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      appendMessage(data);
    })

  });
});