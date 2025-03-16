import ListGroup from './components/ListGroup'
import Alert from './components/Alert'

function App() {
  let items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'And a fifth one'
  ]

  const handleSelection = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <Alert>
        hello <span className="fw-bold">word</span>
      </Alert>
      <ListGroup
        items={items}
        heading="list of items"
        onSelect={handleSelection}
      />
    </div>
  )
}

export default App
