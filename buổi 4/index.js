let is_array=function(arr){
    console.log(Array.isArray(arr))
}
console.log(is_array('w3resource'))
console.log(is_array([1, 2, 4, 0]))

let array_Clone = function(arr) {
    return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

let first =  function(arr, n) {
    if (arr == null) 
    return void 0
  if (n == null) 
    return arr[0]
  if (n < 0)
    return []
  return arr.slice(0, n)
}
console.log(first([7, 9, 0, -2]))
console.log(first([],3))
console.log(first([7, 9, 0, -2],3))
console.log(first([7, 9, 0, -2],6))
console.log(first([7, 9, 0, -2],-3))

let last = function(arr, n) {
    if (arr == null) 
      return void 0
    if (n == null) 
       return arr[arr.length - 1]
    return arr.slice(Math.max(arr.length - n, 0))
    }
console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2],3))
console.log(last([7, 9, 0, -2],6))