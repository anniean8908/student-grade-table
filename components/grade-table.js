class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  render(rowData){
    console.log(rowData)
    var name = rowData.name;
    var course = rowData.course;
    var grade = rowData.grade;
    var rowElt = document.createElement('tr');
    var nameElt = document.createElement('td');
    var courseElt = document.createElement('td');
    var gradeElt = document.createElement('td');

    nameElt.setAttribute('scope', 'row');
    nameElt.textContent = name;
    courseElt.textContent = course;
    gradeElt.textContent = grade;

    rowElt.appendChild(nameElt);
    rowElt.appendChild(courseElt);
    rowElt.appendChild(gradeElt);

    return rowElt;
  }
  updateGrades(grades){
    for (var i = 0; i < grades.length; i++) {
      var row = this.render(grades[i]);
      this.tableElement.appendChild(row);
    }
  }
}
