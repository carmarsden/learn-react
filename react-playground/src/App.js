import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';
import DemonymApp from './demonymapp/demonymApp';


const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   tooltip
  </Tooltip>
)

const tabsProp = [
  { name: 'First tab',
    content: 'This is the first tab\'s text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'This is the second tab\'s text. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'This is the third tab\'s text. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'This is the text for Section 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'This is the text for Section 2. Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'This is the text for Section 3. Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

function App() {
  return (
    <main className='App'>
      <h1>Demonym App</h1>
      <DemonymApp />
      <Split>
        <div className='thirds'>
          <h1>Messages</h1>
          <Messages name="Messages" unread={0}/>
          <Messages name="Notifications" unread={10}/>
        </div>
        <div className='thirds'>
          <h1>Hello World</h1>
          <HelloWorld />
        </div>
        <div className='thirds'>
          <h1>The Date</h1>
          <TheDate />
        </div>
      </Split>
      <h1>Tooltips</h1>
      <div>
        This is the {firstTooltip} content for the left Split. It contains <Tooltip message='one more tooltip message'>a couple</Tooltip> fun Tooltip examples.
      </div>
      <h1>Tabs</h1>
      <Tabs tabs={tabsProp} />
      <Split>
        <div className='thirds'>       
          <h1>Counter</h1>
          <Counter step={3} />
        </div>
        <div className='thirds'>
          <h1>Bomb</h1>
          <Bomb />
        </div>
        <div className='thirds'>
          <h1>Roulette Gun</h1>
          <RouletteGun bulletInChamber={4} />
        </div>
      </Split>
      <h1>Accordion</h1>
      <Accordion sections={sections} />
    </main>
  );
}

export default App;
