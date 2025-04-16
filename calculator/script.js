const buttons = document.querySelectorAll('.button')
const output = document.querySelector('.h1')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent == '=') {
            output.textContent = eval(output.textContent)
        }
        if(btn.textContent == '÷') {
            output.textContent += ' ' + '/' + ' '
        } else if (btn.textContent == '=') {
            output.textContent += ''
        } else if (btn.textContent == 'AC') {
            output.textContent = ''
        } else if (btn.textContent == 'X') {
            output.textContent = output.textContent.substring(0, output.textContent.length - 1)
        } else {
            output.textContent += btn.textContent;
        } 
    })
});

