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
      var num = parseInt(container);

      if (isNaN(num))
        throw "Non numerical attribute";

      res[j] = num;
      j++;
      container="";
    }
    else
    {
        container= container + str[i];

        if (i==len-1)
        {
          num = parseInt(container);

          if (isNaN(num))
            throw "Non numerical attribute";

            res[j] = num;          
        }
    }
  }
  return res;
}
