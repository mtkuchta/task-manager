export const isPasswordValidated = (password) => {
  const passwordArr = password.split('');

  const regexps = {
    numbers: /[1-9]/g,
    uppercase: /[A-Z]/g,
  };

  const isLengthCorrect = passwordArr.length >= 6;
  const isNumberIncluded = regexps.numbers.test(password);
  const isUpperCaseIncluded = regexps.uppercase.test(password);

  if (isLengthCorrect && isNumberIncluded && isUpperCaseIncluded) return true;

  return false;
};
