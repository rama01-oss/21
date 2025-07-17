// تفعيل القائمة المنسدلة في الجوال
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// تحديد العملية من الأزرار
let currentOp = '+';
function setOp(op) {
  currentOp = op;
}

// تنفيذ العملية
function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  if (isNaN(n1) || isNaN(n2)) {
    errorDiv.textContent = '❗ أدخل رقمين صحيحين';
    return;
  }

  let result;
  switch (currentOp) {
    case '+': result = n1 + n2; break;
    case '-': result = n1 - n2; break;
    case '*': result = n1 * n2; break;
    case '/': result = n2 !== 0 ? (n1 / n2).toFixed(2) : 'لا يمكن القسمة على صفر'; break;
  }

  resultDiv.textContent = `🔹 النتيجة: ${result}`;
}
// script.js
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    links.classList.toggle("show");
  });
});
