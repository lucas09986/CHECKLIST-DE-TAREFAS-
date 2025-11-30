const tarefa = document.querySelector('#tarefa');
const botão = document.querySelector('#btn');
const lista = document.querySelector('#lista'); 

botão.addEventListener('click', function() {
    // 1. Validar se o campo de input não está vazio
    if (tarefa.value === '') { 
        alert('Por favor, insira uma tarefa!');
        return; // Impede a adição de uma tarefa vazia
    } else {
    // 2. Adicionar a tarefa à lista
        lista.innerHTML += `<li>
                             <i class="fas fa-check-circle check"></i>
                             <span>${tarefa.value}</span><i class="fa-solid fa-trash-can close"></i>
                             </li>`;
        
        // 3. Limpar o campo de input após adicionar
        tarefa.value = '';
    }

    const close = document.querySelectorAll('.close');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            close[i].parentElement.remove();
        });
    }  
    lista.addEventListener('click', function(e) {
        e.target.parentElement.querySelector('.check').style.color = 'green';
        e.target.parentElement.style.textDecoration = 'line-through';
    }); 
}); 