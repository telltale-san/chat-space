$(function(){

  var searchResult=$("#user-search-result")

  function appendUserHTML(user){
    var html=`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>  
    `
    searchResult.append(html);
  }






  $(".chat-group-form__input").on("keyup",function(){
    var input=$(this).val();
    
    $.ajax({
      type: "GET",
      url: "/users",
      data: {keyword: input},
      dataType: "json"
    })
    .done(function(users){
      $("#user-search-result").empty();
      
      users.forEach(function(user){
        console.log(user.id);  
        appendUserHTML(user);
      });
    })


  });

});