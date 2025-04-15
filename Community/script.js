function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (!message) return;
  
    const messagesContainer = document.getElementById('chatMessages');
  
    // Sent message
    const sent = document.createElement('div');
    sent.className = 'message sent';
    sent.textContent = message;
    messagesContainer.appendChild(sent);
  
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
    // Simulate a reply after 1 second
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'message received';
      reply.textContent = "Got it!";
      messagesContainer.appendChild(reply);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  }