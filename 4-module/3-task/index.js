function highlight(table) {
  let teachers = table.querySelector('tbody')

  for (let teacher of teachers.rows){
    //Добавить inline-стиль `style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18
    if (teacher.cells[1].innerHTML < 18) {
      teacher.style.textDecoration = 'line-through';
    } 

    //Проставить класс `male/female` в зависимости от содержимого ячейки `Gender`
    teacher.cells[2].innerHTML == 'm' ? teacher.classList.add('male') : teacher.classList.add('female');

    //Проставит аттрибут hidden, если  data-available атрибута нет вообще
    teacher.lastElementChild.dataset.available === undefined ? teacher.hidden = true :
      //Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
      teacher.lastElementChild.dataset.available === 'true' ? teacher.classList.add('available') : teacher.classList.add('unavailable')
  }
}
