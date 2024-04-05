# [JSL07] Submission: Proud of your Progress

Create a personalized certificate of achievement with the "Proud of Your Progress Certificate Generator". This web application requires users to input their name, a personalized message, and the course name to dynamically generate a certificate displayed in a modal.

## Steps for Submission
1. **Clone Starter Code:** Begin by cloning the Starter Code Repository from [GitHub](https://github.com/CodeSpace-Academy/Module_7_StudentNo_Classcode_Group_Name-Surname_JSL07).
2. **Develop Your Solution:** Write your code to implement the project's functionality.
3. **Commit Your Changes:** As you make progress, commit your changes with meaningful messages.
4. **Push to GitHub:** Upload your local repository changes to GitHub.
5. **Submit Your Work:** Share your GitHub Repository Link on the LMS under the [JSL07] Submission Project Tab.

## Project Features
- **Input Fields:** For user's name, personalized message, and course name.
- **Generate Certificate:** A button that when clicked, creates the certificate.
- **Modal Display:** The certificate is shown in a modal window.
- **Close Button:** For closing the modal.
- **Validation:** Checks that all fields are completed before certificate generation.

## Development Objectives
- **Dynamic Content:** Dynamically generate the certificate's content based on user input, ensuring it matches the reference solution.
- **Modal Implementation:** Show the certificate in a modal upon form submission; the modal should initially be hidden.
- **Interaction Handling:** Enable modal display with form submission and allow closing with a close button. Ensure form inputs are cleared post-submission.

## Addressing Starter Code Challenges 🪲
Your tasks include completing partially implemented input collection, dynamically generating certificate content, and implementing modal display and interaction handling based on the provided starter code framework.

Partial implementation for collecting input values, where specific assignments are marked with 🚨, indicating tasks to complete.

## How to Proceed
1. **Clone the Repository:** Use the provided [link](https://github.com/CodeSpace-Academy/Module_7_StudentNo_Classcode_Group_Name-Surname_JSL07) to clone the repository and start working in your local environment.
2. **Code:** Address each challenge following the project objectives and features.
3. **Commit Changes:** Regularly commit your work with descriptive messages.
4. **Push Updates:** Upload your commits to GitHub, ensuring your repository reflects the latest changes.
5. **Verify Submission:** Double-check your GitHub repository for the final code and push any last-minute updates.

## Evaluation Criteria
- **Code Review:** We'll check your repository for the complete and updated code files.
- **Functionality:** Your modifications will be assessed for adherence to project requirements.
- **Commit History:** Your commit messages and history will reflect your development process.

Get going and celebrate your progress 🥳🥳🥳


# Certificate Generator

This JavaScript code generates a certificate of achievement dynamically based on user input.

## Description

The Certificate Generator script utilizes the DOMContentLoaded event to ensure the document is fully loaded before executing the script. Upon form submission, the script extracts input values, validates them, and dynamically generates the certificate content. The certificate is displayed in a modal window, and users can close the modal by clicking the close button.

## Usage

1. **HTML Structure:**
   - Ensure your HTML file contains the necessary elements:
     - `<form id="cardForm">` for the input form.
     - `<div id="modal">` for the modal window.
     - `<div id="certificateContent">` to dynamically populate the certificate content.
     - `<span class="close">` for the close button.
   - Optionally, include an input field with `id="courseName"` for the course name.

2. **JavaScript Integration:**
   - Add the provided JavaScript code to script file within a `<script>` tag in HTML file.

3. **Styling:**
   - Style the modal and certificate content as desired in CSS file.

4. **Running the Code:**
   - When the form is submitted, the script validates input values and generates the certificate dynamically.
   - The certificate is displayed in a modal window, and users can close it by clicking the close button.

## Challenges and Considerations


1. **Cross-browser Compatibility:**
   - Ensuring consistent behavior across different web browsers may require additional testing and adjustments to handle browser-specific behaviors.

2. **Input Validation:**
   - Implementing robust input validation to ensure all required fields are filled correctly and handling edge cases (e.g., special characters, maximum input length) can be challenging.

3. **Dynamic Content Generation:**
   - Dynamically generating HTML content based on user input may lead to issues such as incorrect formatting or unexpected behavior, requiring careful handling.


4. **Accessibility:**
   - Ensuring the modal window and certificate content are accessible to users with disabilities by implementing proper keyboard navigation and screen reader compatibility can be complex.

5. **Error Handling:**
   - Implementing error handling mechanisms to gracefully handle unexpected errors and providing informative error messages to users can enhance the reliability of the script.
