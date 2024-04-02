function filterRange(arr, a, b) {
  let filtered = []

  for (let item of arr) {
    if (item >= a && item <= b) {
      filtered.push(item)
    }
  }

  return filtered
}
