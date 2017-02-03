
var a = [1,2,3];
var b = [100,2,1,10];

var c = a.concat(b.filter(function (item) {
    return a.indexOf(item) <0;
}));

for(var i = 0; i < c.length; i ++){
    var indexOfMin = 0;
    if(c[i] < indexOfMin){
        indexOfMin = i;
    }
}

console.log(c.sort(function(a,b){return a-b}));