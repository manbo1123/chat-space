$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
       `<div class="message" data-message-id=${message.id} >
          <div class="main-chat__message-list__box">
            <div class="main-chat__message-list__box__user">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__box__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__message">
            <p class="main-chat__message-list__message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image}>
        </div>`
      return html;
    } else {
      let html =
       `<div class="message" data-message-id=${message.id} >
          <div class="main-chat__message-list__box">
            <div class="main-chat__message-list__box__user">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__box__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__message">
            <p class="main-chat__message-list__message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(message) {
      let html = buildHTML(message);
      $('.main-chat__message-list').append(html);
      $('form')[0].reset();
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.main-chat__message-form__btn').prop('disabled', false);
    })

    .fail(function() {
      alert('error');
      $('.main-chat__message-form__btn').prop('disabled', false);
    })
  })
});