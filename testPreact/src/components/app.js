import { h } from 'preact';
import style from './style.css'

const DivList = () => {
  const divList = Array.from({ length: 10000 }, (_, i) => (
    h("div", { class: style['item'] }, "div numero: " + (i + 1))
  ));
  return h("div", { class: style['container'] }, divList);
}

const App = () => (
  h("div", { id: "app", class: style['app-container'] },
    h(DivList)
  )
);

export default App;