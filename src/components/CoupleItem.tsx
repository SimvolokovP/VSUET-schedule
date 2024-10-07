import { FC } from "react";
import { ICouple } from "../models/ICouple";
import {
  MdOutlineMeetingRoom,
  MdOutlinePerson,
  MdOutlineWorkOutline,
} from "react-icons/md";

interface CoupleItemProps {
  couple: ICouple;
}

const shadowColors = [
  { type: "Практика", color: "rgba(255, 200, 0, 0.5)" },
  { type: "Лекция", color: "rgba(0, 123, 255, 0.5)" },
  { type: "Лаб. работа", color: "rgba(40, 167, 69, 0.5)" },
];

const CoupleItem: FC<CoupleItemProps> = ({ couple }) => {
  const boxShadowColor =
    shadowColors.find((shadow) => shadow.type === couple.type)?.color ||
    "rgba(34, 60, 80, 0.2)";

  return (
    <li
    >
      <article
        className="couple-item"
        style={{
          boxShadow: `4px 4px 8px 0px ${boxShadowColor}`,
          WebkitBoxShadow: `4px 4px 8px 0px ${boxShadowColor}`,
          MozBoxShadow: `4px 4px 8px 0px ${boxShadowColor}`,
        }}
      >
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
            <MdOutlineMeetingRoom />
            {couple.audience}
          </div>
          <div className="couple-item__descr--point">
            <MdOutlineWorkOutline />
            {couple.type}
          </div>
          <div className="couple-item__descr--point">
            <MdOutlinePerson />
            {couple.teacher}
          </div>
        </div>
      </article>
    </li>
  );
};

export default CoupleItem;
