const item = document.querySelector('.item')
item.addEventListener('dragstart', dragStart)
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  setTimeout(() => {
    e.target.classList.add('hide')
  }, 0)
}
const boxes = document.querySelectorAll('.box')
boxes.forEach((box) => {
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragover', dragOver)
  box.addEventListener('dragleave', dragLeave)
  box.addEventListener('drop', drop)
})
function dragEnter(e) {
  e.target.classList.add('drag-over')
  e.preventDeafault()
}
function dragOver(e) {
  e.target.classList.add('drag-over')
  e.preventDeafault()
}
function dragLeave(e) {
  e.target.classList.remove('drag-over')
}
function drop(e) {
  e.target.classList.remove('drag-over')
}
