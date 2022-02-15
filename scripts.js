const api ="api"
const gamesurl ='url'

async function callapi(url){
try {
    const response = await fetch(url);
    const data = await response.json();
    const dataArray = data.results;

for (let i = 0; i < dataArray.length; i++){
    document.body.innerHTML +=`<div><h2>${dataArray.name}
    </h2><p>${dataArray.rating}</p><h5>number of tags:
    ${dataArray[i].tags.length}</h5></div>`;

        if (i === 7){
            break;
        }
    }
}
catch (err) {
    document.body.innerHTML ="det er oss" + err;
    console.log("err")
}
}
