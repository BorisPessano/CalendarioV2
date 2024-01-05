import React from 'react';
import CalendarMonthView from '../Components/CalendarMonthViews';

const CalendarioPage = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();


  const feriados = [
    { start: "2024-01-01", title: "Año Nuevo", color: "blue" },
    { start: "2024-02-12", title: "Carnaval", color: "blue" },
    { start: "2024-02-13", title: "Carnaval", color: "blue" },
    { start: "2024-03-28", title: "Semana de turismo", color: "blue" },
    { start: "2024-03-29", title: "Semana de turismo", color: "blue" },
    { start: "2024-04-22", title: "Desembarco de los 33. Feriado corrido de fecha", color: "blue" },
    { start: "2024-05-01", title: "Día de los trabajadores", color: "blue" },
    { start: "2024-06-19", title: "Natalicio de Artigas", color: "blue" },
    { start: "2024-07-18", title: "Jura de la Constitución", color: "blue" },
    { start: "2024-12-25", title: "Navidad", color: "blue" },
    { start: "2023-12-25", title: "Navidad", color: "blue" },
  ];

  return (
    <div>
      <h1>Calendario</h1>
      <CalendarMonthView year={currentYear} month={currentMonth} feriados={feriados} />
    </div>
  );
};

export default CalendarioPage;
