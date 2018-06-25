document.addEventListener('DOMContentLoaded',function(e){
    const grid=document.querySelector('#grid');
    
    for(var j=0;j<16;j++){
        const row=document.createElement('div');
        row.classList.add('rows');
        for(var i=0;i<16;i++){
            const cell=document.createElement('div');
            cell.classList.add('in-grid');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    
});