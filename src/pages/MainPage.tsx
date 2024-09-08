import { FC, useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/typedStoreHook";
import { fetchCouples } from "../store/coupleSlice";
import AppChapter from "../components/AppChapter";
import LoadingScreen from "../components/LoadingScreen";
import AppFilter from "../components/AppFilter";
import { useCouples } from "../hooks/useSortedAndFilteredCouples";
import { IQuery } from "../models/IQuery";
import { getCurrentDayAndWeekType } from "../utils/utils";
import CouplesList from "../components/CouplesList";
import { message } from "antd";

const MainPage: FC = () => {
  const { currentDay, weekType } = getCurrentDayAndWeekType();
  const [query, setQuery] = useState<IQuery>({
    day: currentDay,
    subgroup: "1",
    week: weekType,
  });
  const { list, isLoading, error } = useAppSelector((state) => state.couple);
  const dispatch = useAppDispatch();
  const sortedAndFilteredCouples = useCouples(list, query);

  const [messageApi, contextHolder] = message.useMessage();

  const errorMessage = (error: string) => {
    messageApi.open({
      type: "error",
      content: error,
    });
  };

  useEffect(() => {
    if (error) {
      errorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchCouples());
  }, [dispatch]);

  return (
    <>
      {contextHolder}
      {isLoading ? <LoadingScreen /> : <></>}
      <div className="main-page">
        <div className="container main-page__container">
          <AppChapter />
          <AppFilter
            query={query}
            setQuery={setQuery}
            currentDay={currentDay}
            weekType={weekType}
          />
          <CouplesList sortedAndFilteredCouples={sortedAndFilteredCouples} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
