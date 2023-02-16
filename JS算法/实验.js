let id = 'GLOBAL'
var obj = {
    id : 'obj',
    a:function(){
        console.log(this.id)
    },
    b:()=>{
        console.log(this.id)
    }
}
obj.a()
obj.b()
console.log(obj.b)
new obj.a()
new obj.b()