export const getCurrentDayAndWeekType = () => {
  const startDate = new Date("2024-08-01");
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weekNumber = Math.floor(((diffDays + startDate.getDay() + 6) % 7) / 7);
  const weekType = weekNumber % 2 === 0 ? "Числитель" : "Знаменатель";

  const currentDay = currentDate.toLocaleString("ru-RU", { weekday: "long" });

  return { currentDay, weekType };
};
