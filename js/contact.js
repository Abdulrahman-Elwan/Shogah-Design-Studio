document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-linkss');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Remove active class from all content sections and links
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });
            navLinks.forEach(link => {
                link.classList.remove('active-linkss');
            });

            // Add active class to the clicked link and corresponding content section
            const targetId = this.getAttribute('data-target'); // Get the target content ID
            document.getElementById(targetId).classList.add('active'); // Show the target content
            this.classList.add('active-link'); // Highlight the clicked link
        });
    });
});










// الشروط والاحكام


document.addEventListener('DOMContentLoaded', function () {
    // الحصول على العناصر
    let showBtns = document.querySelectorAll('.showConditionsBtn');
    let conditionsDiv = document.getElementById('conditionsDiv');
    let closeBtn = document.getElementById('closeConditions');
    let acceptBtn = document.getElementById('acceptConditionsBtn');
    let consultationsDiv = document.getElementById('consultations');
    let consultationscon = document.getElementById('consultationscon');
    let consult = document.getElementById('consult');
    let icons = document.getElementById('icons');
    let contactdet = document.getElementById('contactdet');
    let footer = document.getElementById('footer');
    let nav = document.getElementById('nav');
    let space = document.querySelector('.consultForms');
    let bGround = document.querySelector('.formssss');

    // إظهار الشروط والأحكام عند الضغط على الزرار
    showBtns.forEach(function(showBtn) {
        showBtn.addEventListener('click', function () {
            // تنفيذ العمليات المطلوبة عند النقر على الزر
            let conditionsDiv = document.querySelector('#conditionsDiv');
            if (conditionsDiv) {
                conditionsDiv.style.display = 'flex';
            } else {
                console.error('Element with id conditionsDiv not found.');
            }
        });
    });

    // إخفاء الشروط والأحكام عند الضغط على أيقونة الإغلاق
    closeBtn.addEventListener('click', function () {
        conditionsDiv.style.display = 'none';
    });

    // إظهار الـ div الخاص بالاستشارات عند الضغط على زر الموافقة
    acceptBtn.addEventListener('click', function () {
        consult.style.display = 'none';
        icons.style.display = 'none';
        contactdet.style.display = 'none';
        consultationscon.style.display = 'none';
        footer.style.display = 'none';
        conditionsDiv.style.display = 'none';
        nav.style.display = 'none';
        space.style.padding ='0';
        bGround.style.backgroundColor = '#494746';
        consultationsDiv.style.display = 'block';
    });
});




































// Helper function to validate input length and content
function validateInputLength(value, minLength) {
    return value.length >= minLength;
}

function validateNoNumbers(value) {
    return !/\d/.test(value);
}

// Validation for Contact Form
function validateContactForm() {
    let isValid = true;

    // Get form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Validate First Name
    if (!validateInputLength(firstName.value, 3) || !validateNoNumbers(firstName.value)) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    // Validate Last Name
    if (!validateInputLength(lastName.value, 3) || !validateNoNumbers(lastName.value)) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    // Validate Email
    if (!email.value || !email.validity.valid) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate Phone Number
    if (!phoneNumber.value) {
        document.getElementById('phoneNumberError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneNumberError').style.display = 'none';
    }

    // Validate Subject
    if (!subject.value) {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subjectError').style.display = 'none';
    }

    // Validate Message
    if (!message.value) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    return isValid;
}

// Validation for Careers Form
function validateCareersForm() {
    let isValid = true;

    // Get form elements
    const firstNameNew = document.getElementById('firstNameNew');
    const lastNameNew = document.getElementById('lastNameNew');
    const emailNew = document.getElementById('emailNew');
    const phoneNumberNew = document.getElementById('phoneNumberNew');
    const jobTitle = document.getElementById('jobTitle');
    const cv = document.getElementById('cv');
    const portfolio = document.getElementById('portfolio');

    // Validate First Name
    if (!validateInputLength(firstNameNew.value, 3) || !validateNoNumbers(firstNameNew.value)) {
        document.getElementById('firstNameErrorNew').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('firstNameErrorNew').style.display = 'none';
    }

    // Validate Last Name
    if (!validateInputLength(lastNameNew.value, 3) || !validateNoNumbers(lastNameNew.value)) {
        document.getElementById('lastNameErrorNew').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameErrorNew').style.display = 'none';
    }

    // Validate Email
    if (!emailNew.value || !emailNew.validity.valid) {
        document.getElementById('emailErrorNew').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailErrorNew').style.display = 'none';
    }

    // Validate Phone Number
    if (!phoneNumberNew.value) {
        document.getElementById('phoneNumberErrorNew').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneNumberErrorNew').style.display = 'none';
    }

    // Validate Job Title
    if (!jobTitle.value) {
        document.getElementById('jobTitleError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('jobTitleError').style.display = 'none';
    }

    // Validate CV
    if (!cv.files.length) {
        document.getElementById('cvError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('cvError').style.display = 'none';
    }

    // Validate Portfolio
    if (!portfolio.files.length) {
        document.getElementById('portfolioError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('portfolioError').style.display = 'none';
    }

    return isValid;
}

// Validation for Consultations Form
function validateConsultationsForm() {
    let isValid = true;

    // Get form elements
    const firstName3 = document.getElementById('firstName3');
    const lastName3 = document.getElementById('lastName3');
    const email3 = document.getElementById('email3');
    const phoneNumber3 = document.getElementById('phoneNumber3');
    const category = document.getElementById('category');
    const message3 = document.getElementById('message3');

    // Validate First Name
    if (!validateInputLength(firstName3.value, 3) || !validateNoNumbers(firstName3.value)) {
        document.getElementById('firstNameError3').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('firstNameError3').style.display = 'none';
    }

    // Validate Last Name
    if (!validateInputLength(lastName3.value, 3) || !validateNoNumbers(lastName3.value)) {
        document.getElementById('lastNameError3').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameError3').style.display = 'none';
    }

    // Validate Email
    if (!email3.value || !email3.validity.valid) {
        document.getElementById('emailError3').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError3').style.display = 'none';
    }

    // Validate Phone Number
    if (!phoneNumber3.value) {
        document.getElementById('phoneNumberError3').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneNumberError3').style.display = 'none';
    }

    // Validate Category
    if (!category.value) {
        document.getElementById('categoryError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('categoryError').style.display = 'none';
    }

    // Validate Message
    if (!message3.value) {
        document.getElementById('messageError3').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError3').style.display = 'none';
    }

    return isValid;
}

// Function to send data to Google Sheets
function sendDataToGoogleSheetsss(formData, Contact) {
    const scriptURL1 = `https://script.google.com/macros/s/AKfycbyVPiHSHA7gW5xPLnsWztHz40X703FQuqAqPg5p2wbCDIB1i9Um_hBd5eYfZKvkcSUV-A/exec`;

    fetch(scriptURL1, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Data submitted successfully!');
            window.location.reload();
        } else {
            alert('Failed to submit data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function sendDataToGoogleSheetss(formData, Consult) {
    const scriptURL3 = `https://script.google.com/macros/s/AKfycbw_R3mZXCpotixNtX0osseodPRQYdybOQVJXFlEyBoJ185X8wiox5pMrX4ui_i0cmhnEA/exec`;

    fetch(scriptURL3, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Data submitted successfully!');
            window.location.reload();
        } else {
            alert('Failed to submit data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
