import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card"

//THIS PROVIDES THE STYLING

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;


export default function List ({ title, tasks, id }) {

  return (
    <>
    <Container className="column">
    <Title
        style={{
          backgroundColor: "orange",
          position: "stick",
        }}
      >
        {title}
      </Title>

      <Droppable droppableId={id}>
      {(provided, snapshot) => (
      <TaskList
      ref={provided.innerRef}
      {...provided.droppableProps}
      isDraggingOver={snapshot.isDraggingOver}
   >
{tasks.map((task, index) => (
              <Card key={index} index={index} task={task} />
            ))}      
        {provided.placeholder}
      </TaskList>
      )}
      </Droppable>

    </Container>
    </>
  )  
  };
  
