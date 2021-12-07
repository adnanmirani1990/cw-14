const resultTag = document.getElementById("result");
const textArea = document.getElementById("textarea");
const submitBtn = document.getElementById("submit-btn");

// TODO: Write your codes here


// function getJson() {
//     return fetch('./json-examples/example-1.json')
//         .then(response => {
//             return  response.json()
//         })
//         .catch(err => err)
// }
// getJson().then(response => {
//     console.log(response);
// })
  


let obj = {
    "prop_1": {
        "prop_11": "val_11",
        "prop_12": "val_12"
    },
    "prop_2": "val_2",
    "prop_3": "val_3"
};

textArea.innerHTML = JSON.stringify(obj)

submitBtn.addEventListener('click',()=>{
    function gfg_Run() {
        resultTag.innerHTML = JSON.stringify(obj, null, '\t');
    }
    gfg_Run()

})


for (key in obj) {
    span
    console.log(obj[key]);
 }