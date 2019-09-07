const fetch = require("node-fetch");

function getTatooineResidents() {

    return fetch('https://swapi.co/api/planets/1/')
      .then((res)=> res.json())
        .then((tat)=>{
            return tat.residents;
        });

}


function promiseMeAString(arg){

    return new Promise((res,rej) => {

        if(typeof arg === 'string'){
             res('You kept the Promise!');
        }
        rej('You have failed me!');

    });
}


module.exports = { getTatooineResidents, promiseMeAString }
