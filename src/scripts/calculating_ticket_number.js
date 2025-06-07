import {
  START_TICKET_NUMBER,
  MULTIPLIER_PER_DAY,
  BASE_DATE_TIMESTAMP
} from '../config.js';
/**
 * Вычисляет количество полных дней между двумя временными метками (в секундах).
 * @param {number} currentTimestamp - Текущая временная метка в секундах.
 * @param {number} baseTimestamp - Базовая временная метка в секундах.
 * @returns {number} Количество полных дней между датами.
 */
function getDaysDifference(currentTimestamp, baseTimestamp) {
  const cleanCurrentTimestamp = Math.floor(currentTimestamp);
  const cleanBaseTimestamp = Math.floor(baseTimestamp);
  const differenceInSeconds = cleanCurrentTimestamp - cleanBaseTimestamp;
  const SECONDS_IN_DAY = 86400; // 60 секунд * 60 минут * 24 часа
  return Math.floor(differenceInSeconds / SECONDS_IN_DAY);
}

/**
 * Форматирует число, добавляя пробелы в качестве разделителей тысяч.
 * @param {number} number - Число для форматирования.
 * @returns {string} Отформатированное число в виде строки.
 */
function formatNumberWithSpaces(number) {
  // Используем Intl.NumberFormat для международного форматирования.
  return new Intl.NumberFormat('ru-RU').format(number);
}

// --- Основная логика расчета номера билета ---

// Получаем текущее время в секундах
const dateNowSeconds = Date.now() / 1000;

// Вычисляем количество дней, прошедших с базовой даты
const daysPassed = getDaysDifference(dateNowSeconds, BASE_DATE_TIMESTAMP);

// Вычисляем итоговый номер билета, используя импортированные константы
const finalTicketNumber = daysPassed * MULTIPLIER_PER_DAY + START_TICKET_NUMBER;

// Получаем элемент для отображения кода и обновляем его
const codeDisplayElement = document.getElementById("codeDisplay");
if (codeDisplayElement) { // Проверяем, существует ли элемент
  codeDisplayElement.textContent = formatNumberWithSpaces(finalTicketNumber);
} else {
  // Упрощаем сообщение об ошибке, без шаблонной строки, чтобы исключить проблему с ней.
  console.error("Элемент с ID 'codeDisplay' не найден.");
}