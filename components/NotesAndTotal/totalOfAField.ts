export const totalOfAField = (form: any, validateName: string, multiplyingFactor?: number) => {
  return (
    (multiplyingFactor || 1) *
    ((!isNaN(parseFloat(form?.values[`${validateName}_day`])) ? parseFloat(form?.values[`${validateName}_day`]) : 0) +
      (!isNaN(parseFloat(form?.values[`${validateName}_week`])) ? parseFloat(form?.values[`${validateName}_week`]) / 7 : 0) +
      (!isNaN(parseFloat(form?.values[`${validateName}_month`])) ? parseFloat(form?.values[`${validateName}_month`]) / 30 : 0))
  );
};
