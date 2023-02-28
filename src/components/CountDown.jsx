import { useEffect, useState } from 'react';

function getReminderTime(targetDate) {
  const timeTargetDate = targetDate.getTime();
  const now = Date.now();
  const timeToEvent = timeTargetDate - now;
  const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function getReminderTimeWithFormat(targetdate) {
  const timeReminder = getReminderTime(targetdate);
  const timeReminderWithFormat = fillZeros(timeReminder);
  return timeReminderWithFormat;
}

const fillZeros = (remainingTime) => {
  const entriesRemainingTime = Object.entries(remainingTime);
  const entriesRemainingTimeModified = entriesRemainingTime.map(([key, value]) => [key, value.toString().padStart(2, '0')]);
  return Object.fromEntries(entriesRemainingTimeModified);
};

export default function CountDown({ dateEvent }) {
  const [remainingTime, setRemainingTime] = useState(getReminderTimeWithFormat(dateEvent));

  const { seconds, minutes, hours, days } = remainingTime;
  const time = [
    { label: 'Días', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds }
  ];
  const countdownEnded = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  useEffect(() => {
    const timer =
      !countdownEnded &&
      setInterval(() => {
        setRemainingTime(getReminderTimeWithFormat(dateEvent));
      }, 1000);

    if (countdownEnded) clearInterval(timer);

    return () => clearInterval(timer);
  }, [countdownEnded]);

  return (
    <>
			{countdownEnded && (
				<div className='mb-2 font-bold'>
					Empieza el torneo 🎾🍓
				</div>)
			}

			<section className='grid grid-cols-4 gap-x-2'>
        {
          time.map(({ label, value }, index) => {
            const isLast = index === time.length - 1;
            return (
              <div key={index} className="flex flex-col w-full">
                <div className={`text-3xl lg:text-5xl text-white font-bold relative
                ${!isLast && 'after:ml-1 after:font-bold after:text-white after:content-[":"] after:absolute'}`}>
                  {value}
                </div>
							{label && <span className='text-white/80 text-xs lg:text-base'>{label}</span>}
              </div>
            );
          })
        }
			</section>
		</>
  );
}
