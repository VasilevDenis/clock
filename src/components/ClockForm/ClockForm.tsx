import React, { useState } from 'react';
import { gmtOffsets } from '../../timezones';
import './ClockForm.css';


interface ClockFormProps {
  onAddClock: (name: string, offset: number) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ onAddClock }) => {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddClock(name, offset);
    setName('');
    setOffset(0);
  };

  return (
    <form className='clock-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={offset} onChange={(e) => setOffset(Number(e.target.value))} required>
        {gmtOffsets.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ClockForm;
