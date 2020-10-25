const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        let number = btn[i].getAttribute('data-num');
        screen.value += number;
    })
}

    btnEqual.addEventListener('click', function(){
        if(screen.value === ''){
            alert("empty");
        } else{
           let value = eval(screen.value);
           screen.value = value;
        }
    })

    btnClear.addEventListener('click', function(){
        screen.value = '';
    })

