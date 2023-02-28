const cartaoCVC = document.querySelector(".cvc span");
const cartaoNumero = document.querySelector(".cartao-numero");
const cartaoNome = document.querySelector(".cardholder-nome");
const cartaoExpDate = document.querySelector(".exp-date");

const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputNumero = document.querySelector("#numero-do-cartao");
const inputMes = document.querySelector("#mes");
const inputAno = document.querySelector("#ano");
const inputCVC = document.querySelector("#cvc");

const inforErro = document.querySelectorAll(".info-erro");
const final = document.querySelector(".finalizou");

console.log(inforErro);

const mostrarErro = (input, informacaoDoErro, mensagem) => {
  input.classList.add("input-erro");
  inforErro[informacaoDoErro].classList.add("d-block");
  inforErro[informacaoDoErro].textContent = mensagem;
};

const escondeErro = (input, informacaoDoErro) => {
  input.classList.remove("input-erro");
  inforErro[informacaoDoErro].classList.remove("d-block");
};

let inputNomeValue;
let inputNumeroValue;
let inputMesValue = "00";
let inputAnoValue = "00";
let inputCVCValue;

const validaInput = (input, informacaoDoErro, wordLength) => {
  if (!wordLength) {
    if (!input.value) {
      mostrarErro(input, informacaoDoErro, "Can’t be blank");
    } else {
      escondeErro(input, informacaoDoErro);
      inputNomeValue = input.value;
    }
  } else {
    if (!input.value) {
      mostrarErro(input, informacaoDoErro, "Can’t be blank");
    } else if (!/^\d+(\s\d+)*$/.test(input.value)) {
      mostrarErro(input, informacaoDoErro, "Wrong format, numbers only");
    } else if (input.value.length < wordLength) {
      if (wordLength > 3) {
        mostrarErro(input, informacaoDoErro, "Card number must be 16 numbers");
      } else {
        mostrarErro(input, informacaoDoErro, `must be ${wordLength} numbers`);
      }
    } else {
      escondeErro(input, informacaoDoErro);

      switch (input) {
        case inputNumero:
          inputNumeroValue = input.value;
          break;
        case inputMes:
          inputMesValue = input.value;
          break;
        case inputAno:
          inputAnoValue = input.value;
          break;
        case inputCVC:
          inputCVCValue = input.value;
          break;
      }
    }
  }
};

inputNome.addEventListener("input", (e) => {
  e.preventDefault();

  inputNomeValue = e.target.value;
  cartaoNome.textContent = inputNomeValue;
});

inputNumero.addEventListener("input", (e) => {
  e.preventDefault();

  let mudarTexto = e.target.value;
  mudarTexto = mudarTexto.substring(0, 19);
  mudarTexto = mudarTexto
    .replace(/\s/g, "")
    .replace(new RegExp(`(.{${4}})`, "g"), "$1 ")
    .trim();

  e.target.value = mudarTexto;

  inputNumeroValue = e.target.value;
  cartaoNumero.textContent = inputNumeroValue;
});

const deletarEspaco = (input) => {
  if (/\s/.test(input.value)) {
    let mudarTexto = input.value.replace(/\s/g, "");

    input.value = mudarTexto;
  }
};

inputMes.addEventListener("input", (e) => {
  e.preventDefault();

  deletarEspaco(inputMes);
  inputMesValue = e.target.value;
  cartaoExpDate.textContent = inputMesValue + "/" + inputAnoValue;
});

inputAno.addEventListener("input", (e) => {
  e.preventDefault();

  deletarEspaco(inputAno);
  inputAnoValue = e.target.value;
  cartaoExpDate.textContent = inputMesValue + "/" + inputAnoValue;
});

inputCVC.addEventListener("input", (e) => {
  e.preventDefault();

  deletarEspaco(inputCVC);
  inputCVCValue = e.target.value;
  cartaoCVC.textContent = inputCVCValue;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputNomeValue = "";
  inputNumeroValue = "";
  inputMesValue = "00";
  inputAnoValue = "00";
  inputCVCValue = "";

  validaInput(inputNome, 0);
  validaInput(inputNumero, 1, 19);
  validaInput(inputMes, 2, 2);
  validaInput(inputAno, 2, 2);
  validaInput(inputCVC, 3, 3);

  if (
    inputNomeValue &&
    inputNumeroValue &&
    inputMesValue &&
    inputAnoValue &&
    inputCVCValue
  ) {
    cartaoNome.textContent = inputNomeValue;
    cartaoNumero.textContent = inputNumeroValue;
    cartaoExpDate.textContent = inputMesValue + "/" + inputAnoValue;
    cartaoCVC.textContent = inputCVCValue;

    form.classList.add("d-none");
    final.classList.add("d-block");
  }
});

final.addEventListener("click", () => {
  location.reload(true);
});
