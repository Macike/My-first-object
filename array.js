/**
 * makes summary of numbers in the array
 *
 *@param {array}
 *@return {Number}
  */

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


/**
 * makes average value from array values
 *
 *@param {array}
 *@return {Number}
 */
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


/**
 * seeks the largest number from array
 *
 *@param {array}
 *@return {Number}
*/
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

/**
 * seeks the index of the biggest number
 *
 *@param {array}
 *@return {Number}
 */
function maxIndex(arr)
{
  var maximum=arr[0];
  var index=0;
  var len=arr.length;
  for(var i=1; i<len; i++)
  {
    if (maximum < arr[i])
    {
      maximum=arr[i];
      index=i;
    }
  }
  return index;
}

/**
 * rewrites array upside down
 *
 *@param {array}
 *@return {array}
 */
function reverse(arr)
{
  var len=arr.length;
  var arr2=new Array(len);
  var p=0;
  for(var i=len-1; i>=0; i--)
  {
    arr2[p]=arr[i];
    p++;
  }
return arr2;
}

/**
 * returns array which contains only even numbers
 *
 *@param {array}
 *@return {array}
 */
function Even(arr)
{
  var arr2 = new Array();
  var i=0;
  var j=0;
  var len=arr.length;

  while(i<len)
  {
    if((arr[i] % 2) == 0)
    {
      arr2[j]=arr[i];
      j++;
    }
    i++;
  }
  return arr2;
}
