class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleCreateGradesError = this.handleGetGradesError.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
  }

  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: "none",
      headers: {
        "X-Access-Token": "oQfMVLrZ"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    this.pageHeader.updateAverage(grades);
  }

  handleGetGradesError(error){
    console.error(error);
  }

  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "oQfMVLrZ"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/"+id,
      data: "none",
      headers: {
        "X-Access-Token": "oQfMVLrZ"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }

  handleDeleteGradeError(error){
    console.error(error);
  }


}
