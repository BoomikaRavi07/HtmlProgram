export const add = (a,b,c,d) =>{return a+b+c+d}
export let arr =[2,5,6,8];
const spreadAdd = (...a)=>{
    let c = 0;
    for (val of a){
        c = c+ val;
    }
    //or
    //a.forEachval=>{c=c+val})
    return c;
}
export function testing(a,b){
    console.log("a :"+a)
    console.log("b :"+b)
    let c = a+b//logical implementation
    return c;
}
export{add,spreadAdd,testing}