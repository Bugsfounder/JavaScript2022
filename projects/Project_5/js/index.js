console.log("JavaScript Project 5: CV Screener");

// RANDOM USER API 
// https://randomuser.me/api/ 

// DATA IS AN ARRAY OF OBJECTS WHICH CONTAINS INFORMATION ABOUT THE CANDIDATES
let data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
];

// CV ITERATOR
const cvIterator = (data) => {
    let nextIndex = 0;
    return {
        next: () => {
            if (data.length > nextIndex) {
                return {
                    value: data[nextIndex++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

let candidates = cvIterator(data);

const nextCV = () => {
    let currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {

        image.innerHTML = `<img src="${currentCandidate.image}"/>`;
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item"><b>Name:</b> ${currentCandidate.name}</li>
                                <li class="list-group-item"><b>Age:</b> ${currentCandidate.age} years old</li>
                                <li class="list-group-item"><b>City:</b> ${currentCandidate.city}</li>
                                <li class="list-group-item"><b>Language:</b> ${currentCandidate.language}</li>
                                <li class="list-group-item"><b>Framework:</b> ${currentCandidate.framework}</li>
                            </ul>`;
    } else {
        alert("End of Candidates Application");
        window.location.reload();
    }
}


// EVENTLISTENER FOR NEXT BUTTON 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
nextCV();