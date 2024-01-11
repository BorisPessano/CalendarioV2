import React from 'react';

const CalendarMonthView = ({ year, month, feriados }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
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

  const calculateRemainingDays = () => {
    const weekdays = Array.from({ length: daysInMonth }, (_, index) => index + 1)
      .filter((day) => !isWeekend(day))
      .filter((day) => !isFeriado(day)).length;

    const presentDays = Math.ceil(0.6 * weekdays);

    return presentDays;
  };

  const renderDay = (day) => {
    const weekendStyle = isWeekend(day) ? 'bg-gray-200' : '';
    const feriado = isFeriado(day);
    const feriadoStyle = feriado ? 'bg-blue-500 text-white' : '';

    return (
      <div key={day} className={`border p-2 text-center ${weekendStyle} ${feriadoStyle}`}>
        {feriado ? feriado.title : day}
      </div>
    );
  };

  const renderDayLabels = () => {
    return (
      <div className="flex mb-2">
        {dayOfWeekLabels.map((label) => (
          <div key={label} className="flex-1 border p-2 text-center font-bold bg-gray-300">
            {label}
          </div>
        ))}
      </div>
    );
  };

  const renderWeek = (startDay) => {
    const weekDays = Array.from({ length: 7 }, (_, index) => startDay + index + 1);
    return (
      <div key={startDay} className="flex mb-2">
        {weekDays.map((day) => (
          <div key={day} className="flex-1">
            {day <= daysInMonth ? renderDay(day) : null}
          </div>
        ))}
      </div>
    );
  };

  const renderCalendar = () => {
    const weeksArray = Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, index) => index * 7);
    return (
      <div className="m-4">
        <h2 className="text-2xl font-bold mb-2">{`${monthName} ${year}`}</h2>
        {renderDayLabels()}
        <div>
          {weeksArray.map((startDay) => renderWeek(startDay))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderCalendar()}
      <div>
        Remaining Days: {calculateRemainingDays()}
      </div>
    </div>
  );
};

export default CalendarMonthView;
