
const baseURL = "https://swapi.dev/api/"

let aldBtn = document.querySelector('.ald')
let tatBtn = document.querySelector('.tat')
let body = document.querySelector('body')

const getAldRes = () => {
    axios.get(`${baseURL}planets/?search=alderaan`)
    .then((res) => {
        let resArr = res.data.results[0].residents
        for(i=0; i<resArr.length; i++) {
            axios.get(resArr[i])
            .then((res) => {
                let content = document.createElement('h2');
                content.textContent = res.data.name;
                body.appendChild(content)
            })
        }
    })
}
const getTatRes =() => {
    axios.get(`${baseURL}planets/?search=tatooine`)
    .then((res) => {
        let resArr = res.data.results[0].residents
        for(i=0; i<resArr.length; i++) {
            axios.get(resArr[i])
            .then((res) => {
                let content = document.createElement('h2');
                content.textContent = res.data.name;
                body.appendChild(content)
            })
        }
    })
}

aldBtn.addEventListener('click', getAldRes)
tatBtn.addEventListener('click', getTatRes)
