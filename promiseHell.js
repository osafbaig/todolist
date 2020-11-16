//promise 1
function getNo(){
    return new Promise((resolve,reject)=>{
        resolve(value=4)
    })
}

//promise 2
function square(num){
    return new Promise((resolve,reject)=>{
        resolve(value=num*num)
    })
}

function cube(num){
    return new Promise((resolve,reject)=>{
        resolve(value=num*num*num)
    })
}
    

// promise Hell
// getNo().then((data)=>{
//     console.log(data);
//     square(data).then((res)=>{
//         console.log(res);
//         cube(res).then((res)=>{
//             console.log(res);
//         }).catch((e)=>{
//             console.log(e);
//         })
//     }).catch((e)=>{
//         console.log(e);
//     })
// }).catch((e)=>{
//     console.log(e);
// })

// async function test(){
//     try{
//         const no =await getNo();
//         const sq=await square(no);
//         return await cube(sq)
//     }catch(e){
//         console.log(e);
//     }

// }

// test().then((data)=>{
//     console.log(data);
// }).catch(e=>console.log(e))



// print each things
async function test(){
    try{
        let arr=[];
        const no =await getNo();
        arr.push({"number is ":no})
        const sq=await square(no);
        console.log('hello');
        arr.push({"sqaure is ":sq})
        const  c= await cube(sq)
        arr.push({"cube is ":c})
        return arr;

    }catch(e){
        console.log(e);
    }

}

test().then((data)=>{
    console.log(data);
}).catch(e=>console.log(e))