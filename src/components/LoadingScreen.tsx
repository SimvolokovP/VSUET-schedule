import { FC } from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingScreen: FC = () => {
  return (
    <div className="loading-screen">
      <InfinitySpin color="var(--tg-theme-button-color)" />
    </div>
  );
};

export default LoadingScreen;
