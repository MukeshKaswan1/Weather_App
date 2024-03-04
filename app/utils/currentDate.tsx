export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    timeZone: 'Asia/Kolkata',
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return currentDate;
};
