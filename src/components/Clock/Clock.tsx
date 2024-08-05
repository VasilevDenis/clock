import React, { useEffect, useState } from 'react';
import './Clock.css';

interface ClockProps {
  name: string;
  offset: number;
  onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ name, offset, onRemove }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
      const localDate = new Date(utc + (3600000 * offset));
      setTime(localDate.toLocaleTimeString());
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [offset]);

  return (
    <div className='clocks'>
      <h2>{name}</h2>
      <p>{time}</p>
      <button onClick={onRemove}>Удалить</button>
    </div>
  );
};

export default Clock;
