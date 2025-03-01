document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".signin form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const username = loginForm.querySelector("input[type='text']").value.trim();
            const password = loginForm.querySelector("input[type='password']").value.trim();

            if (username === "") {
                alert("Username cannot be empty!");
                return;
            }
            if (password === "") {
                alert("Password cannot be empty!");
                return;
            }

            alert("Login Successful!");

            setTimeout(() => {
                loginForm.submit();
            }, 500); 
        });
    }

    const signupForm = document.querySelector(".signup");
    if (signupForm) {
        const submitButton = signupForm.querySelector("button");
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            const inputs = signupForm.querySelectorAll(".input-box input, .input-box select");
            let isValid = true;

            const [fullName, email, username, password, confirmPassword, gender, dob, phone] = inputs;

            if (!fullName.value.trim()) {
                alert("Full Name cannot be empty!");
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                alert("Enter a valid email address!");
                isValid = false;
            }

            if (!username.value.trim()) {
                alert("Username cannot be empty!");
                isValid = false;
            }

            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
            if (!passwordRegex.test(password.value.trim())) {
                alert("Password must be at least 8 characters, include 1 number, and 1 special character!");
                isValid = false;
            }

            if (password.value.trim() !== confirmPassword.value.trim()) {
                alert("Passwords do not match!");
                isValid = false;
            }

            if (gender.selectedIndex === 0) {
                alert("Please select a gender!");
                isValid = false;
            }

            if (!dob.value) {
                alert("Please enter your date of birth!");
                isValid = false;
            } else {
                const birthDate = new Date(dob.value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();

                if (today.getMonth() < birthDate.getMonth() || 
                    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                if (age < 18 || age > 100) {
                    alert("You must be between 18 and 100 years old!");
                    isValid = false;
                }
            }

            const phoneRegex = /^\d{11}$/;
            if (!phoneRegex.test(phone.value.trim())) {
                alert("Phone number must be 11 digits!");
                isValid = false;
            }

            if (isValid) {
                alert("Sign Up Successful!");
                signupForm.submit();
            }
        });
    }
});
