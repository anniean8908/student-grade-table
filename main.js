var tableElt = document.getElementById('tableList');
var avgGradeElt = document.getElementById('avgGrade');
var formElt = document.getElementById('formData');
var noGradeElt = document.createElement('p');
noGradeElt.textContent = "No Grades Recorded";

var gradeForm = new GradeForm(formElt);
var gradeTableElt = new GradeTable(tableElt, noGradeElt);
var pageHeader = new PageHeader(avgGradeElt);
var app = new App(gradeTableElt, pageHeader, gradeForm);

app.start();
