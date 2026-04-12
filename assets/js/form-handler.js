(function () {
    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        subject: document.getElementById("subject"),
        message: document.getElementById("message")
    };

    function getStatusElement() {
        let statusEl = form.querySelector(".form-status");

        if (!statusEl) {
            statusEl = document.createElement("p");
            statusEl.className = "form-status";
            statusEl.setAttribute("aria-live", "polite");
            form.appendChild(statusEl);
        }

        return statusEl;
    }

    function showFieldError(field, message) {
        const group = field.closest(".form-group");

        if (!group) {
            return;
        }

        let errorEl = group.querySelector(".field-error");

        if (!errorEl) {
            errorEl = document.createElement("p");
            errorEl.className = "field-error";
            group.appendChild(errorEl);
        }

        errorEl.textContent = message;
        field.classList.add("input-error");
        field.setAttribute("aria-invalid", "true");
    }

    function clearFieldError(field) {
        const group = field.closest(".form-group");

        if (!group) {
            return;
        }

        const errorEl = group.querySelector(".field-error");

        if (errorEl) {
            errorEl.remove();
        }

        field.classList.remove("input-error");
        field.removeAttribute("aria-invalid");
    }

    function validateName() {
        const value = fields.name.value.trim();

        if (!value) {
            return "Name is required.";
        }

        if (value.length < 2) {
            return "Name must be at least 2 characters.";
        }

        const nameRegex = /^[a-zA-Z\s'\-]+$/;
        if (!nameRegex.test(value)) {
            return "Name can only include letters, spaces, apostrophes, and hyphens.";
        }

        return "";
    }

    function validateEmail() {
        const value = fields.email.value.trim();

        if (!value) {
            return "Email is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Please enter a valid email address.";
        }

        return "";
    }

    function validateSubject() {
        const value = fields.subject.value.trim();

        if (!value) {
            return "Subject is required.";
        }

        if (value.length < 3) {
            return "Subject must be at least 3 characters.";
        }

        return "";
    }

    function validateMessage() {
        const value = fields.message.value.trim();

        if (!value) {
            return "Message is required.";
        }

        if (value.length < 10) {
            return "Message must be at least 10 characters.";
        }

        return "";
    }

    const validators = {
        name: validateName,
        email: validateEmail,
        subject: validateSubject,
        message: validateMessage
    };

    function validateField(fieldKey) {
        const field = fields[fieldKey];
        const errorMessage = validators[fieldKey]();

        clearFieldError(field);

        if (errorMessage) {
            showFieldError(field, errorMessage);
            return false;
        }

        return true;
    }

    function clearStatus() {
        const statusEl = getStatusElement();
        statusEl.textContent = "";
        statusEl.classList.remove("success", "error");
    }

    function setStatus(message, statusType) {
        const statusEl = getStatusElement();
        statusEl.textContent = message;
        statusEl.classList.remove("success", "error");
        statusEl.classList.add(statusType);
    }

    Object.keys(fields).forEach(function (key) {
        const field = fields[key];

        field.addEventListener("blur", function () {
            validateField(key);
        });

        field.addEventListener("input", function () {
            if (field.classList.contains("input-error")) {
                validateField(key);
            }
            clearStatus();
        });
    });

    form.addEventListener("submit", function (event) {
        clearStatus();

        const isFormValid = Object.keys(fields).every(function (key) {
            return validateField(key);
        });

        if (!isFormValid) {
            event.preventDefault();
            setStatus("Please fix the highlighted fields before submitting.", "error");
            return;
        }

        setStatus("Form looks good. Submitting...", "success");
    });
})();
