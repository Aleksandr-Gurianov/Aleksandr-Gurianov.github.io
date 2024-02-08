// information from API IMOEX

function f2 () {
    const allcomp = new XMLHttpRequest();

    allcomp.open ('GET', URL +'/iss/engines/stock/markets/shares/boards/tqbr/securities.json');
    // ?securities.columns=SECID,SHORTNAME

    allcomp.onload = function () {
        const data = JSON.parse(allcomp.response);
        console.log(data);
        document.querySelector('.information_outside').innerHTML = '<div class="toollist"></div>';
        let names = document.createElement('div');
        names.classList.add('names');
        names.innerHTML = `
        <p><span class="material-symbols-sharp">inventory</span> Название компании</p>
        <p class='text-muted'><span class="material-symbols-sharp">terminal</span>Уровень листинга</p>
        <p><span class="material-symbols-sharp">flag</span>Закрытие дня</p>
        <p><span class="material-symbols-sharp">start</span>Открытие дня</p>
        <p><span class="material-symbols-sharp">earthquake</span>Разница</p>
        
        </div>    
            `;
            document.querySelector('.toollist').appendChild(names);
        
        for (let i=0; i<data.securities.data.length; i++){
            let resultOFDay = Math.round(data.securities.data[i][3] - data.securities.data[i][15]);
            row = document.createElement('div');
            row.classList.add('inform_name');
            row.innerHTML = `  
            
                <div class= 'name_shortname'>
                <a href= "#">   
            <h4>${data.securities.data[i][2]}</h4>
            <p>${data.securities.data[i][0]}</p>
              </a>
                </div>
            <p class='text-muted'>${data.securities.data[i][25]}</p>
            <p>${data.securities.data[i][3]}</p>
            <p>${data.securities.data[i][15]}</p>
            <p>${resultOFDay}</p>
            `;

            // row.className('inform_name');
            document.querySelector('.toollist').appendChild(row)

        }

        ;
    }

    allcomp.send();
}

f2();

