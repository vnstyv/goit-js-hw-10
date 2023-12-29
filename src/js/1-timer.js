import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const timerInput = document.querySelector("#datetime-picker");
const timerBtn = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMin = document.querySelector("[data-minutes]");
const timerSec = document.querySelector("[data-seconds]");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedData = selectedDates[0];
      const originalTime = selectedData.getTime() - new Date().getTime();
      const timeUpdate = convertMs(originalTime);

      if (selectedData < new Date()) {
          iziToast.error({
              position: "topRight",
              message: "Please choose a date in the future",
          });  
          timerBtn.setAttribute("disabled", true);
      } else {
          timerBtn.removeAttribute("disabled");
          userSelectedDate = selectedData;
        }
  },
};

const flatPickr = flatpickr(timerInput, options);
let userSelectedDate = null;

timerBtn.addEventListener("click", () => {
    const selectedTime = userSelectedDate.getTime();
    timerInput.value = "";
    timerInput.setAttribute("disabled", true);
    timerBtn.setAttribute("disabled", true);

    const timerInterval = setInterval(() => {
        const currentTime = Date.now();
        let remainingTime = selectedTime - currentTime;
        const numberOfTimer = convertMs(remainingTime);

        if (remainingTime <= 0) {
            iziToast.info({
                position: "topRight",
                message: "Time is up",
            });
            clearInterval(timerInterval);
        } else {
            timerDays.textContent = `${numberOfTimer.days}`;
            timerHours.textContent = `${numberOfTimer.hours}`;
            timerMin.textContent = `${numberOfTimer.minutes}`;
            timerSec.textContent = `${numberOfTimer.seconds}`;
        }
    }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  // Remaining hours
    const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');;
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');;
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
}
