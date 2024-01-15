const chat = document.querySelector('.chat');
const input = document.querySelector('.input textarea');
const button = document.querySelector('.input button');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `
      <div class="header">
        <div class="name">You</div>
        <div class="time">${new Date().toLocaleTimeString()}</div>
      </div>
      <div class="content">
        <div class="text">${input.value}</div>
      </div>
    `;
    chat.appendChild(message);
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
  }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `
        <div class="header">
          <div class="name">You</div>
          <div class="time">${new Date().toLocaleTimeString()}</div>
        </div>
        <div class="content">
          <div class="text">${input.value}</div>
        </div>
      `;
      chat.appendChild(message);
      input.value = '';
      chat.scrollTop = chat.scrollHeight;
    }
  });