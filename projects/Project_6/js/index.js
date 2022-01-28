console.log("JavaScript Project 6: PostMan Clone - Creating a Get/Post Request Website");

// UTILITY FUNCTIONS
// 1. UTILITY FUNCTION TO GET DOM ELEMENT FROM STRING 
const getElement = string => {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// INITIALIZE NUMBER OF PARAMETERS COUNT
let addedParametersCount = 0;

// HIDE THE PARAMETERS BOX INITIALLY
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// IF THE USER CLICKS ON PARAMETER, HIDE THE JSON BOX
let parametersRadio = document.getElementById('parametersRadio');
parametersRadio.addEventListener('click', () => {
    document.getElementById('jsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
});

// IF THE USER CLICKS ON JSON, HIDE THE PARAMETERS BOX
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('jsonBox').style.display = 'block';
});


// IF USER CLICKS ON + BUTTON ADD MORE PARAMETER FIELDS
let addParameter = document.getElementById('addParameter');
addParameter.addEventListener('click', () => {
    let parameter = document.getElementById('parameters');
    let string = `
        <div class="mb-3 row g-3">
            <div class="col-sm-9 d-flex">
                <label for="url" class="col-sm-3 col-form-label">Parameter ${addedParametersCount + 2}</label>
                <div class="col-md-6 me-5">
                    <input type="text" class="form-control" id="parameterKey${addedParametersCount + 2}" placeholder="Parameter ${addedParametersCount + 2} Key" />
                </div>
                <div class="col-md-6 me-2">
                    <input type="text" class="form-control" id="parameterValue${addedParametersCount + 2}" placeholder="Parameter ${addedParametersCount + 2} Value" />
                </div>
                <button class="removeParameter btn btn-primary"> - </button>
            </div>
        </div>`;

    // CONVERT STRING TO DOM ELEMENT
    let paramElement = getElement(string);
    parameter.appendChild(paramElement);

    // ADD AN EVENT LISTENNER TO REMOVE PARAMETER ON CLICKING - BUTTON
    let deleteParam = document.getElementsByClassName('removeParameter');
    for (let item of deleteParam) {
        item.addEventListener('click', (event) => {
            event.target.parentElement.remove();
            addedParametersCount--;
        });
    }
    addedParametersCount++;
});

// IF THE USER CLICKS ON SEND BUTTON
const send = document.getElementById('send');
send.addEventListener('click', (e) => {
    e.preventDefault();

    // SHOW PLEASE WAIT IN THE RESPONSE BOX TO REQUEST PATEINCE FROM THE USER
    let responseJsonText = document.getElementById('responsePrism')
    responseJsonText.innerHTML = "Please wait... Fetching Response...";

    // GET ALL THE VALUES USER HAS BEEN ENTERED
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // IF USER SELECT PRAMETERS INSTEAD OF JSON THEN COLLECT ALL THE PARAMETERS IN AN OBJECT
    let data = {};
    if (contentType === 'parameters') {
        for (let i = 0; i < addedParametersCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById(`parameterKey${i + 1}`).value;
                let value = document.getElementById(`parameterValue${i + 1}`).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    } else {
        data = document.getElementById('requestJsonText').value;
    }
    console.log(`Url: ${url}, Request Type: ${requestType}, Content Type: ${contentType},\n Data: ${data}`);


    if (requestType === 'GET') {
        fetch(url, { method: "GET" }).then(response => response.text()).then(text => {
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    } else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }
});