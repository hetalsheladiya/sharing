let x=[10,10,10,20,20,30,30,50,50,50,50,70,70,70,70,70]

let demo=[]//[10]
x.map(d=>{

    let find=demo.find(i=>{
           if(d==i){
            return i
           }
    })
    if(find==undefined){
        demo.push(d)
        b[d]=1
    }else{
        b[d]=++b[d]
    }
})

for (const [k, v] of Object.entries(b)) {       
    b[k] = parseInt(v/2)
}
// console.log(b);
