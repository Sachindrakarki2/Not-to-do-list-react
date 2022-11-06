import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { ListArea } from "./Components/ListArea";
import { Title } from "./Components/Title";

const herperWek = 7 * 24;

function App() {
  const [taskList, setTaskList] = useState([]);
  const [itemToDelete, setItemToDelect] = useState([]);
  const [selectAll, setSelectAll] = useState([]);

  const totalHrs = taskList.reduce((subTtl, item) => subTtl + +item.hr, 0);

  const addTask = (data) => {
    if (herperWek < totalHrs + +data.hr) {
      return alert("Boss, you don't enought time, sorry");
    }
    setTaskList([...taskList, data]);
  };

  const switchTask = (_id, type) => {
    const temArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(temArg);
  };
  const handleOnSelectEntry = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
  };

  const handleOnSelectBad = () => {};

  const handleOnDelete = () => {
    if (!window.confirm("are you sure you want to delete?")) {
      return;
    }
    setTaskList(taskList.filter((item) => !itemToDelete.includes(item._id)));
    setItemToDelect([]);
  };
  const handleOnSelect = (e) => {
    const { value, checked } = e.target;

    checked
      ? setItemToDelect([...itemToDelete, value])
      : setItemToDelect(itemToDelete.filter((item) => item !== value));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form addTask={addTask} />
        <ListArea
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
          itemToDelete={itemToDelete}
          handleOnSelectEntry={handleOnSelectEntry}
        />

        <div className="row fw-bold">
          <div className="col">
            The total hours allocated = <span id="totalHrs">{totalHrs}</span>{" "}
            Hrs
          </div>
        </div>
        {itemToDelete.length > 0 && (
          <div className="d-grid g-2">
            <button onClick={handleOnDelete} className="btn btn-danger">
              delect Selected item ({itemToDelete.length}) Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
