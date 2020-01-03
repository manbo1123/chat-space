$ (function(){
  let search_list = $("#user-search-result");
  function appendUser(user) {
    let html = `
              <div class="chat-group-form__field--right">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`;
    search_list.append(html);
  }

  function appendNoUser(){
    let html =`
              <div class="chat-group-form__field--right">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
              </div>`;
    search_list.append(html);
  }

  function appendDeleteUser(userName,userId) {
    let html =`
              <div class="chat-group-form__field--right" id="${userId}">
                <p class="chat-group-user__name">${userName}</p>
                <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove" data-user-id="${userId}" data-user-name="${userName}">削除</div>
              </div>`;
    $(".js-add-user").append(html);
  }

  function appendChatMember(userId) {
    let html = `
              <input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
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

  $(document).on('click',".chat-group-user__btn--add", function() {
    let userName = $(this).attr("data-user-name");
    let userId = $(this).attr("data-user-id");
    $(this)
      .parent()
      .remove();
    appendDeleteUser(userName,userId);
    appendChatMember(userId);
  });

  $(document).on('click',".chat-group-user__btn--remove", function() {
    $(this)
      .parent()
      .remove();
  });
});