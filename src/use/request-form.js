import { useForm, useField } from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: "active",
    },
  });

  // Для каждого поля используем value для v-model
  const {
    value: fio,
    errorMessage: fError,
    handleBlur: fBlur,
  } = useField("fio", yup.string().trim().required("Введите ФИО клиента"));

  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    "phone",
    yup.string().trim().required("Телефон не может быть пустым")
  );

  const {
    value: amount,
    errorMessage: aError,
    handleBlur: aBlur,
  } = useField(
    "amount",
    yup
      .number()
      .required("Введите сумму")
      .min(0, "Сумма не может быть меньше 0")
  );

  const { value: status } = useField("status");

  const onSubmit = handleSubmit(fn);

  return {
    isSubmitting,
    onSubmit,
    status,
    // Значения полей
    fio,
    phone,
    amount,
    // Ошибки
    fError,
    pError,
    aError,
    // Обработчики
    fBlur,
    pBlur,
    aBlur,
  };
}
