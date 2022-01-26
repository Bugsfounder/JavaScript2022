console.log("JavaScript Promises Quick Quiz");

function getResponse(word) {
    return new Promise(function (resolve, reject) {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (this.status == 200) {
                let data = JSON.parse(this.responseText);
                let word = data[0].word;
                let partOfSpeech = data[0].meanings[0].partOfSpeech;
                let origin = data[0].origin
                let definition1 = data[0].meanings[0].definitions[0].definition
                let definition2 = data[0].meanings[0].definitions[1].definition
                str = `  <ul class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div><b>Word:</b> ${word}</div>
                                <hr>
                                <div><b>Part Of Speech:</b> ${partOfSpeech}</div>
                                <div><b>Origin:</b> ${origin}</div>
                                <div><b>Definition 1:</b> ${definition1}</div>
                                <div><b>Definition 2:</b> ${definition2}</div>
                            </div>
                        </li> </ul>`;
                resolve(str);
            } else {
                reject("<h4 class='text-center'>Enter A Valid Word<h1>");
            }
        }
        xhr.send();
    });
}

getResponse('mango').then(function (str) {
    document.getElementById('students').innerHTML = str;
}).catch(function (err) {
    document.getElementById('students').innerHTML = err;
})