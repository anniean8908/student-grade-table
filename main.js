var tableElt = document.getElementById('tableList');
var avgGradeElt = document.getElementById('avgGrade');
var gradeTableElt = new GradeTable(tableElt);
var app = new App(gradeTableElt);
app.start();
