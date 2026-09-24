const projects = {
  pn: {
    title: 'PN SHUDHH',
    type: 'Brand Identity / Packaging / Visual Language',
    year: '2026',
    bg: '#f4ead8', ink: '#9f2b1f', accent: '#a52d20', accentText: '#fff8ec',
    summary: 'A premium flour identity built around responsible sourcing, fresh milling and care in everyday food — expressed through a warm wordmark, a compact chakki mark and tactile packaging language.',
    tags: ['Brand identity','Packaging','Typography','Visual system'],
    noteTitle: 'The direction',
    note: 'Rooted in grain, led by type, and designed to grow from flour into future staples.',
    images: [
      {src:'assets/projects/pn-shudhh-logo.png', alt:'PN SHUDHH final wordmark', contain:true},
      {src:'assets/projects/pn-packaging.webp', alt:'PN SHUDHH Khapli wheat flour packaging'},
      {src:'assets/projects/pn-detail.webp', alt:'PN SHUDHH packaging detail'},
      {src:'assets/projects/pn-message.webp', alt:'PN SHUDHH visual language statement'}
    ], next:'seven'
  },
  seven: {
    title: '7TH HEAVEN',
    type: 'Packaging / Dieline / Local Visual Storytelling',
    year: '2026',
    bg: '#f7f3ec', ink: '#17120e', accent:'#fd641d', accentText:'#fff9f3',
    summary: 'A custom cake-box system developed around a wraparound viewing window, an orange-and-ivory visual system and Siliguri-specific line art.',
    tags:['Packaging','Dieline','Print','Mockup'],
    noteTitle:'From structure to shelf',
    note:'The project moves from a manufacturer-reference dieline to final artwork, window placement, local illustration and realistic folded mockups.',
    images:[
      {src:'assets/projects/7h-mockup-angle.webp', alt:'7th Heaven cake box angled mockup'},
      {src:'assets/projects/7h-mockup-top.webp', alt:'7th Heaven cake box top mockup'},
      {src:'assets/projects/7h-dieline.webp', alt:'7th Heaven packaging dieline', wide:true}
    ], next:'vinayak'
  },
  vinayak: {
    title:'VINAYAK TEA',
    type:'Packaging Design / Tea Carton',
    year:'Selected work',
    bg:'#f7d529', ink:'#402716', accent:'#3c6e3d', accentText:'#fff7d4',
    summary:'My first packaging project — a herbal tea carton developed from visual direction and design details through to the final cut-and-crease artwork.',
    tags:['Packaging','Dieline','Product design','Process'],
    noteTitle:'Behind the design',
    note:'Warm yellow, leaf texture and a familiar tea-time moment carry the visual story while the dieline shows how the flat artwork becomes the finished pack.',
    images:[
      {src:'assets/projects/vinayak-mockup.webp', alt:'Vinayak Tea packaging mockup'},
      {src:'assets/projects/vinayak-details.webp', alt:'Vinayak Tea design details'},
      {src:'assets/projects/vinayak-dieline.webp', alt:'Vinayak Tea packaging dieline'},
      {src:'assets/projects/vinayak-panorama.webp', alt:'Vinayak Tea packaging design process panorama', wide:true}
    ], next:'eight'
  },
  eight: {
    title:'8EEN',
    type:'Fashion / Brand Identity',
    year:'Identity',
    bg:'#f3f2ef', ink:'#0b0b0b', accent:'#0b0b0b', accentText:'#ffffff',
    summary:'A fashion identity built around a looping custom symbol — combining an infinity gesture, inner forms for EEN and a hidden small e.',
    tags:['Logo design','Identity','Fashion','Symbol'],
    noteTitle:'The mark',
    note:'The symbol uses a never-ending loop as its core idea, with multiple inner loops and open spaces giving the mark its own character.',
    images:[
      {src:'assets/projects/8een-mark.webp', alt:'8een custom identity symbol', contain:true},
      {src:'assets/projects/8een-breakdown.webp', alt:'8een symbol construction breakdown'},
      {src:'assets/projects/8een-palette.webp', alt:'8een colour palette and typography', wide:true}
    ], next:'holy'
  },
  holy: {
    title:'HOLY SLICE',
    type:'Pizzeria / Brand Identity',
    year:'Concept',
    bg:'#0f7b8d', ink:'#fff1d0', accent:'#ff7a24', accentText:'#171717',
    summary:'A playful pizzeria identity pairing a bold retro wordmark with a halo and an illustrated pizza slice for an instantly recognisable, youthful personality.',
    tags:['Logo design','Food & beverage','Illustration','Identity'],
    noteTitle:'Personality first',
    note:'The identity balances a confident wordmark with a characterful food illustration so the brand feels casual, memorable and ready for packaging or social use.',
    images:[{src:'assets/projects/holy-slice.webp', alt:'Holy Slice pizzeria logo', wide:true}], next:'pn'
  }
};

