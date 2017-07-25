/*@param{array}
@return summary of array numbers */

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


/*@param{array}
@return average of array */
function mean(arr)
{
  var len=arr.length;
  var suma=sum(arr);
  var result=suma/len;
  return result;
}


/*@param{array}
@return  smerova odchylka*/
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


/*@param{array}
@return  the largest number*/

function max (arr)
{
  var maximum=arr[0];
  var len=arr.length;
  for(var i=1; i<len; i++)
  {
    if (maximum < arr[i])
    {
      maximum=arr[i];
    }
  }
  return maximum;
}
