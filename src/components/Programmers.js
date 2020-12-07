/*
PROGRAMMERS Instructions
Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif
*/
import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule...

export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers list on the one hand, and the id of the featured programmer on the other.

  const [ programmerList, setProgrammerList ] = useState(listOfAwesome);
  const [ activeId, setActiveId ] = useState(false);
  

  const getNameOfFeatured = (id) => {
    
    return programmerList[id-1].name;

    // It's going to utilize both slices of state to return the _name_ of the featured dev.
    // The beauty of closures is that we can "see" both slices of state from this region
    // of the program, without needing to inject the information through arguments.
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: `${activeId ? 'gold': 'royalblue'}`, // 🤔 color turns to gold, when celebrating
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programmerList.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={() => { setActiveId(dev.id) }}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
            activeId
            ? `🎉 Let's celebrate ${getNameOfFeatured(activeId)}! 🥳`
            : 'Pick an awesome programmer'
        }
      </div>
    </div>
  );
}
