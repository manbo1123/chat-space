$ (function(){
  let search_list = $("#chat-group-user");
  function appendUser(user) {
    let html = `
              <div class="chat-group-form__field--right">
                <div class="chat-group-user__name">${user.name}</div>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`
    search_list.append(html);
  }

  function appendNoUser(){
    let html =`
              <div class="chat-group-form__field--right">
                <div class="chat-group-user__name">ユーザーが見つかりません</div>
              </div>`
    search_list.append(html);
  }

  $("#user-search-field.chat-group-form__input").on("keyup", function(){
    let input = $("#user-search-field.chat-group-form__input").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function(users){
      $("#chat-group-user").empty();
      if (users.length !==0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else if (input.length == 0) {
        return false;
      }
      else {
        appendNoUser();
      }
    })

    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
  });
});