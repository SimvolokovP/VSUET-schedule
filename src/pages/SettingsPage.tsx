import { FC } from "react";
import { PiTelegramLogoBold } from "react-icons/pi";


const SettingsPage: FC = () => {
  return (
    <div className="settings-page">
     <PiTelegramLogoBold color={"var(--tg-theme-text-color)"} size={32} />
    </div>
  );
};

export default SettingsPage