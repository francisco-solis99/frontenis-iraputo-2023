import { atcb_action as addToCalendar } from 'add-to-calendar-button';

export default function AddToCalendarButton(props) {
  const handleAddCalendar = (e) => {
    const config = {
      name: '🎾 Torneo Frontenis Irapuato 2023',
      description: 'Primer torneo de las fresas de frontenis en Irapuato',
      startDate: '2023-03-26',
      endDate: '2023-03-26',
      startTime: '08:00',
      endTime: '17:45',
      timeZone: 'America/Mexico_City',
      location: 'Irapuato Guanajuato México',
      trigger: 'click',
      options: ['Google', 'Apple', 'Outlook.com', 'Yahoo']
    };

    addToCalendar(config, e.target);
  };

  return (
    <button type='button' className='bg-transparent border-0' onClick={handleAddCalendar}>
      {props.children}
    </button>
  );
}
