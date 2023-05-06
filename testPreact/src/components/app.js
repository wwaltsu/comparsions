import { h } from 'preact'
import style from './style.css'

const DivList = () => {
	const divList = Array.from({ length: 10000 }, (_, i) => (
		<div class={style['item-box']}>div numero: {i + 1}</div>
	))
	return <div class={style['container']}>{divList}</div>
}

const App = () => (
	<div id="app" class={style['app-container']}>
		<DivList />
	</div>
)

export default App