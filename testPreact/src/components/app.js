import { h } from 'preact'


const App = () => {
	const start = performance.now()
  
	const divList = []
	for (let i = 0; i < 10000; i++) {
	  divList.push(<div>div numero: {i}</div>)
	}
  
	const end = performance.now()
	console.log(`10 000 div luomisen kesto: ${end - start}ms`)
  
	return <div>{divList}</div>
  }

export default App
