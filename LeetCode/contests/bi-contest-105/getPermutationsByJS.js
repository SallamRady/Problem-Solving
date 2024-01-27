function getPermutations(arr) {
  const result = [];

  // define a recursive helper function
  function permute(start) {
    if (start === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      // swap the current element with the start element
      [arr[start], arr[i]] = [arr[i], arr[start]];

      // recurse on the remaining elements
      permute(start + 1);

      // swap back to restore the original order
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  // call the helper function with the starting index 0
  permute(0);

  return result;
}


console.log(getPermutations(["ox","lb","diz","gu","v","ksv","o","nuq","r","txhe","e","wmo","cehy","tskz","ds","kzbu"]));