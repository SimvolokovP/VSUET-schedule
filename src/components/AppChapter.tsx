import { FC, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import { RxAvatar } from "react-icons/rx";

const AppChapter: FC = () => {
  const { user, tg } = useTelegram();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("ru-RU", options);
    setCurrentDate(formattedDate);
  }, [user, tg]);

  return (
    <div className="app-chapter">
      <div>
        <div className="app-chapter__date">{currentDate}</div>
        <div className="app-chapter__greeting">
          Привет, {user?.first_name} {user?.last_name}!
        </div>
      </div>
      <div>
        <RxAvatar size={30} color={"var(--tg-theme-button-color)"} />
      </div>
    </div>
  );
};

export default AppChapter;
