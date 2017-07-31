/*var pole=[7, 8, 2, 1, 2, 5, 3];
var hromadka=[8, 16, 5, 23, 7, 4];
var s=std(pole);
var m=max(pole);

reverse(pole);
var d=Even(pole);
var i=Even(hromadka);*/

var str = "18,5,7,9,6,8,3";
var str1 = "18,65,7,9";
var str2 = "33,12,8,9,16,4";
try
{
    var p= parser(str);
    var p1=parser(str1);
    var p2=parser(str2);
    buble(p);
    buble(p1);
    buble(p2);
}
catch (e)
{
    alert(e);
}
