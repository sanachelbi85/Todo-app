import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../js/TodoSlice';
 

function AddTodo() {
   const dispatch = useDispatch();
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [task, setTask] = useState({
        id: Math.random(),
        title:"",
        description:"",
        isDone: "false"
      })
     
return (
  <div>
    <Button className='btn-add' style={{ backgroundColor: "white",
  color: "black", border: "2px solid #a0af4c"}} onClick={handleShow}>
     Add-Task
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Title:<input type="text" placeholder="enter title" onChange={(e)=> {setTask({...task,title: e.target.value});}} /><br/>
        Description:<input type="text" placeholder="enter description" onChange={(e)=> {setTask({...task,description: e.target.value});}} />
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleClose}>
          Close
        </Button>
        <Button onClick={()=>{
          handleClose();
          dispatch(addTask(task))}}>Créer</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AddTodo