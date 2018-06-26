document.addEventListener('DOMContentLoaded',function(e){
    const btn=document.querySelector('#reset');
    const grid=document.querySelector('#grid');

    creategrid(16);
    btn.addEventListener('click',function(e){
        //reset function
        n=prompt('how many squares per side to make the new grid?');
        if(n>35){
            alert('enter a number less than 35');
        }
        else{
            while(grid.firstChild){
                grid.removeChild(grid.firstChild);
            }
            creategrid(n);
        }
        
    });
    
    function creategrid(x){
        console.log('creating');
        for(var j=0;j<x;j++){
            console.log(x);
            const row=document.createElement('div');
            row.classList.add('rows');
            for(var i=0;i<x;i++){
                const cell=document.createElement('div');
                cell.classList.add('in-grid');
                var size=450/x;
                cell.style.width=size+'px';
                cell.style.height=size+'px';
                row.appendChild(cell);
                cell.addEventListener('mouseover',function(e){
                    e.target.style.background='black';
                });
            }
            grid.appendChild(row);
        }
    };
    
    
});

