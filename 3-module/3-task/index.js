function camelize(str) {
  let words = str.split('-').map((word, index) => {
    if (index != 0) {
      word =  word[0].toUpperCase() + word.slice(1)
    }
    return word
  })

  return words.join('')
}