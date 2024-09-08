import { useMemo } from "react";
import { ICouple } from "../models/ICouple";
import { IQuery } from "../models/IQuery";

export const useSortedCouples = (couples: ICouple[]) => {
  const sortedCouples = useMemo(() => {
    return [...couples].sort((a, b) => {
      const timeA = a.start.split(":").map(Number);
      const timeB = b.start.split(":").map(Number);
      return timeA[0] - timeB[0] || timeA[1] - timeB[1];
    });
  }, [couples]);

  return sortedCouples;
};

export const useCouples = (couples: ICouple[], query: IQuery) => {
  const sortedCouples = useSortedCouples(couples);
  const sortedAndSearchedCouples = useMemo(() => {
    return sortedCouples.filter(
      (couple) =>
        couple.day.toLowerCase().trim() === query.day.toLowerCase().trim() &&
        (couple.week.toLowerCase().trim() === query.week.toLowerCase().trim() ||
          couple.week === "Каждую неделю") &&
        (couple.subgroup.toLowerCase().trim() ===
          query.subgroup.toLowerCase().trim() ||
          couple.subgroup === "Две группы")
    );
  }, [query, sortedCouples]);
  return sortedAndSearchedCouples;
};
