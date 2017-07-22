function sum (arr)
{
  var result=0;
  var len=arr.length;
  for(var i=0;i<len; i++)
  {
    result=result+arr[i];
  }
  return result;
}

function mean(arr)
{
  var len=arr.length;
  var suma=sum(arr);
  var result=suma/len;
  return result;
}

function std(arr)
{
  var len=arr.length;
  var result=0;
  var average= mean(arr);
  for(var i=0; i<len; i++)
  {
    result= result + ((arr[i]-average)*(arr[i]-average));
  }
  result= result/len;
  result=Math.sqrt(result);
  return result;
}
