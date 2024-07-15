document.addEventListener('DOMContentLoaded', function() {
    // Photo Gallery Modal
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.gallery-item img');
    const closeBtn = document.getElementsByClassName('close')[0];

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Message Board
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages-container');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageText = messageInput.value;
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;
        messagesContainer.appendChild(messageElement);
        messageInput.value = '';
    });
});
