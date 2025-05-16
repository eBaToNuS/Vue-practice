const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: "Пароль неверный",
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
