// search system 
const searchPhone = () => {
    const searchfield = document.getElementById('search-field');
    const searchtext = searchfield.value;
    // console.log(searchtext);

    searchfield.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchtext}`;
    // console.log(url);
    fetch(url)
    .then (res => res.json())
    .then((status) => displaySearchResult(status.data));
}

const displaySearchResult = data => {
    console.log(data);
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <button onclick>details</button>
            
                    
                </div>
            </div>
        `;

        searchResult.appendChild(div);
    })
    
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${id} `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetail(data.slug));
};

const displayPhoneDetail = (data) => {
  console.log(data);
  const phoneDetails = document.getElementById("phone-detail");
  const div = document.createComment("div");
  div.classList.add("card");
  div.innerHTML = `
<img src="${data.image}" class="card-img-top" alt=">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary"> Go somewhere</a>
  </div>
`;
  phoneDetails.appendChild(div);
};
 