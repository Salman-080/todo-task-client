import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Task from "../Components/EachTask/Task";
import Box from "../Components/EachTask/Box";
import useTaskDatas from "../../Hooks/useTaskDatas";

const DashboardHome = () => {

  

    const [allTasks, todo, inProgress, finished, handleDragging]=useTaskDatas();
    // console.log(todo)
 
    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <DragDropContext onDragEnd={handleDragging}>
                    <h2 className="text-center text-2xl font-bold">Task Customization</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Box taskTitle="To Do" taskProgress={todo} idm={"a"}></Box>
                        <Box taskTitle="In Progress" taskProgress={inProgress} idm={"b"}></Box>
                        <Box taskTitle="Completed" taskProgress={finished} idm={"c"}></Box>
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};

export default DashboardHome;