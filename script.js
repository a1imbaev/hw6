// Валидация формы регистрации
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let isValid = true;

  if (!name) {
      document.getElementById("nameError").textContent = "Имя не может быть пустым";
      isValid = false;
  } else {
      document.getElementById("nameError").textContent = "";
  }

  if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent = "Неверный формат email";
      isValid = false;
  } else {
      document.getElementById("emailError").textContent = "";
  }

  if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Пароль должен содержать минимум 8 символов";
      isValid = false;
  } else {
      document.getElementById("passwordError").textContent = "";
  }

  return isValid;
}

// Калькулятор чисел
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = "Введите оба числа!";
      return;
  }

  let result;
  switch (operation) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num2 !== 0 ? num1 / num2 : "На ноль делить нельзя";
          break;
      default:
          result = "Некорректная операция";
  }

  resultElement.textContent = "Результат: " + result;
}

// Галерея изображений с увеличением
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const fullViewContainer = document.getElementById("fullViewContainer");
  const fullViewCloseButton = document.getElementById("fullViewCloseButton");
  const fullViewImage = document.getElementById("fullViewImage");

  if (gallery) {
      gallery.addEventListener("click", function(event) {
          if (event.target.classList.contains("gallery__image")) {
              fullViewImage.src = event.target.src;
              fullViewContainer.style.display = "flex";
          }
      });
  }

  if (fullViewCloseButton) {
      fullViewCloseButton.addEventListener("click", function() {
          fullViewContainer.style.display = "none";
      });
  }
});
