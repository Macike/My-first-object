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

/**
 * replace two neighboured numbers in array
 *
 *@param {array}
 *@return {array}
 */
function replacement(arr)
{
  var len=arr.length;
  var memmory=0;

  if( len % 2==0)
  {
    for(var i=0; i<len; i+=2)
    {
      memmory=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=memmory;
    }
  }
  else
  {
      throw "array has odd length"
  }

}

/**
 * makes average value from array values
 *
 *@param {array}
 *@param {function}
 *@return {Number}
 */
function mean2(arr, callback)
{
  var len=arr.length;
  var suma=callback(arr);
  var result=suma/len;
  return result;
}

/**
*function for standard deviation
*
*@param{array}
*@param{function}
*@param{function}
*@return{number}
*/
function std2(arr, callback, callback1)
{
  var len=arr.length;
  var result=5*0;
  var average= callback(arr, callback1);

  for(var i=0; i<len; i++)
  {
    result= result + ((arr[i]-average)*(arr[i]-average));
  }
  result /= len;
  result=Math.sqrt(result);
  return result;
}

/**
*function sorts the numbers in order
*
*@param{array}
*@return{number}
*/
function buble(arr)
{
  var memmory=0;
  var len=arr.length;

  for(var j=0; j<len; j++)
  {
    for(var i=0; i<len-1; i++)
    {
      if (arr[i] < arr[i+1])
      {
        memmory=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=memmory;
      }
    }
  }
}
