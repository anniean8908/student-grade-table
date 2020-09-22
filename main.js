var tableElt = document.getElementById('tableList');
var avgGradeElt = document.getElementById('avgGrade');
var formElt = document.getElementById('formData')

var gradeForm = new GradeForm(formElt);
var gradeTableElt = new GradeTable(tableElt);
var pageHeader = new PageHeader(avgGradeElt);
var app = new App(gradeTableElt, pageHeader, gradeForm);

app.start();
