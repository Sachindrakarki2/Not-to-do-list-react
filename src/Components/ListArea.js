import React from "react";
import { BadList } from "./BadList";
import { EntryList } from "./EntryList";

export const ListArea = ({
  taskList,
  itemToDelete,
  switchTask,
  handleOnSelect,
  handleOnSelectEntry,
}) => {
  const entyList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");

  return (
    <div>
      <div className="row mt-5 g-2">
        <EntryList
          taskList={entyList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
          handleOnSelectEntry={handleOnSelectEntry}
        />
        <BadList
          badList={badList}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
          switchTask={switchTask}
        />
      </div>
    </div>
  );
};
