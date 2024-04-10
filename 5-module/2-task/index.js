function toggleText() {
  document.querySelector('button').addEventListener("click", () => document.getElementById('text').hidden ? document.getElementById('text').hidden = false : document.getElementById('text').hidden = true)
}
