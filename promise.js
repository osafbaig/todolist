function isbread(){
    return false;
    }
  
    function isegg(){
    return false;
    }

function bring(){
    return new  Promise((resolve,reject)=> {
        if(isbread())
        {
            resolve(value="breed avail")
        }
        else if(isegg()){
            resolve(value="Egg avail")
        }
        else
        {
            reject(value="ntohing avail")
        }

    })
}

bring().then((data)=>{
    console.log(data);
}).catch((err)=>{
console.log(err);
})
