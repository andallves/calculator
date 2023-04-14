function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.buttonClick();
      this.pressionEnter();
    },

    pressionEnter() {
      this.display.addEventListener('keypress', e => {
        console.log(e);
        if (e.keyCode === 13) this.doOperation();
      });
    },

    doOperation() {
      let operation = this.display.value;

      try {
        operation = eval(operation);

        if (!operation || (Number.isNaN(operation))) return;

        this.display.value = operation;

      } catch (e) {
        alert('Conta inválida!')
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteDisplay() {
      this.display.value = this.display.value.slice(0, -1);
    },


    buttonClick() {
      document.addEventListener('click', e => {
        const element = e.target;

        if (element.classList.contains('num')) this.btnToDisplay(element.innerText);

        if (element.classList.contains('clear')) this.clearDisplay();

        if (element.classList.contains('delete')) this.deleteDisplay();

        if (element.classList.contains('equal')) this.doOperation();
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    }
  }

}

const calculator = createCalculator();
calculator.start();