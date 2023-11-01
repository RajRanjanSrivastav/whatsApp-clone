// const showData =()=>{
   
// }

fetch('assets/data.json')
.then((response)=>{
  return response.json();
})
.then((val)=>{

    let putEle = document.getElementById('slider-contacts');
    let out = "";
    for (let e of val)
    {
       out += `
       <div class="row mb-3">
            <div class="col d-flex p-0">
              <div class="profile-pic"><img src="${e.img}" alt="" /></div>
              <div class="name ps-2 text-white d-flex justify-content-between">
                <p>${e.name}</p>
                <p class="ms-2 count">22+</p>
              </div>
            </div>
          </div>
       `
    }
    putEle.innerHTML = out;
    console.log(putEle);
})