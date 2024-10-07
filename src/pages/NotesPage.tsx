import React, { FC, useEffect, useState } from "react";
import { Button, Flex, Input } from "antd";
import { MdOutlineSave } from "react-icons/md";

const { TextArea } = Input;

const NotesPage: FC = () => {
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const saveNotes = () => {
    localStorage.setItem("notes", notes);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  return (
    <div
      className="page"
      style={{ display: "flex", flexDirection: "column", gap: "8px" }}
    >
      <div className="container" style={{ width: "100%" }}>
        <Flex justify={"end"} style={{ padding: "8px", width: "100%" }}>
          <Button style={{backgroundColor: "var(--tg-theme-button-color)"}} type="primary" onClick={saveNotes}>
            Сохранить <MdOutlineSave size={24} />
          </Button>
        </Flex>
        <TextArea
          style={{ width: "100%" }}
          placeholder="Есть мысли?"
          autoSize={{ minRows: 2, maxRows: 24 }}
          value={notes}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NotesPage;
