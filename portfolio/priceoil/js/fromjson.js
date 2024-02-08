

const api = 
`http://127.0.0.1:5500/js/types.json`;

const typesOil = [];

fetch(api)
.then(res => res.json())
.then(data =>{

    // console.log('data>>>>', data[0]['name']);
    data.forEach(element => {
        console.log(element.name)
    });
    console.log(data[0].name)
    // for (let i=0; i< data.length; i++) {
    //     typesOil.push(data)
    //     // console.log(data[i].name)
    // }
    // console.log(data[10].name)


    // data.forEach(element => {
    //     typesOil.push(element)
    // });

    
});

// function creating() {
//     let elem = document.createElement("h6"),
//     cont = document.createTextNode('123 lbyfvb'),
//     variety = document.getElementsByClassName('variety')

//     elem.appendChild(cont);    
//     variety.parentNode.appendChild(elem);

// // variety

// }

creating();
// typesOil.forEach(element => {
    

// })
console.log(typesOil)


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));

