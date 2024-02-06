let chatItems = document.querySelectorAll('.chat-item');
let chatContents = document.querySelectorAll('.chat-content');
let chat = document.querySelector('.chat');
let chatBack = document.querySelector('.chat__back');

if (chatItems.length > 0) {
  chatItems.forEach((item) => {
    item.onclick = function () {
      let id = this.getAttribute('data-id');
      chatItems.forEach((item) => {
        item.classList.remove('_active');
      });
      chatContents.forEach((content) => {
        content.classList.remove('_active');
      });
      this.classList.add('_active');
      document
        .querySelector(`.chat-content[data-id="${id}"]`)
        .classList.add('_active');
      chat.classList.add('_active');
    };
  });

  chatBack.onclick = function () {
    chatItems.forEach((item) => {
      item.classList.remove('_active');
    });
    chatContents.forEach((content) => {
      content.classList.remove('_active');
    });
    chat.classList.remove('_active');
  };
}
