var waitingApp = new Vue({
  el: "#patientWaitingApp",
  data: {
    patients: []
  },
  //?inc=name,location,dob,email,picture'
  methods: {
    fetchPatients(){
      fetch('https://randomuser.me/api/?inc=name,location,dob,email,picture')
      .then(response => response.json())
      // .then(json => waitingApp.patients = json.results[0]);

      //test code to see if I can succesfully pull the first name and display it on the html document
      .then(function(json) {waitingApp.patients = json.results[0];
      console.log(waitingApp.patients);
      console.log(json.results[0].email)})
      // var holder = JSON.stringify(json.results[0].name.first);
      // waitingApp.patients.first = holder;
      // console.log(holder);
      // document.getElementById("patientFName").innerHTML = holder;}
      // .then(function{json => {waitingApp.patients = json[1];
      // var hold = waitingApp.patients;
      // console.log(hold)})

    }
  },
  created() {
    this.fetchPatients();
  }
});
