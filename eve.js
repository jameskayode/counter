const p=document.querySelector('#increaser');
const p2=document.querySelector('#decreaser');
const p3=document.querySelector('#counter');

let count = 0;

p.addEventListener("click", () => {
  count++;
  p3.innerText = count;    
});

p2.addEventListener("click", () => {
    count--;
    p3.innerText = count;    
  });
  
