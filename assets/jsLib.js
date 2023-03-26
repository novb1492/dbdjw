export function twodmakearray(row,colums)
{
  var array=new Array(row);
  for(var i=0;i<array.length;i++)
  {
    array[i]=new Array(colums);
  }
  return array
}