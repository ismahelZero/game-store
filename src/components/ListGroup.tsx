import { useState } from 'react'

interface Props {
  items: string[]
  heading: string
  onSelect: (item: string) => void
}

function ListGroup({ items, heading, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelectedIndex(index)
              onSelect(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
