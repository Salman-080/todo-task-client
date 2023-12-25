import { useContext, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { AuthContext } from "../../../Provider/Provider";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Task from "./Task";

const TaskContainer = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 400px;
  height: 500px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  
  border: 1px solid gray;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Box = ({ taskTitle, taskProgress, id }) => {

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosPrivate();




    return (

        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                    <TaskContainer className=" ">
                        <div className="bg-blue-400 p-2 text-center" >
                            {taskTitle}
                        </div>

                        {
                            taskProgress?.map((task, idx) => <Task eachTask={task} key={idx} index={idx}></Task>)
                        }
                        {provided.placeholder}
                        </TaskContainer >
                </TaskList>
            )}
            
        </Droppable>
                      
    );
};

export default Box;