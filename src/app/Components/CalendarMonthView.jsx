import React from 'react';
import styles from './CalendarMonthView.module.css'; 

const CalendarMonthView = ({ year, month, feriados }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isWeekend = (day) => {
    const dayOfWeek = new Date(year, month, day).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const isFeriado = (day) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return feriados.some((feriado) => feriado.start === formattedDate);
  };

  const renderDay = (day) => {
    const weekendStyle = isWeekend(day) ? styles.weekend : {}; 
    const feriadoStyle = isFeriado(day) ? { color: 'red' } : {};

    return (
      <div key={day} className={`${styles.day} ${weekendStyle}`} style={feriadoStyle}>
        {day}
      </div>
    );
  };

  const renderCalendar = () => {
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    return daysArray.map(renderDay);
  };

  return (
    <div>
      <h2>{`${year} - ${month + 1}`}</h2>
      <div className={styles.calendar}>{renderCalendar()}</div>
    </div>
  );
};

export default CalendarMonthView;
