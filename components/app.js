class App {
  constructor(gradeTable, pageHeader){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }

  start(){
    this.getGrades();
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
  }

  handleGetGradesError(error){
    console.error(error);
  }
}
