// Lightbox functions
function showLightbox(imgSrc, link, price) {
    document.getElementById('lightbox').style.display = 'flex';
    const img = document.getElementById('lightboxImg');
    img.src = imgSrc;
    document.getElementById('buyLightboxBtn').textContent = `Buy Now (€${price})`;
    document.getElementById('buyLightboxBtn').onclick = () => window.open(link, "_blank");
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
