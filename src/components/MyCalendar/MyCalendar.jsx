import React, { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css"; // Importa os estilos padrão

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default MyCalendar;
