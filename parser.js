/**
 * function converts string to array made of numbers
 *
 *@param {string}
 *@return {array}
 */
function parser(str)
{
  var res= new Array();
  var len= str.length;
  var container="";
  var j=0;

  for(var i=0; i<len; i++)
  {
    if(str[i]==",")
    {
      res[j]=parseInt(container);
      j++;
      container="";
    }
    else
    {
        container= container + str[i];

        if (i==len-1)
        {
          res[j]=parseInt(container);
        }
    }
  }
  return res;
}
