document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.querySelector(".signin form");
        if (loginForm) {
            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
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
                loginForm.submit();
            });
        }
    });    

    const signupForm = document.querySelector(".signup");
    if (signupForm) {
        const submitButton = signupForm.querySelector("button");
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            const inputs = signupForm.querySelectorAll(".input-box input, .input-box select");
            let valid = true;

            const fullName = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const username = inputs[2].value.trim();
            const password = inputs[3].value.trim();
            const confirmPassword = inputs[4].value.trim();
            const gender = inputs[5];
            const dob = inputs[6].value;
            const phone = inputs[7].value.trim();

            if (fullName === "") {
                alert("Full Name cannot be empty!");
                valid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Enter a valid email address!");
                valid = false;
            }

            if (username === "") {
                alert("Username cannot be empty!");
                valid = false;
            }

            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
            if (!passwordRegex.test(password)) {
                alert("Password must be at least 8 characters, include 1 number, and 1 special character!");
                valid = false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                valid = false;
            }

            if (gender.selectedIndex === 0) { 
                alert("Please select a gender!");
                valid = false;
            }

            if (!dob) {
                alert("Please enter your date of birth!");
                valid = false;
            } else {
                const birthDate = new Date(dob);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                if (age < 18 || age > 100) {
                    alert("You must be between 18 and 100 years old!");
                    valid = false;
                }
            }

            const phoneRegex = /^\d{11}$/;
            if (!phoneRegex.test(phone)) {
                alert("Phone number must be 11 digits!");
                valid = false;
            }

            if (valid) {
                alert("Sign Up Successful!");
                signupForm.submit();
            }
        });
    }
});
