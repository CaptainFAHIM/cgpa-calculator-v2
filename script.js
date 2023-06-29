"use strict"

const addButton = document.querySelector('.btn-add');
const calculateButton = document.querySelector('.calculate');
const container = document.querySelector('.container');
const fieldsContainer = document.querySelector(".fields-container");

//CREATE FIELD
function createSubjectField() {
  const newField = document.createElement('ul');
  newField.classList.add('fields');

  newField.innerHTML = `
      <li><input class="subject ins" type="text" placeholder="Subject Name"></li>
      <li>
        <select class="ins" name="grade">
          <option value="4.00">A+</option>
          <option value="3.75">A</option>
          <option value="3.50">B+</option>
          <option value="3.25">B</option>
          <option value="3.00">C+</option>
          <option value="2.75">C</option>
          <option value="2.50">D+</option>
          <option value="2.25">D</option>
          <option value="0.00">F</option>
        </select>
      </li>
      <li><input class="credits ins" type="number" placeholder="Credits"></li>
      <li class="dlt"><button class="dlt-btn">X</button></li>
    `;

  fieldsContainer.append(newField);
}

//DELETE FIELD
function deleteSubjectField(deleteButton) {
  const field = deleteButton.parentNode.parentNode;
  fieldsContainer.removeChild(field);
}





//CGPA CALCULATION
function calculateCGPA() {
  const subjectFields = document.querySelectorAll('.fields');
  let totalCredits = 0;
  let totalGradePoints = 0;

  subjectFields.forEach(function (field) {
    const creditsInput = field.querySelector('.credits');
    const gradeSelect = field.querySelector('.ins[name="grade"]');

    const credits = parseFloat(creditsInput.value);
    const grade = parseFloat(gradeSelect.value);

    if (!isNaN(credits) && !isNaN(grade)) {
      totalCredits += credits;
      totalGradePoints += credits * grade;
    }
  });

  const cgpa = totalGradePoints / totalCredits;
  const cgpaElement = document.querySelector('.cg');
  cgpaElement.textContent = cgpa.toFixed(2);
}






addButton.addEventListener("click", createSubjectField);

fieldsContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('dlt-btn')) {
    deleteSubjectField(event.target);
  }
});

calculateButton.addEventListener('click', function() {
      calculateCGPA();
    });