
function sum(...nums){
    return nums.reduce((acc,current)=>acc+current,0);
}
function multiply(...nums) {
    return nums.reduce((acc, current)=>acc*current,1);
  }
  function reverse(str) {
    return str.split("").reduce((acc, current) => current + acc, "");
  }
  function filterLongWords(words, i) {
    return words.filter((e) => e.length > i);
  }