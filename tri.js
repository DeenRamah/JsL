function AreaOfTriangle(a,b,c){
    var s =(a+b+c)/2;
    var AreaA = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return AreaA;
}
var a =6;
var b =5;
var c =7;

var Tarea = AreaOfTriangle(a,b,c);
console.log(Tarea);