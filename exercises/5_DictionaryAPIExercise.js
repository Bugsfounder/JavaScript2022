console.log("Exercise 5 Dictionary Api");
/**YOU HAVE TO PRETEND TO USE A WORD API WHICH WILL CONTAIN AN OBJECT AND YOU HAVE TO PRINT DEFINITION FROM ALL THE RESULTS OF THAT WORD API. YOU HAVE TO PRINT IT IN THE DOM.
YOU HAVE TO TAKE INPUT FROM THE USER USING AN INPUT TAG
IF YOU ARE USING BOOTSTRAP THEN ITS A PLUS. */

// FREE WORD API :- https://api.dictionaryapi.dev/api/v2/entries/en/<WORD>

// WEBSITE:- https://dictionaryapi.dev/

let data;
let searchBtn = document.getElementById('searchBtn');
let meaningContainer = document.getElementById('meaningContainer');
let query = document.getElementById('query');

searchBtn.addEventListener('click', searchDefinitionOfWord);

function searchDefinitionOfWord() {
    let str;
    if (query.value !== '') {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query.value}`;
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onprogress = function () {
            meaningContainer.innerHTML = "Searching....";
        }

        xhr.onload = function () {
            if (this.status == 200) {
                data = JSON.parse(this.responseText);
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
                setTimeout(() => {
                    meaningContainer.innerHTML = str;
                }, 1000);
            } else {
                meaningContainer.innerHTML = "<h4 class='text-center'>Enter A Valid Word<h1>";
            }

        }
        xhr.send();
    } else {
        meaningContainer.innerHTML = "<h4>Enter Something to Search<h1>";
    }
}


