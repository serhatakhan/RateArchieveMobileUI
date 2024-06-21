import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  // isimlendirmeler initialValues değerleri ile aynı olmalı
  name: Yup.string().required('Zorunlu'),
  surname: Yup.string().required('Zorunlu'),
  email: Yup.string()
    .required('Zorunlu')
    .email('Lütfen geçerli bir email adresi giriniz.'),
  password: Yup.string()
    .required('Zorunlu')
    .matches(
      /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9ğüşıöçĞÜŞİÖÇ!^+%/()=?_*{[}.:,;/#£$-\]]{8,50})$/,
      'Şifreniz yeterince güçlü değil.',
    ),
  // regex tanımı eklemek için de matches kullanıyoruz
  passwordConfirm: Yup.string()
    .required('Zorunlu')
    .oneOf([Yup.ref('password')], 'Şifreniz eşleşmiyor.'),
  // buradaki ref, nereyle referans göstereceksek onu ifade ediyor. o da bir üstteki password.
  reference: Yup.string().required('Zorunlu'),
});

export default RegisterSchema
