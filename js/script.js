// Kotak Belajar — logic komik geser (swipe)
// Data komik ada di js/comics-data.js (variabel `comics`)

const container = document.getElementById('comicContainer');

comics.forEach((comic) => {
  const block = document.createElement('div');
  block.className = 'comic-block';

  const total = comic.pages.length;
  let current = 0;

  block.innerHTML = `
    <div class="comic-title-row">
      <h3>${comic.title}</h3>
      <span class="counter" data-role="counter">Halaman 1 / ${total}</span>
    </div>
    <div class="comic-viewer">
      <div class="comic-track-mask" data-role="mask">
        <div class="comic-track" data-role="track">
          ${comic.pages.map((p, i) => `
            <div class="comic-page">
              ${p.src
                ? `<img src="${p.src}" alt="${comic.title} - halaman ${i+1}" draggable="false">`
                : `<div class="placeholder-page">
                     <div class="num">${i+1}</div>
                     <p>Ganti "src" pada js/comics-data.js dengan gambar halaman ${i+1}</p>
                   </div>`
              }
              <span class="page-caption">${p.caption || 'Halaman ' + (i+1)}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="comic-nav prev" data-role="prev">&#8592;</div>
      <div class="comic-nav next" data-role="next">&#8594;</div>
    </div>
    <div class="comic-dots" data-role="dots">
      ${comic.pages.map((_, i) => `<button data-index="${i}"></button>`).join('')}
    </div>
  `;

  container.appendChild(block);

  const track = block.querySelector('[data-role="track"]');
  const mask = block.querySelector('[data-role="mask"]');
  const prevBtn = block.querySelector('[data-role="prev"]');
  const nextBtn = block.querySelector('[data-role="next"]');
  const counter = block.querySelector('[data-role="counter"]');
  const dots = block.querySelectorAll('[data-role="dots"] button');

  function render(){
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent = `Halaman ${current+1} / ${total}`;
    prevBtn.classList.toggle('disabled', current === 0);
    nextBtn.classList.toggle('disabled', current === total - 1);
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index){
    current = Math.max(0, Math.min(total - 1, index));
    render();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index))));

  /* swipe / drag support */
  let startX = 0, deltaX = 0, dragging = false;

  function dragStart(x){ dragging = true; startX = x; track.style.transition = 'none'; }
  function dragMove(x){
    if(!dragging) return;
    deltaX = x - startX;
    track.style.transform = `translateX(calc(-${current * 100}% + ${deltaX}px))`;
  }
  function dragEnd(){
    if(!dragging) return;
    dragging = false;
    track.style.transition = '';
    const threshold = mask.offsetWidth * 0.15;
    if(deltaX > threshold) goTo(current - 1);
    else if(deltaX < -threshold) goTo(current + 1);
    else render();
    deltaX = 0;
  }

  mask.addEventListener('mousedown', e => dragStart(e.clientX));
  window.addEventListener('mousemove', e => dragMove(e.clientX));
  window.addEventListener('mouseup', dragEnd);

  mask.addEventListener('touchstart', e => dragStart(e.touches[0].clientX), {passive:true});
  mask.addEventListener('touchmove', e => dragMove(e.touches[0].clientX), {passive:true});
  mask.addEventListener('touchend', dragEnd);

  render();
});
