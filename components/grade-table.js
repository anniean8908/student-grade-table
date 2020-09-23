class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  renderGradeRow(rowData, deleteGrade){
    var name = rowData.name;
    var course = rowData.course;
    var grade = rowData.grade;
    var id = rowData.id;
    var rowElt = document.createElement('tr');
    var nameElt = document.createElement('td');
    var courseElt = document.createElement('td');
    var gradeElt = document.createElement('td');
    var btnColElt = document.createElement('td');
    var btnElt = document.createElement('button');
    var emptyElt = document.createElement('td');

    emptyElt.setAttribute('colspan', '4')
    nameElt.textContent = name;
    courseElt.textContent = course;
    gradeElt.textContent = grade;
    btnElt.textContent ='Delete';
    btnColElt.classList.add('text-center');
    btnElt.classList.add("btn", "btn-danger", "btn-sm", "mx-auto");

    btnColElt.appendChild(btnElt);

    rowElt.appendChild(nameElt);
    rowElt.appendChild(courseElt);
    rowElt.appendChild(gradeElt);
    rowElt.appendChild(btnColElt);

    btnElt.addEventListener('click', deleteGrade.bind(null, id));

    return rowElt;
  }

  updateGrades(grades){
    this.tableElement.innerHTML = "";
    if (grades.length !== 0){
      for (var i = 0; i < grades.length; i++) {
        var row = this.renderGradeRow(grades[i], this.deleteGrade);
        this.tableElement.appendChild(row);
        }
      } else {
        row = document.createElement('tr');
        var col = document.createElement('td');
        col.appendChild(this.noGradesElement);
        col.setAttribute("colspan", "4")
        col.classList.add('text-center');
        row.appendChild(col);
        this.tableElement.appendChild(row);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }


}
