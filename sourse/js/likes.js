// Likes with Local Storage
const models = ['clara','laura','luna','selina','isla'];
models.forEach(id => {
    const likeCountElement = document.getElementById(`likes-${id}`);
    if (likeCountElement) {
        const count = parseInt(localStorage.getItem(`likes-${id}`) || '0');
        likeCountElement.textContent = count;
    }
});

window.likeModel = (event, modelId) => {
  event.stopPropagation();
  const current = parseInt(localStorage.getItem(`likes-${modelId}`) || '0');
  const newCount = current + 1;
  localStorage.setItem(`likes-${modelId}`, newCount.toString());
  document.getElementById(`likes-${modelId}`).textContent = newCount;
};
