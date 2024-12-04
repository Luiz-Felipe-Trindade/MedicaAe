import React, { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css"; // Importa os estilos padrão

export const MyCalendar = ({ onSelectedDate }) => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
    onSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleChange} value={date} />
    </div>
  );
};
