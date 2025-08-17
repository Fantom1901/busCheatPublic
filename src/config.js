export const START_TICKET_NUMBER = 1184053672;

export const BASE_DATE_STRING = '2025-08-17';

export const MULTIPLIER_PER_DAY = 379281;

/**
 * Преобразует строковую дату в Unix-таймстамп в секундах (начало дня по UTC).
 * @param {string} dateString - Дата в формате 'YYYY-MM-DD'.
 * @returns {number} Unix-таймстамп в секундах.
 */

function convertDateToUnixTimestamp(dateString) {
  const date = new Date(dateString);
  // getTime() возвращает миллисекунды, делим на 1000 для секунд
  return Math.floor(date.getTime() / 1000);
}
export const BASE_DATE_TIMESTAMP = convertDateToUnixTimestamp(BASE_DATE_STRING);

if (isNaN(BASE_DATE_TIMESTAMP)) {
  console.error("Ошибка: Некорректный формат даты в BASE_DATE_STRING: " + BASE_DATE_STRING + ". Используйте 'YYYY-MM-DD'.");
}