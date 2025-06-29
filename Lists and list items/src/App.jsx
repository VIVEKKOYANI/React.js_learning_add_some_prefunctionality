import './App.css'
import RegularList from './RegularList';
import { SmallPersonListItems } from './people/SmallPersonListItems';
import { LargePersonListItem } from './people/LargePersonListItem';
import SmallProductListItem from './product/SmallProductListItem';
import LargeProductListItem from './product/LargeProductListItem';
import NumberList from './NumberList';
import Modal from './Modal';

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['reading', 'gaming', 'hiking'],
}, {
  name: 'Jane Smith',
  age: 25,
  hairColor: 'blonde',
  hobbies: ['painting', 'traveling', 'cooking']
}, {
  name: 'Alice Johnson',
  age: 30,
  hairColor: 'red',
  hobbies: ['photography', 'writing', 'dancing']
}, {
  name: 'Bob Brown',
  age: 40,
  hairColor: 'black',
  hobbies: ['cooking', 'fishing', 'hiking']
}];

const products = [{
  name: 'Flat-Screen TV',
  price: 499.99,
  description: 'A 55-inch 4K Ultra HD flat-screen TV with smart features.',
  rating: 4.5,
}, {
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'Noise-cancelling wireless headphones with long battery life.',
  rating: 4.2,
}, {
  name: 'Smartphone',
  price: 799.99,
  description: 'Latest model smartphone with high-resolution camera and fast processor.',
  rating: 4.8,
}, {
  name: 'Laptop',
  price: 1299.99,
  description: 'Lightweight laptop with powerful performance and sleek design.',
  rating: 4.6,
}, {
}]

function App() {

  return (
    <>
      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItems}
      />
      <NumberList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> */}
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  )
}

export default App
