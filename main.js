const btnp = React.createElement(`button`, null ,`+`);
const btnm = React.createElement(`button`, null ,`-`);
const btnmm = React.createElement(`button`, null ,`*`);
const btnd = React.createElement(`button`, null ,`/`);
const header = React.createElement(`div`, { className: `header` }, btnp , btnm , btnmm , btnd);

const btn1 = React.createElement(`button`, null ,`1`);
const btn2 = React.createElement(`button`, null ,`2`);
const btn3 = React.createElement(`button`, null ,`3`);
const btnsin = React.createElement(`button`, null ,`Sin`);
const div1 = React.createElement(`div`, null, btn1, btn2, btn3, btnsin);

const btn4 = React.createElement(`button`, null, `4`);
const btn5 = React.createElement(`button`, null, `5`);
const btn6 = React.createElement(`button`, null, `6`);
const btncos = React.createElement(`button`, null, `Cos`);
const div2 = React.createElement(`div`, null, btn4, btn5, btn6, btncos);

const btn7 = React.createElement(`button`, null, `7`);
const btn8 = React.createElement(`button`, null, `8`);
const btn9 = React.createElement(`button`, null, `9`);
const btntan = React.createElement(`button`, null, `Tan`);
const div3 = React.createElement(`div`, null, btn7, btn8, btn9, btntan);

const calculator = React.createElement(`div`, { className: `calculator` }, header, div1, div2, div3);

const root = document.getElementById(`root`);

ReactDOM.render(calculator, root);