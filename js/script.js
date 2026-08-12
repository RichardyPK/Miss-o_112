const botaoGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");


// COMPUTADOR - quando segura o clique
botaoGravador.addEventListener("mousedown", function() {
    botaoGravador.style.backgroundColor = "red";
    botaoGravador.textContent = "🔴 Gravando...";
    statusGravacao.textContent = "Status: Gravando áudio...";
});


// COMPUTADOR - quando solta o clique
botaoGravador.addEventListener("mouseup", function() {
    botaoGravador.style.backgroundColor = "";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});


// CELULAR - quando coloca o dedo
botaoGravador.addEventListener("touchstart", function() {
    botaoGravador.style.backgroundColor = "red";
    botaoGravador.textContent = "🔴 Gravando...";
    statusGravacao.textContent = "Status: Gravando áudio...";
});


// CELULAR - quando tira o dedo
botaoGravador.addEventListener("touchend", function() {
    botaoGravador.style.backgroundColor = "";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});