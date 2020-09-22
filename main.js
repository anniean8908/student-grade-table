var tableElt = document.getElementById('tableList');
var avgGradeElt = document.getElementById('avgGrade');
var gradeTableElt = new GradeTable(tableElt);
var pageHeader = new PageHeader(avgGradeElt);
var app = new App(gradeTableElt, pageHeader);
app.start();
