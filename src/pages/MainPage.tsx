import { FC } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/typedStoreHook";
import { fetchCouples } from "../store/coupleSlice";
import AppChapter from "../components/AppChapter";

const MainPage: FC = () => {
  const { list } = useAppSelector((state) => state.couple);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCouples());
  }, [dispatch]);

  return (
    <>
      <AppChapter />
      {list.map((couple) => (
        <div key={couple.name}>{couple.name}</div>
      ))}
    </>
  );
};

export default MainPage;
