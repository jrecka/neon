const button = document.querySelector('button');
button.addEventListener('click', () => {
    button.textContent === 'on' ? button.textContent = 'off' : button.textContent = 'on';
    const letters = document.querySelectorAll('li');
    letters.forEach(letter => {
        
        letter.classList.toggle('off');
    }); {
    } 
})