const overlay = document.getElementById('case-overlay');
const caseInner = document.getElementById('case-inner');
const closeBtn = document.querySelector('.case-close');
let activeProject = null;

function renderProject(key){
  const p = projects[key];
  if(!p) return;
  activeProject = key;
  overlay.style.setProperty('--case-bg',p.bg);
  overlay.style.setProperty('--case-ink',p.ink);
  overlay.style.setProperty('--case-accent',p.accent);
  overlay.style.setProperty('--case-accent-text',p.accentText);
  const gallery = p.images.map((img,i)=>`<figure class="case-image ${img.wide?'wide':''} ${img.contain?'contain':''}"><img src="${img.src}" alt="${img.alt}" loading="${i>1?'lazy':'eager'}"></figure>`).join('');
  const next = projects[p.next];
  caseInner.innerHTML = `
    <section class="case-hero">
      <div class="case-topline"><span>${p.type}</span><span>${p.year}</span></div>
      <h1 class="case-title">${p.title}</h1>
      <div class="case-summary">
        <p>${p.summary}</p>
        <div class="case-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      </div>
    </section>
    <section class="case-gallery">
      ${gallery}
      <div class="case-note"><h3>${p.noteTitle}</h3><p>${p.note}</p></div>
    </section>
    <button class="case-next" type="button" data-next="${p.next}"><small>Next project</small><strong>${next.title} →</strong></button>`;
  document.body.classList.add('case-open');
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden','false');
  overlay.scrollTop = 0;
  setTimeout(()=>closeBtn.focus(),400);
}
function closeProject(){
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden','true');
  document.body.classList.remove('case-open');
  activeProject=null;
}

document.querySelectorAll('[data-project]').forEach(row=>row.addEventListener('click',()=>renderProject(row.dataset.project)));
closeBtn.addEventListener('click',closeProject);
overlay.addEventListener('click',e=>{const next=e.target.closest('[data-next]');if(next) renderProject(next.dataset.next)});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && activeProject) closeProject()});

const preview = document.querySelector('.hover-preview');
const previewImg = preview.querySelector('img');
let mx=0,my=0,px=0,py=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
function animatePreview(){px+=(mx-px)*.16;py+=(my-py)*.16;preview.style.left=px+'px';preview.style.top=py+'px';requestAnimationFrame(animatePreview)}
animatePreview();
document.querySelectorAll('.project-row').forEach(row=>{
  row.addEventListener('mouseenter',()=>{previewImg.src=row.dataset.preview;preview.classList.add('is-visible');cursor.classList.add('is-active')});
  row.addEventListener('mouseleave',()=>{preview.classList.remove('is-visible');cursor.classList.remove('is-active')});
});

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const cursor = document.querySelector('.cursor');
let cx=0,cy=0,tx=0,ty=0;
window.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;cursor.style.opacity='1'});
function animateCursor(){cx+=(tx-cx)*.22;cy+=(ty-cy)*.22;cursor.style.left=cx+'px';cursor.style.top=cy+'px';requestAnimationFrame(animateCursor)}
animateCursor();

document.querySelectorAll('a,button,.identity-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('is-active'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('is-active'));
});

document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=e.clientX-(r.left+r.width/2);const y=e.clientY-(r.top+r.height/2);el.style.transform=`translate(${x*.08}px,${y*.08}px)`});
  el.addEventListener('mouseleave',()=>el.style.transform='');
});

const menuBtn=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
menuBtn.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('is-open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'Close':'Menu'});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('is-open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='Menu'}));
