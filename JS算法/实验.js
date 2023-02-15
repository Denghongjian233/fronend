const array = []
const  fn = (arr)=>{
    for(let i = 0;i<arr.length; i++){
        if(Array.isArray(arr[i])){
            fn(arr[i])
        }
        else {
            array.push(arr[i])
        }
    }
}
fn(arr)
console.log(array)
