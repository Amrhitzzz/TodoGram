import React, { useState } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";
import Todo from "./Todo";
import CompletedTask from "./CompletedTask";
import moment from "moment"

export default function Home({ logout }) {
  const expireSession = () => logout();

  const [todoDescription, setTodoDescription] = useState("");
  
  const initialState = [{
    index: 0,
    description: "This is how your todo card is gonna be🔥",
    date: moment().format("lll"),
    isHearted: !1,
    isCompleted: !1,
    timestamp: Date.now(),
  }];

  const [todoItems, setTodoItems] = useState(initialState);
  const [completedItems, setCompletedItems] = useState([
    {
      index: Date.now(),
      description: "This is how your completed todo card is gonna be🔥",
      date: moment().format("lll"),
      isHearted: !1,
      isCompleted: 1,
      timestamp: Date.now(),
    }
  ])

  return (
    <div className="home">
      {/* title */}
      <div className="home-title">TodoGram</div>

      <div className="home-tabs">
        {/* left card screen  */}
        <div className="home-tabsLeft home-tabCard">
          <Todo todoItems={todoItems} setTodoItems={setTodoItems} completedItems={completedItems} setCompletedItems={setCompletedItems} todoDescription={todoDescription} setTodoDescription={setTodoDescription}/>
        </div>

        {/* right card screen */}
        <div className="home-tabsRight home-tabCard">
          <CompletedTask completedItems={completedItems} setCompletedItems={setCompletedItems}/>
        </div>
      </div>

      {/* footer */}
      <div className="home-footer">
        <Button onClick={() => expireSession()}>
          <NoMeetingRoomIcon /> Logout
        </Button>
        <div>Copyright &copy; CodewithSudeep 2020. All Rights Reserved</div>
      </div>
    </div>
  );
}
