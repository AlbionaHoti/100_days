import React from 'react';

const List = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);
  // a value of state, and the function that allows us to update that state
  const filterItems = (e) => {
    // will take in the event on change.

    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const ListContainer = () => (
  <List
    items={['Lear React', 'Learn Next.js', '???', 'Profit']}
    aria-label="My fancy list "
  />
);

export default ListContainer;
