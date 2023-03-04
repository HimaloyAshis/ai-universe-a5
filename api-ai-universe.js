const fetchAI=()=>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res=>res.json())
    .then(data=>showAI(data.data.tools))
    
}
const showAllBtn=()=>{
    loader(true)
    if(AI.length>6){

        AI=AI.length
    }
}
    
const showAI=AI=>{
    const cardContainer =document.getElementById('cardContainer')
    const showAll= document.getElementById('see-more')
    const btnShow=()=>{
        if(AI.length==12){
            AI= AI.slice(0, 12)
            showAll.classList.remove('d-none')
        }
        else{
            
            showAll.classList.add('d-none')
        }
    }
    btnShow()

    

    AI.forEach(api=>{
        // console.log(api)
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
            
            <div><i class="fa-solid fa-right-long" data-bs-toggle="modal" data-bs-target="#apiModal" onclick="fetchModal('${id}')"></i></div>
        </div>

        </div>
    </div>
    `
    cardContainer.appendChild(div);

})

}

// model area
const fetchModal=id=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res=>res.json())
    .then(data=>modelShow(data))
}

const modelShow= modelDisplay=>{

    // console.log(modelDisplay.data)
    const {data} = modelDisplay
    console.log(data)
     Object.values(data.features).forEach(feature=>{
            // console.log(feature)
            const {feature_name} = feature;
            // console.log(feature_name)
    

        // Object.values(animals).forEach(val => console.log(val));
    const modalId = document.getElementById('modalId')
    modalId.innerHTML='';
    const div= document.createElement('div')
    div.classList.add('col')
    div.innerHTML =`
    <div class="d-flex  modalW">
    <div class="card ">
    
    <div class="card-body" ">
    <div><p class="fs-5">${modelDisplay.data.description}</p></div>
    
    <div class="d-flex justify-content-between align-items-center gap-2">
    <div class="bg-secondary text-white rounded-2 py-8 px-2">${data.pricing ? data.pricing[0].price: 'not available'}${data.pricing ? data.pricing[0].plan: 'not available'}</div>
    <div class="bg-secondary text-white rounded-2 py-8 px-2">${data.pricing ? data.pricing[1].price: 'not available'}${data.pricing ? data.pricing[1].plan: 'not available'}</div>
    <div class="bg-secondary text-white rounded-2 py-8 px-2">${data.pricing ? data.pricing[2].price: 'not available'}${data.pricing ? data.pricing[2].plan: 'not available'}</div>
    </div>
    <div></div>
    
    
    <div class="d-flex justify-content-between align-items-center">
    <div>
        <p class="fs-5">Feature</p>
        <ul><li class="">${feature_name ? feature_name : 'not available'}</li></ul>
       
    </div>
    <ul>
    
        <p >Integration</p>
        <li>${data.integrations ? data.integrations[0] : 'not available'}</li>
        <li>${data.integrations ? data.integrations[1] : 'not available'}</li>
        <li>${data.integrations ? data.integrations[2] : 'not available'}</li>
       
    </ul>
    
    </div>

    </div>
    </div>

    <div class="card">
            <div>
            <img class="img-fluid img-thumbnail" src="${modelDisplay.data.image_link[0]}" class="card-img-top" alt="...">
                <p class="bg-danger w-25 h-10 rounded-2 text-center mb-50">${data.accuracy.score ? data.accuracy.score : '' } </p>
            </div>
    <div class="card-body">
    <p class="fs-4">${data.input_output_examples ? data.input_output_examples[0].input: 'not available'}</p>
    <p class="fs-6">${data.input_output_examples ? data.input_output_examples[1].input: 'not available'}</p>
    
    
    
    <div class="d-flex justify-content-between align-items-center">
    
    
    </div>

    </div>
    </div>
    </div>
    `
    modalId.appendChild(div);
    loader(false)
})
}




const loader=isLoading=>{
    const spinner=document.getElementById('spinner')
    if(isLoading){
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none')
    }
}

fetchAI()