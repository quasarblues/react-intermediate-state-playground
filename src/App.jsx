import './App.css'
import Counter from './Counter'
import Initializer from './Initializer'
import ScoreKeeper from './ScoreKeeper'
import Emoji from './Emoji'
import Game from './Game'
import Sales from './Sales'

function App() {

  return (
    <>
      <h1>Intermediate State</h1>
      {/* <Counter />
      <Initializer />
      <ScoreKeeper />
      <Emoji />
      <Game players={5} targetScore={5} /> */}
      <Sales salesPeople={5} goal={20000} />
    </>
  )
}

export default App
