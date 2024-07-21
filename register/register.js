let participantCount = 1;

// Add event listener to the Add Participant button

// get button element
const AddButton = document.querySelector('.add')


const participantFields = `
<p>Participant ${participantCount}</p>
<div class="item">
  <label for="fname"> First Name<span>*</span></label>
  <input id="fname" type="text" name="fname" value="" required />
</div>
<div class="item activities">
  <label for="activity">Activity #<span>*</span></label>
  <input id="activity" type="text" name="activity" />
</div>
<div class="item">
  <label for="fee">Fee ($)<span>*</span></label>
  <input id="fee" type="number" name="fee" />
</div>
<div class="item">
  <label for="date">Desired Date <span>*</span></label>
  <input id="date" type="date" name="date" />
</div>
<div class="item">
  <p>Grade</p>
  <select>
    <option selected value="" disabled selected></option>
    <option value="1">1st</option>
    <option value="2">2nd</option>
    <option value="3">3rd</option>
    <option value="4">4th</option>
    <option value="5">5th</option>
    <option value="6">6th</option>
    <option value="7">7th</option>
    <option value="8">8th</option>
    <option value="9">9th</option>
    <option value="10">10th</option>
    <option value="11">11th</option>
    <option value="12">12th</option>
  </select>
</div>`;

AddButton.addEventListener('click', function() {
    participantCount += 1 
    const ParticipantSection = document.querySelector('.section')
    ParticipantSection.className = 'participant' + participantCount;
    document.querySelector('fieldset.participants').appendChild(ParticipantSection)
})  


ParticipantSection.innerHTML = participantFields;
document.querySelector('fieldset.participants').appendChild(ParticipantSection);

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event)
{
    event.preventDefault();
    const feeInputs = document.querySelector('input[name="fee"');
    let totalFees = 0; 
    feeInputs.forEach(input => {
        totalFees += parseInt(input.value, 10);
    });
}

const adultNameInput = document.querySelector('input[name="adult_name"')
const adultName = adultNameInput.value;
const formElement = document.querySelector('form')
const summaryElement = document.querySelector('#summary')
formElement.style.display = 'none';
summaryElement.style.display = 'block';
const participantCount1 = feeInputs.length;
const summaryMessage = `thank you ${adultName} for registering. you have registered ${participantCoun1t} participants and awe $${totalFees} in Fees`
summaryElement.innerHTML = summaryMessage