import { FC } from "react";
import { ICouple } from "../models/ICouple";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import CoupleItem from "./CoupleItem";

interface CouplesListProps {
  sortedAndFilteredCouples: ICouple[];
}

const CouplesList: FC<CouplesListProps> = ({ sortedAndFilteredCouples }) => {
  return (
    <>
      {sortedAndFilteredCouples.length ? (
        <ul className="list-reset couples-list">
          {sortedAndFilteredCouples.map((couple) => (
            <CoupleItem
              key={
                couple.name +
                couple.day +
                couple.teacher +
                couple.start +
                couple.subgroup
              }
              couple={couple}
            />
          ))}
        </ul>
      ) : (
        <div className="couple-empty">
          <HiOutlineEmojiHappy size={32} />В этот день пар не обнаружено!
        </div>
      )}
    </>
  );
};

export default CouplesList;
