import { Table } from "react-bootstrap";
import { TaskType } from "../../../Types/types";
import "./index.css";
import React from "react";

interface Iprop {
  taskList: TaskType[];
  handleStatus: (id: string, status: boolean) => void;
  handleDelete: (id: string) => void;
}

export const Item: React.FC<Iprop> = ({
  taskList,
  handleStatus,
  handleDelete,
}) => {
  const statusChange = (id: string, status: boolean) => {
    handleStatus(id, status);
  };

  const removeTask = (id: string) => {
    handleDelete(id);
  };

  return (
    <Table borderless variant="dark">
      <thead>
        <tr>
          <th className="text-primary">Tasks</th>
          <th className="text-primary ml-0">Status</th>
          <th className="text-primary ml-0">Delete</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((eachItem) => (
          <tr key={eachItem.id}>
            <td>{eachItem.task}</td>
            <td>
              <button
                className="button"
                onClick={() => statusChange(eachItem.id, eachItem.status)}
              >
                <span
                  className={`material-icons ${
                    eachItem.status ? "green" : "white"
                  }`}
                >
                  check_circle
                </span>
              </button>
            </td>
            <td>
              <button
                className="button"
                onClick={() => removeTask(eachItem.id)}
              >
                <span className="material-icons white">delete</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
