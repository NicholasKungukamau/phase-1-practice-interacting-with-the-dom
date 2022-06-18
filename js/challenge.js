let counter = document.getElementById('counter');
let paused = false;
setInterval(() => {
    if (!paused) {
        counter.innerHTML++
    
    }
},1000);

const togglePaused = () => (paused = !paused);

const decrement = document.getElementById('minus');
minus.addEventListener('click', () => {
    counter.innerHTML--;
});

const increment = document.getElementById('plus');
plus.addEventListener('click', () => {
    counter.innerHTML++;
});

const like = document.getElementById('heart');
like.addEventListener('click', () => {
    let likes = 0;
    let likeList = document.querySelector('.likes');
    let list = document.createElement('li');
    list.textContent = `${counter.innerHTML} has ${likes} likes`;
    likeList.appendChild(list);
});

const pause = document.getElementById('pause');
pause.addEventListener('click', () => {
    if (pause.innerText === 'pause') {
        like.disabled = true;
        increment.disabled = true;
        decrement.disabled = true;
        // clearTimeout();
        togglePaused();
        pause.innerText = 'resume';
    }else if ( pause.innerText === 'resume') {
         like.disabled = false;
        increment.disabled = false;
        decrement.disabled = false;
        togglePaused();
        pause.innerText = 'pause'
    }
});

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addComment();
  form.reset();
});

const addComment = () => {
  let input = document.getElementById('comment-input').value;
  let userComments = document.getElementById('list');
let comment = document.createElement('li');
  comment.innerText = input;
  userComments.appendChild(comment);
}; 

