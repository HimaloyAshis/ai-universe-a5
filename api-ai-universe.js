const fetchAI= AiData=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res=>res.json())
    .then(data=>showAI(data.data.tools))
}
    
const showAI=AI=>{
    const cardContainer =document.getElementById('cardContainer')
    AI.forEach(api=>{
        console.log(api)
        const {name, image, published_in, id, } = api;
        const div = document.createElement('div')
    div.classList.add("col")
    div.innerHTML=`
    <div class="card">
        <img class="img-fluid img-thumbnail" src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="fs-4">Feature</p>
        <p>1.Natural language processing</p>
        <p>2.Contextual understanding</p>
        <p>3.Text generation</p>
        <hr class="container">
        
        <div class="d-flex justify-content-between align-items-center">
        
        
            <div>
                <h5 class="card-title">${name}</h5>
                <i class="fa-solid fa-calendar-days ">    ${published_in}</i>
            </div>
            
            <div><i class="fa-solid fa-right-long"></i></div>
        </div>

        </div>
    </div>
    `
    cardContainer.appendChild(div);
    })
}

fetchAI()