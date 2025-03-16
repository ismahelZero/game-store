import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

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
      <Button color="danger" onClick={() => console.log('clicked ')}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="list of items"
        onSelect={handleSelection}
      />
    </div>
  )
}

export default App
