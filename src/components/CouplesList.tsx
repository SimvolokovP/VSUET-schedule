import { FC } from "react";
import { ICouple } from "../models/ICouple";
import {
  MdOutlineMeetingRoom,
  MdOutlinePerson,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";

interface CouplesListProps {
  sortedAndFilteredCouples: ICouple[];
}

const CouplesList: FC<CouplesListProps> = ({ sortedAndFilteredCouples }) => {
  return (
    <>
      {sortedAndFilteredCouples.length ? (
        <ul className="list-reset couples-list">
          {sortedAndFilteredCouples.map((couple) => (
            <li key={couple.name + couple.day + couple.teacher}>
              <article className="couple-item">
                <div className="couple-item__chapter">
                  <div className="couple-item__time">
                    {couple.start} - {couple.end}
                  </div>
                  <div className="couple-item__day">
                    <span>{couple.day}</span>
                    <span>{couple.week}</span>
                  </div>
                </div>
                <h3 className="couple-item__title">{couple.name}</h3>
                <div className="couple-item__descr">
                  <div className="couple-item__descr--point">
                    {<MdOutlineMeetingRoom />}
                    {couple.audience}
                  </div>
                  <div className="couple-item__descr--point">
                    {<MdOutlineWorkOutline />}
                    {couple.type}
                  </div>
                  <div className="couple-item__descr--point">
                    {<MdOutlinePerson />}
                    {couple.teacher}
                  </div>
                </div>
              </article>
            </li>
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
