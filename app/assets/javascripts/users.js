$(function(){

  
  var searchResult=$("#user-search-result")

  function appendUserHTML(user){
    var html=`
    <div class="chat-group-user clearfix${user.id}">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add${user.id} chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>  
    `
    searchResult.append(html);
  }

  var groupMembers=$("#chat-group-users")

  function appendUserToGroup(userName,userId){
    var html=`
    <div class='chat-group-user clearfix js-chat-member${userId}' id='chat-group-user-8' data-user-id="${userId}">
      <input name='group[user_ids][]' type='hidden' value='${userId}'>
      <p class='chat-group-user__name'>${userName}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>
    `
    groupMembers.append(html);
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
      var currentUserId=$(".js-chat-member-current-user").attr("value");

      users.forEach(function(user){
        if(user.id==currentUserId){
          
        }else{
          appendUserHTML(user);
        }
        
      });
      
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  });
  
  $("#user-search-result").on("click",`.chat-group-user__btn--add`,function(){

    $(this).parent().remove();
    var userName=$(this).data("user-name");
    var userId = $(this).data("user-id");
    appendUserToGroup(userName,userId);

  });

  $("#chat-group-users").on("click",`.chat-group-user__btn--remove`,function(){
    $(this).parent().remove();
  });


});