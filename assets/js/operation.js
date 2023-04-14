function Calculator() {
  this.display = document.querySelector('.display');

  this.start() => {
    this.buttonClick();
    this.pressionEnter();
  };

  this.pressionEnter() => {
    this.display.addEventListener('keyup', e => {
      if (e.key === 'Enter') this.doOperation();
    });
  };

  this.buttonClick() => {
    document.addEventListener('click', e => {
      const element = e.target;

      if (element.classList.contains('num')) this.btnToDisplay(element.innerText);
      if (element.classList.contains('clear')) this.clearDisplay();
      if (element.classList.contains('delete')) this.deleteDisplay();
      if (element.classList.contains('equal')) this.doOperation();
    });
  };

  this.doOperation = () => {
    try {

      let operation = eval(this.display.value);
      if (!operation) return;
      this.display.value = operation;

    } catch (e) {
      alert('Conta inválida!')
      return;
    }
  };

  this.btnToDisplay = element => {
    this.display.value += elemnt;
    this.display.focus();
  };
  this.clearDisplay = () => this.display.value = '';
  this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);
}

const calculator = new Calculator();
calculator.start();