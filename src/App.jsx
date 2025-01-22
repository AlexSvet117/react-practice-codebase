import Counter from './components/Counter';
import Like from './components/Like';
import Logo from './components/Logo';
import SampleComponent from './components/SampleComponent';

function App() {


  const cards = [{
    id: 1,
    title: 'Component 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a id quasi.',
    display: true
   },
   {
    id: 2,
    title: 'Component 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a id quasi.',
    display: true
   },
   {
    id: 3,
    title: 'Component 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus a id quasi.',
    display: false
   }
  ]
  return (
    <>
      {/* <Logo /> */}
      {/* <SampleComponent title={cards[0].title} desctiption="Description 1"/>
      <SampleComponent title="Component 2" desctiption="Description 2"/>
      <SampleComponent title="Component 3" desctiption="Description 3"/> */}
      {/* {cards.map((card) => (
        <SampleComponent key={card.id} title={card.title} description={card.description} display={card.display}/>
      ))} */}
      <Counter/>
      <Like/>
      
    </>
  );
}

export default App;
