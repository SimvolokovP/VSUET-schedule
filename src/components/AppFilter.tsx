import { Flex, Select, Tabs, TabsProps } from "antd";
import { FC } from "react";
import { IQuery } from "../models/IQuery";

interface AppFilterProps {
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  currentDay: string;
  weekType: string;
}

const AppFilter: FC<AppFilterProps> = ({
  query,
  setQuery,
  currentDay,
  weekType,
}) => {
  const handleChangeWeek = (week: string) => {
    setQuery({ ...query, week: week });
  };

  const handleChangeSubGroup = (subgroup: string) => {
    setQuery({ ...query, subgroup: subgroup });
  };

  const onChange = (day: string) => {
    setQuery({ ...query, day: day });
  };

  const items: TabsProps["items"] = [
    {
      key: "понедельник",
      label: "Пн",
    },
    {
      key: "вторник",
      label: "Вт",
    },
    {
      key: "среда",
      label: "Ср",
    },
    {
      key: "четверг",
      label: "Чт",
    },
    {
      key: "пятница",
      label: "Пт",
    },
    {
      key: "суббота",
      label: "Сб",
    },
    {
      key: "воскресенье",
      label: "Вс",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey={currentDay} items={items} onChange={onChange} />
      <Flex align={"center"} gap={"30px"}>
        <Select
          style={{ width: "100%" }}
          onChange={handleChangeSubGroup}
          defaultValue={"1"}
          options={[
            { value: "1", label: "Подгруппа 1" },
            { value: "2", label: "Подгруппа 2" },
          ]}
        />
        <Select
          style={{ width: "100%" }}
          onChange={handleChangeWeek}
          defaultValue={weekType}
          options={[
            { value: "Знаменатель", label: "Знаменатель" },
            { value: "Числитель", label: "Числитель" },
          ]}
        />
      </Flex>
    </>
  );
};

export default AppFilter;
