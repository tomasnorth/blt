function checkDate() {
var dateNow = new Date();
var dd = String(dateNow.getDate()).padStart(2, '0');
var mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = dateNow.getFullYear();

document.getElementById('date').innerHTML =  dd + '/' + mm + '/' + yyyy;
}
checkDate()

