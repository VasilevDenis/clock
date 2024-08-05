import React, { useState } from 'react';
import Clock from './components/Clock/Clock'; 
import ClockForm from './components/ClockForm/ClockForm';
import './App.css';

const App: React.FC = () => {
  const [clocks, setClocks] = useState<{ name: string; offset: number }[]>([]);

  const handleAddClock = (name: string, offset: number): void => {
    setClocks([...clocks, { name, offset }]);
  };

  const handleRemoveClock = (index: number): void => {
    setClocks(clocks.filter((_, i) => i !== index));
  };

  return (
    <div className='app'>
      <h1>Мировые часы</h1>
      <ClockForm onAddClock={handleAddClock} />
      <div className='clocks'>
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            offset={clock.offset}
            onRemove={() => handleRemoveClock(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
