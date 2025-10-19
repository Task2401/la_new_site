// AI Chat
const aiChat = document.getElementById('aiChat');
const chatHeader = document.getElementById('chatHeader');
const chatContent = document.getElementById('chatContent');
const chatBox = document.getElementById('chatBox');
const select = document.getElementById('selectQuestion');
const askBtn = document.getElementById('askBtn');
const popSound = document.getElementById('popSound');
if (popSound) {
    popSound.load();
}

if (chatHeader) {
    chatHeader.onclick = () => {
        aiChat.classList.toggle('expanded');
        if (popSound) {
            popSound.currentTime = 0;
            popSound.play().catch(e => console.log('Audio blocked'));
        }
    };
}

if (askBtn) {
    askBtn.onclick = () => {
        const question = select.value;
        if(!question) return alert('Please select a question');
        if (popSound) {
            popSound.currentTime = 0;
            popSound.play().catch(e => console.log('Audio blocked'));
        }

        const userDiv = document.createElement('div');
        userDiv.style.marginBottom = '5px';
        userDiv.innerHTML = `<strong>You:</strong> ${question}`;
        chatBox.appendChild(userDiv);

        let answer = '';
        if(question === "Where can I find you?") answer = 'You can find us on our Discord server: <a href="https://discord.gg/Xe3WQaDZ" target="_blank">Join here</a>.';
        else if(question === "How can I attend seminars?") answer = 'Our seminars are announced on our Discord. Join the server for updates!';
        else if(question === "Can I have a personal AI model?") answer = 'Yes! Contact us through our email to discuss custom AI models.';
        else if(question === "Why are your AI models that expensive?") answer = 'Our AI models are high quality, trained on premium datasets, and tailored for OnlyFans content creation. Quality costs.';

        const aiDiv = document.createElement('div');
        aiDiv.style.marginBottom = '5px';
        aiDiv.innerHTML = `<strong>AI:</strong> ${answer}`;
        chatBox.appendChild(aiDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
        select.value = '';
    };
}
