

// for send message
let showOutput = "";
const sendMess = (id) => {
  let trg = document.getElementById(id);
  let mes_box = document.getElementById("chat-container");

  let temp = trg.value;

  console.log(mes_box);
  showOutput += `
          <div class="row d-flex justify-content-end m-3 me-0" id="message-box">
            <div class="col-8 pe-0">
              <div class="mess-blue rounded d-flex justify-content-end">
                <p
                  class="p-2 text-end"
                  style="
                    background-color: rgb(249, 247, 247, 0.9);
                    border-radius: 20px;
                    margin-bottom: 0;
                    display: inline-block;
                  "
                >
                  ${temp}
                </p>
              </div>
            </div>
          </div>
        `;

  mes_box.innerHTML = showOutput;
  trg.value = "";
};

//fetch json data
let arr = [];
fetch("assets/data.json")
  .then((response) => {
    return response.json();
  })
  .then((val) => {
    arr=val;
    let putEle = document.getElementById("slider-contacts");
    let out = "";
    for (let e of val) {
      out += `
      <div class="row mb-3">
      <div class="col d-flex p-0" id="call_Name" onclick="changeData(${e.id})" >
        <div class="profile-pic">
          <img src="${e.img}" alt=""/>
        </div>
        <div class="name ps-2 text-white d-flex justify-content-between">
          <p>${e.name}</p>
          <p class="ms-2 count">22+</p>
        </div>
      </div>
    </div>
       `;
    }
    putEle.innerHTML = out;
    // console.log(putEle);
  });

// show name in chat header

const changeData = (id) => {
  let mes_box = document.getElementById("chat-container");
  let name = document.getElementById('forChange');
  let pic = document.getElementById('photo');
  // console.log(arr[id].name+"....."+name.innerText+"---"+pic.getAttribute('src'));
  name.innerText = arr[id].name;
  pic.src = arr[id].img;
  mes_box.innerHTML="";

  // console.log(arr[id].name+"....."+name+"---"+pic);
};

// let el = document.getElementById("call_Name");
// el.addEventListener("click", changeData);
// el.style.border="2px solid red";
