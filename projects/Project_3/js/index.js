console.log("NewsHunger JavaScript Project 1");

// ******* FUNCTIONS ARE HERE *******

// INITIALIZING FETCH NEWS FUNCTION THAT TAKES URL AS PARAMETER AND FETCH NEWS FROM THAT URL AND RETURNS A PROMISE
const fetchNews = async (url) => {
    try {
        let request = await fetch(url); // WAITING TO RESPONSE
        let news = await request.json(); // WAITNG TO JSON DATA
        return news;
    } catch (error) {
        return {
            "error": "Invalid Url",
            "message": "Something is wrong with your url heat your daily limit of api key."
        };
    }
}

// INITIALIZING SET OBJECT TO HTML DOM FUNCTION THAT TAKES AN OBJECT AS PARAMETER AND SETS ALL NEWS INTO HTML DOM
const setObjectToHtmlDom = (obj) => {
    let imageUrlIfNull = 'https://cdn.cnn.com/cnnnext/dam/assets/200225125440-02-supreme-court-building-file-super-tease.jpg';
    let news = obj.articles;
    let html = document.getElementById('newsContainer').innerHTML;
    news.forEach((element, index) => {
        html += `<div class="col">
            <div class="card">
                <img src=${element.urlToImage != null ? element.urlToImage : imageUrlIfNull}
                    class="card-img-top" alt="loading..." style="height: 225px;"/>
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
            </div>
        </div>`
    });
    document.getElementById('newsContainer').innerHTML = html;
}


/*
The category you want to get headlines for. Possible 
options: business, entertainment, general, health, science, sports, technology. 
Note: you can't mix this param with the sources param.
*/


// ****** VARIABLES HERE ******
const apiKey = '2d72bc177ca148f8832a7c2797c098a0';
let country = 'in';
let category = 'business';
let pageSize = 6;


// ******* CODE BODY IS HERE *******

// NEWS URL TO FETCH NEWS AND START OUT PROGRAM
let newsApi = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

// FETCH NEWS USING fetchNews() FUNCTION THAT FETCH DATA FROM API AND RETURN A RPOMIS
fetchNews(newsApi).then(data => {

    // INITIALIZING PAGE AND NUMBER OF PAGES (numOfPages) VARIABLE. PAGE VARIABLE IS SIMPLY STORE PAGE NUMBEB THAT WE WANT TO FETCH, numOfPages VARIABLE IS STOTE NUMBER OF PAGES.
    let page = 1, numOfPages = Math.ceil(data['totalResults'] / pageSize);

    // NEWS API URL TO FETCH NEWS WITH CUSTOM PARAMETERS COUNTARY, CATEGOFY, APIKEY, PAGE, PAGESIZE ETC.
    newsApi = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    // FETCHING ALL NEWS AND DISPLAY IT ON THE DOM
    fetchNews(newsApi).then(data => {
        setObjectToHtmlDom(data); // GIVING DATA AS ARGUMENT TO setObjectToHtmlDom() FUNCITON THAT I INITIALIZE ABOVE
    });

    // // IF USER CLICKS ON NEXT BUTTON THEN FETCH NEXT PAGE NEWS
    // document.getElementById('next').addEventListener('click', () => {
    //     if (page > 1 && page <= numOfPages) {
    //         page++;
    //         newsApi = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    //         // FETCHING ALL NEWS AND DISPLAY IT ON THE DOM
    //         fetchNews(newsApi).then(data => {
    //             setObjectToHtmlDom(data);
    //             console.log(data, category);
    //         });
    //         document.getElementById('previous').removeAttribute('disabled');
    //     } else {
    //         document.getElementById('next').setAttribute('disabled', 'true');
    //     }
    // });

    // // IF USER CLICKS ON PREVIOUS BUTTON FETCH PREVIOUS PAGE NEWS
    // document.getElementById('previous').addEventListener('click', (e) => {
    //     if (page > 1 && page <= numOfPages) {
    //         page--;
    //         newsApi = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    //         // FETCHING ALL NEWS AND DISPLAY IT ON THE DOM
    //         fetchNews(newsApi).then(data => {
    //             setObjectToHtmlDom(data);
    //         });
    //         document.getElementById('next').removeAttribute('disabled');
    //     } else {
    //         document.getElementById('previous').setAttribute('disabled', 'true');
    //     }
    // });

    // ADDING SCROLL EVENT LISTENNER ON THE WINDOW TO MAKE INFINITE SCROLL AND FETCHING NEXT NEWS\ window.
    addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight)) {
            page++; pageSize = 3
            newsApi = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`; if (page > 1 && page <= numOfPages) { // FETCHING 
                // ALL NEWS AND DISPLAY IT ON THE DOM
                fetchNews(newsApi).then(data => { setObjectToHtmlDom(data); console.log(data, category); });
            }
        }
    });

});

