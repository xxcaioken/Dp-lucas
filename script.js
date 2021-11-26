var itemLista = document.getElementById("ul");
function addTarefa() {
    if (document.getElementById("itemLista").value !== "") {
        var tarefa = document.createElement("li");
        tarefa.innerHTML = document.getElementById("itemLista").value;
        itemLista.appendChild(tarefa);
        
        var remover = document.createElement("a");
        remover.innerHTML = "Remover";
        remover.setAttribute("href", "javascript:;"); // apenas para parecer um link
        remover.onclick = function() {
            itemLista.removeChild(tarefa);
            itemLista.removeChild(remover);
        }
        itemLista.appendChild(remover);
        
        document.getElementById("itemLista").value = "";
    }
}
