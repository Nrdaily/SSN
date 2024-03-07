let Total = JSON.parse(localStorage.getItem('Total_amount'))
document.getElementById('total-pay').innerHTML = '$' + Total + 100;

 
const form  = document.getElementById('form');
// Retrieving input elements
const inputState = document.getElementById("input-state"),
      contactCumber = document.getElementById("input-contact"),
      fullnameInput = document.getElementById("Firstname"),
      LastName = document.getElementById("Lastname"),
      emailInput = document.getElementById("email"),
      dateInput = document.getElementById("date"),
      genderInput = document.getElementById("gender"),
      Height = document.getElementById("Height"),
      Weight = document.getElementById("Weight"),
      inputEyes = document.getElementById("input-eyes"),
      inputHair = document.getElementById("input-hair");

form.addEventListener('submit', function(e)  { 
    e.preventDefault();
    const inputStateValues = inputState.value;
    const contactCumberValues = contactCumber.value;
    const fullnameInputValues = fullnameInput.value;
    const LastNameValues = LastName.value;
    const emailInputValues = emailInput.value;
    const dateInputValues = dateInput.value;
    const genderInputValues = genderInput.value;
    const HeightValues = Height.value;
    const WeightValues = Weight.value;
    const inputEyesValues = inputEyes.value;
    const inputHairValues = inputHair.value;
    const deliveryNum = Math.floor(Math.random() * 500000 +10);
    localStorage.setItem('Form_rState', JSON.stringify(inputStateValues))
    localStorage.setItem('Form_number', JSON.stringify(contactCumberValues))
    localStorage.setItem('Form_firstName', JSON.stringify(fullnameInputValues))
    localStorage.setItem('Form_LastName', JSON.stringify(LastNameValues))
    localStorage.setItem('Form_email', JSON.stringify(emailInputValues))
    localStorage.setItem('Form_date', JSON.stringify(dateInputValues))
    localStorage.setItem('Form_gender', JSON.stringify(genderInputValues))
    localStorage.setItem('Form_Height', JSON.stringify(HeightValues))
    localStorage.setItem('Form_Weight', JSON.stringify(WeightValues))
    localStorage.setItem('Form_inputEyes', JSON.stringify(inputEyesValues))
    localStorage.setItem('Form_inputHair', JSON.stringify(inputHairValues))
    localStorage.setItem('Form_deliveryNum', JSON.stringify(deliveryNum))
    window.location.href = 'finish.html';
})

let loadFile = function(event){
  imgBox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) +")";
}
