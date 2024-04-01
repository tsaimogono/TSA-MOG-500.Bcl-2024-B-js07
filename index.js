/*document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = ;
      const courseNameInput = ; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent. = `
      <h3>${studentName}</h3>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.('', function () {
      
    });
  });
  document.addEventListener('DOMContentLoaded', function (
    ) {
      const cardForm = document.getElementById('cardForm');
      const modal = document.getElementById('modal');
      const certificateContent = document.getElementById('certificateContent');
      const closeModal = document.querySelector('.close');
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');
    
      // Hide the modal initially
    modal.style.display = 'none';
    
      cardForm.addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Get input values
    const studentName = "Gomolemo Mogono";
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
    // Generate certificate content dynamically
    certificateContent.innerHTML = `
          <h3>Certificate of Completion</h3>
          <p>This is to certify that ${studentName} has successfully completed ${courseName}. Congratulations!</p>
          <p>${personalMessage}</p>
        `;
    
        // Display the modal
    modal.style.display = 'block';
    
        // Clear the form inputs
    studentNameInput.value = '';
        personalMessageInput.value = '';
        courseNameInput.value = ''; // Clear the courseNameInput if it exists
    });
    
      // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function (
    ) {
        modal.style.display = 'none';
      });
    });
    */

  document.addEventListener('DOMContentLoaded', function() {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    // Set default value for studentNameInput
    studentNameInput.value = "Gomolemo Mogono";

    // Hide the modal initially
    modal.style.display = 'none';

    cardForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get input values
        const studentName = studentNameInput.value;
        const personalMessage = personalMessageInput.value;
        const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

        if (studentName.trim() === '' || personalMessage.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Generate certificate content dynamically
        certificateContent.innerHTML = `
            <h3>Certificate of Completion</h3>
            <p>This is to certify that ${studentName} has successfully completed ${courseName}. Congratulations!</p>
            <p>${personalMessage}</p>
        `;

        // Display the modal
        modal.style.display = 'block';

        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        courseNameInput.value = ''; // Clear the courseNameInput if it exists
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
