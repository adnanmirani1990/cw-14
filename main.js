const resultTag = document.getElementById("result");
const textArea = document.getElementById("textarea");
const submitBtn = document.getElementById("submit-btn");

// TODO: Write your codes here

let obj ={
    "test1": "12",
    "test2": 2,
    "test3": true
}

textArea.innerHTML = JSON.stringify(obj)

submitBtn.addEventListener('click',()=>{
    function jsonAnalyze(obj) {
        let arr = [];
        analyzeJson(obj, null, arr);
        return logBeautifiedDotNotation(arr);
    
    function analyzeJson(obj, parentStr, outArr) {
        let opt;
        if (!outArr) {
            return "no output array given"
        }
        for (let prop in obj) {
            opt = parentStr ? parentStr + '.' + prop : prop;
            if (Array.isArray(obj[prop]) && obj[prop] !== null) {
                    let arr = obj[prop];
                if ((Array.isArray(arr[0]) || typeof arr[0] == "object") && arr[0] != null) {                        
                    outArr.push(opt + '[]');
                    analyzeJson(arr[0], opt + '[]', outArr);
                } else {
                    outArr.push(opt + '[]');
                }
            } else if (typeof obj[prop] == "object" && obj[prop] !== null) {
                    outArr.push(opt + '{}');
                    analyzeJson(obj[prop], opt + '{}', outArr);
            } else {
                if (obj.hasOwnProperty(prop) && typeof obj[prop] != 'function') {
                    outArr.push(Object.entries(obj));
                }
            }
        }
    }
    
    function logBeautifiedDotNotation(arr) {
        retStr = '';
        const charUl = document.createElement('UL')
        console.log(arr[0]);
        arr[0].map( (item)=> {
            const charLi = document.createElement('LI')
            charLi.innerHTML = item
            charUl.appendChild(charLi)
            resultTag.appendChild(charUl)
            if(typeof item[1] === 'string'){
                charLi.classList.add("value-string")
            }else if (typeof item[1] === 'number'){
                charLi.classList.add("value-number")
            } else if (typeof item[1] === 'boolean'){
                charLi.classList.add("value-boolean")
            } 
        });
            return retStr;
        }
    }
     jsonAnalyze(obj);

})
