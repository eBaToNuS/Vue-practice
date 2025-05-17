const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: "Пароль неверный",
  TOO_MANY_ATTEMPTS_TRY_LATER: "Слишком много попыток, попробуйте позже",
  auth: "Сначала войдите в аккаунт",
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
