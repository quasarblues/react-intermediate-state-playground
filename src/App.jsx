import './App.css'
import Counter from './Counter'
import Initializer from './Initializer'
import ScoreKeeper from './ScoreKeeper'
import Emoji from './Emoji'
import Game from './Game'

function App() {

  return (
    <>
      <h1>Intermediate State</h1>
      {/* <Counter />
      <Initializer />
      <ScoreKeeper />
      <Emoji /> */}
      <Game players={5} targetScore={5} />
    </>
  )
}

export default App
