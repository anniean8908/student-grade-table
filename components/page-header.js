class PageHeader{
  constructor(avgGradeElt){
    this.avgGradeElt = avgGradeElt;
  }
  updateAverage(grades){
    var total = 0
    for(var i =0; i<grades.length; i++){
      var grade = grades[i].grade;
      total+=grade;
    }
    var avgGrade =total/grades.length;
    if (isNaN(avgGrade)) {
      avgGrade = "No Grade"
    }
    this.avgGradeElt.textContent = avgGrade;
  }
}
