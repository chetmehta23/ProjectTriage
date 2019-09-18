
var waitingForm = new Vue({
  el: '#patientWaitingForm',
  data: {
    patients: [],
    formPatient:{
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  },
  methods: {
    fetchPatients(){
      fetch('patientdata.php')
      .then(response => response.json())
      .then(json => {waitingForm.patients = json})
    },

    handleCreateRecord(event){
      //TODO: POST the form contents somewhere
      //fetch(url, {method:"POST", data: this.formPatient})
      //.then ...
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
  },
  
  selectRecord(patient) {
    console.log(patient)
  }
},




  created() {
    this.fetchPatients();
  }
});
