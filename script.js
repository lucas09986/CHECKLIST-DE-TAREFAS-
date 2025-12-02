$(document).ready(function() {
    // 1. EVENTO DE ADIÇÃO DE TAREFA (mantido como estava)
    $("#btn").click(function(e) {
        const tarefa = $("#tarefa").val().trim(); 
        
        if (tarefa === "") {
            alert("Por favor, insira uma tarefa válida.");
        } else {
            // Adiciona o novo item de lista
            $("#lista").append(
                `<li>
                    <i class="fas fa-check-circle check"></i>
                    <span>${tarefa}</span>
                    <i class="fa-solid fa-trash-can close"></i> 
                </li>`
            );
            
            $("#tarefa").val(""); // Limpa o campo
        }
    });

    // --- DELEGAÇÃO DE EVENTOS PARA ITENS DINÂMICOS ---

    // 2. EVENTO DE CONFIRMAR/MARCAR TAREFA (AGORA MANIPULANDO O CSS)
    // Usamos a delegação de eventos no elemento #lista, monitorando cliques no <li>
    $("#lista").on("click", "li", function() {
        const $li = $(this); // O item <li> clicado
        const $span = $li.find("span"); // O texto da tarefa
        const $check = $li.find(".check"); // O ícone de check

        // Verifica se a tarefa já tem a cor verde (estilo de concluído)
        // Usamos .data() para um controle mais robusto do estado, mas vamos usar o .css()
        // para checar a cor do ícone como você solicitou.
        
        // Se a cor do ícone de check for diferente de 'rgb(0, 128, 0)' (verde)
        if ($check.css("color") !== "rgb(0, 128, 0)") {
            // MARCAR COMO CONCLUÍDO (Aplica os estilos)
            $check.css("color", "green"); // Deixa o check verde
            $span.css({
                "text-decoration": "line-through", // Risco no texto
                "color": "#999" // Deixa o texto mais apagado
            });
        } else {
            // DESMARCAR COMO CONCLUÍDO (Remove os estilos)
            $check.css("color", "#ccc"); // Volta a cor padrão do check (cinza)
            $span.css({
                "text-decoration": "none", // Remove o risco
                "color": "#000" // Volta a cor padrão do texto (preto)
            });
        }
    });
    
    // 3. EVENTO DE EXCLUIR TAREFA (mantido como estava)
    $("#lista").on("click", ".close", function(e) {
        e.stopPropagation(); 
        $(this).closest("li").remove(); 
    });
});

