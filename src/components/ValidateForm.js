const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
const regexMail =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateForm = (input) => {
	let errors = {};

	console.log(!regexMail.test(input.email));

	if (input.name.length === 0) {
		errors.name = {
			spanish: "El nombre estar completado ",
			english: "Name must not be empty",
		};
	} else if (input.name.length > 60) {
		errors.name = {
			spanish: "El nombre es demasiado largo, debe ser menor a 60 letras.",
			english: "Name must have less than 60 characters",
		};
	} else if (input.email.length === 0) {
		errors.email = {
			spanish: "El email debe estar completado.",
			english: "Email must not be empty",
		};
	} else if (!regexMail.test(input.email)) {
		errors.email = {
			spanish: "Debe el mail estar en formato correcto.",
			english: "Email must be in correct format",
		};
	} else if (input.message.length === 0) {
		errors.message = {
			spanish: "El mensaje estar completado.",
			english: "Message must not be empty",
		};
	} else if (input.message.length < 20) {
		errors.message = {
			spanish: "El mensaje debe ser mayor a 20 caracteres.",
			english: "Message must have more than 20 characters",
		};
	} else if (input.message.length > 5000) {
		errors.message = {
			spanish: "El mensaje debe ser menor a 5000 caracteres.",
			english: "Message must not exceed 5000 caracteres",
		};
	}

	return errors;
};

export default validateForm;
