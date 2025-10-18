// Testimonials
window.addTestimonial = () => {
  const name = document.getElementById('testimonialName').value.trim();
  const text = document.getElementById('testimonialInput').value.trim();
  if(!name || !text) return alert("Please enter both name and testimonial");
  
  const testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
  testimonials.push({ name, text });
  localStorage.setItem('testimonials', JSON.stringify(testimonials));
  
  document.getElementById('testimonialName').value = '';
  document.getElementById('testimonialInput').value = '';
  loadTestimonials();
};

function loadTestimonials() {
  const testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
  const list = document.getElementById('testimonialList');
  list.innerHTML = '';
  testimonials.forEach(data => {
    const div = document.createElement('div');
    div.className = 'testimonial-card';
    div.innerHTML = `<p>"${data.text}"</p><strong>- ${data.name}</strong>`;
    list.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadTestimonials);
