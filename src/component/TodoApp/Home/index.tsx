import { Container, Form, Button, Col } from "react-bootstrap";
import { useState } from "react";
import { TaskType } from "../../../Types/types";
import { Item } from "../Item";
import { nanoid } from "nanoid";
import "./index.css";

export const Home = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.length !== 0) {
      const newTask: TaskType = {
        id: nanoid(),
        task: task,
        status: false,
      };

      setTaskList([...taskList, newTask]);
      setTask("");
    } else {
      alert("ADD A TASK");
    }
  };

  const handleStatus = (id: string, status: boolean) => {
    const updatedList = taskList.map((eachItem) => {
      if (eachItem.id === id) {
        return { ...eachItem, status: !status };
      }
      return eachItem;
    });
    setTaskList(updatedList);
  };

  const handleDelete = (id: string) => {
    const newList: TaskType[] = [];
    taskList.map((eachItem) => {
      if (eachItem.id !== id) {
        newList.push(eachItem);
      }
      return null;
    });
    setTaskList(newList);
  };

  return (
    <>
      <div className="margin-top">
        <Container>
          <Form
            className="d-flex flex-row justify-content-center"
            onSubmit={handleSubmitTask}
          >
            <Col lg={4} xs={8}>
              <Form.Group className="w-100">
                <Form.Control
                  type="input"
                  placeholder="Enter A Task"
                  onChange={handleTask}
                  value={task}
                />
              </Form.Group>
            </Col>
            <Button
              variant="contained"
              className="btn-primary mx-3"
              type="submit"
            >
              ADD
            </Button>
          </Form>
        </Container>
        <Container className="mt-5">
          <Item
            taskList={taskList}
            handleStatus={handleStatus}
            handleDelete={handleDelete}
          />
        </Container>
      </div>
    </>
  );
};
