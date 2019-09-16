
var waitingForm = new Vue({
  el: '#patientWaitingForm',
  data: {
    patients: [
      {
        "patientGuid": "SOME-REALLY-LONG-1234",
        "firstName": "Sylvia",
        "lastName": "Hernandez",
        "dob": "2012-09-01",
        "sexAtBirth": "F",
        "priority": "High"
      },
      {
        "patientGuid": "SOME-REALLY-SHORT-5678",
        "firstName": "Vish",
        "lastName": "Balasubramanian",
        "dob": "1950-12-15",
        "sexAtBirth": "M",
        "priority": "Low"
      },
      {
        "patientGuid": "SOME-UNIQUE-ABCDE1",
        "firstName": "John",
        "lastName": "Doe",
        "dob": "1997",
        "sexAtBirth": "M",
        "priority": "Medium"
      }
    ]
  },
  methods: {
    fetchPatients(){
      fetch('patients')
      .then(response => response.json())
      .then(json => {waitingApp.patient = json[0]});
    }
  },
  created() {
    this.fetchPatients();
  }
});
