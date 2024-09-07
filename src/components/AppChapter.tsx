import { FC } from "react";
import { useTelegram } from "../hooks/useTelegram";

const AppChapter: FC = () => {
  const { user } = useTelegram();
  return (
    <div className="app-chapter">
      <div>
        <div className="app-chapter__date"></div>
        <div className="app-chapter__greeting">
          Hi, {user?.first_name} {user?.last_name}
        </div>
      </div>
      <div>
        <img src={user?.photo_url} alt={user?.username} />
      </div>
    </div>
  );
};

export default AppChapter;
