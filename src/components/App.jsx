import paintings from '../data.json';
import PaintingList from './PaintingsList';
import Section from './Section';
export default function App() {
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section />

      {/* {paintings.map(painting =>
            <Painting
            key={painting.id}
            url={painting.url}
            title={painting.title}
            author={painting.author}
            price={painting.price}
            quantity = {painting.quantity}/>)} */}
      {/* <Painting url={paintings[0].url}
            title={paintings[0].title}
            author={paintings[0].author}
            price={paintings[0].price}
            quantity = {paintings[0].quantity}
/>
        <Painting url={paintings[1].url}
            title={paintings[1].title}
            author={paintings[1].author}
            price={paintings[1].price}
            quantity = {paintings[1].quantity}
/>
        <Painting url={paintings[2].url}
            title={paintings[2].title}
            author={paintings[2].author}
            price={paintings[2].price}
            quantity = {paintings[2].quantity}
/> */}
    </div>
  );
}
