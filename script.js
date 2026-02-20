function showPage(num) {
    document.querySelectorAll('.tab-content').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('page' + num).style.display = 'block';
    document.getElementById('btn' + num).classList.add('active');
    
    document.getElementById('visto-pedagogico').style.display = (num <= 3) ? 'block' : 'none';
    document.getElementById('school-header').style.display = (num === 5) ? 'none' : 'block';
    document.getElementById('p5-header').style.display = (num === 5) ? 'block' : 'none';
    
    document.getElementById('dynamic-info').style.display = (num === 1 || num === 2) ? 'grid' : 'none';
    document.getElementById('quinzenal-header').style.display = (num === 3) ? 'flex' : 'none';
}

function addRow(tableId, cols) {
    const table = document.getElementById(tableId);
    const row = table.insertRow();
    for(let i=0; i<cols; i++) { 
        row.insertCell(i).contentEditable = "true"; 
        row.cells[i].innerText = (i === 0 && tableId === 'table-activities') ? (table.rows.length - 1).toString().padStart(2, '0') : "..."; 
    }
}

function removeRow(tableId) {
    const table = document.getElementById(tableId);
    if(table.rows.length > 2) table.deleteRow(-1);
}

function addTheory(targetId) {
    const target = document.getElementById(targetId);
    if(target.innerHTML !== "") return;
    target.innerHTML = `<div class="theoretical-frame"><span class="frame-title" contenteditable="true">Quadro Teórico / Notas</span><div contenteditable="true">Conteúdo...</div><button class="btn btn-danger no-print" style="font-size:7pt;" onclick="this.parentElement.remove()">Remover</button></div>`;
}

function clearArea(bodyId, theoryId) {
    if(confirm("Deseja limpar esta área?")) {
        if(bodyId === 'free-canvas') document.getElementById(bodyId).innerHTML = '<p style="color: gray; text-align: center; margin-top: 50px;">[Cole aqui o plano do chat...]</p>';
        if(theoryId) document.getElementById(theoryId).innerHTML = "";
    }
}

function openChat() {
    const command = "DAE+, MODO SCHEMATIC STANDARD. Analise meus ficheiros e gere o conteúdo pedagógico ou administrativo.";
    const el = document.createElement('textarea');
    el.value = command; document.body.appendChild(el);
    el.select(); document.execCommand('copy'); document.body.removeChild(el);
    alert("Comando ACTIVAR DAE+ copiado!");
    window.open('https://gemini.google.com/app', '_blank');
}