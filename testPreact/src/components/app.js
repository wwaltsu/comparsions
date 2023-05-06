import { h } from 'preact'

/* const DivList = () => {
  const divList = Array.from({ length: 5000 }, (_, i) => (
    <div>div numero: {i}</div>
  ))
  return <div>{divList}</div>
} */

/* const DivList = () => {
	const divList = Array(10000)
	  .fill()
	  .map((_, i) => <div>div numero: {i}</div>);
	return <div>{divList}</div>;
  }
 */
/* 
  function* range(start, end) {
	for (let i = start; i <= end; i++) {
	  yield i
	}
  }
  
  const DivList = () => {
	const divList = [];
	for (let i of range(0, 9999)) {
	  divList.push(<div>div numero: {i}</div>)
	}
	return <div>{divList}</div>
  } */

  
const DivList = () => {
	const divList = Array.from({ length: 10000 }, (_, i) => (
	  <div>div numero: {i}</div>
	))
	return <div>{divList}</div>
  }


const App = () => (
  <div id="app">
    <DivList />
  </div>
)

export default App;