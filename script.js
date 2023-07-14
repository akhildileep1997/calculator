
// display number in text box

function displayNumber(num)
{
   var v =  document.getElementById('result') // or document.getElementById('result')
   v.value += num     
   //result.value += num
}

// clear text box
function ClearBox()
{
  result.value = "";
}

// evaluate expression
  function evaluateExp()
{
  // method 1
  // exp = result.value;
  // output = eval(exp)
  // result.value = output;
 
  // 2nd method
  result.value=eval(result.value)
}

// remove last item
 function removeLastItem()
 {
  currentItem = result.value;
  result.value = currentItem.slice(0,-1)
 }

