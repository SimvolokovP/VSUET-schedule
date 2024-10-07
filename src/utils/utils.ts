export const getCurrentDayAndWeekType = () => {
  const currentDate = new Date();

  const weekNumber = Math.ceil(
    (currentDate.getTime() -
      new Date(currentDate.getFullYear(), 0, 1).getTime()) /
      1000 /
      60 /
      60 /
      24 /
      7
  );

  const weekType = weekNumber % 2 === 0 ? "Числитель" : "Знаменатель";

  const currentDay = currentDate.toLocaleString("ru-RU", { weekday: "long" });

  return { currentDay, weekType };
};
