import React from 'react';
import styles from './CalendarMonthView.module.css';

const CalendarMonthView = ({ year, month, feriados }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayOfWeekLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const isWeekend = (day) => {
    const dayOfWeek = new Date(year, month, day).getDay();
    return dayOfWeek === 6 || dayOfWeek === 0;
  };

  const isFeriado = (day) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const feriado = feriados.find((feriado) => feriado.start === formattedDate);
    return feriado ? feriado : null;
  };

  const renderDay = (day) => {
    const weekendStyle = isWeekend(day) ? styles.weekend : {};
    const feriado = isFeriado(day);
    const feriadoStyle = feriado ? { color: 'white', backgroundColor: 'blue' } : {};

    return (
      <div key={day} className={`${styles.day} ${weekendStyle}`} style={feriadoStyle}>
        {feriado ? feriado.title : day}
      </div>
    );
  };

  const renderDayLabels = () => {
    return (
      <div className={styles.week}>
        {dayOfWeekLabels.map((label) => (
          <div key={label} className={styles.weekdayLabel}>
            {label}
          </div>
        ))}
      </div>
    );
  };

  const renderWeek = (startDay) => {
    const weekDays = Array.from({ length: 7 }, (_, index) => startDay + index + 1);
    return (
      <div key={startDay} className={styles.week}>
        {weekDays.map((day) => (
          <div key={day} className={styles.day}>
            {day <= daysInMonth ? renderDay(day) : null}
          </div>
        ))}
      </div>
    );
  };

  const renderCalendar = () => {
    const weeksArray = Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, index) => index * 7);
    return (
      <div>
        {renderDayLabels()}
        <div className={styles.calendar}>
          {weeksArray.map((startDay) => renderWeek(startDay))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>{`${year} - ${month + 1}`}</h2>
      <div className={styles.calendar}>{renderCalendar()}</div>
    </div>
  );
};

export default CalendarMonthView;
