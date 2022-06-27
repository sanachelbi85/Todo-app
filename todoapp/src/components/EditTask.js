import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../js/TodoSlice';

const EditTask = ({id}) => {
    const dispatch = useDispatch();
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [edit, setEdit] = useState({
        title:"",
        description:"",
      });
  return (
    <div>
        <Button className='btn-add' style={{ backgroundColor: "white",
  color: "black", border: "2px solid #a0af4c"}} onClick={handleShow}>
     Edit-Task
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit-Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Title:<input type="text" placeholder="enter title" onChange={(e)=> {setEdit({...edit,title: e.target.value});}} /><br/>
        Description:<input type="text" placeholder="enter description" onChange={(e)=> {setEdit({...edit,description: e.target.value});}} />
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={handleClose}>
          Close
        </Button>
        <Button onClick={()=> {
            handleClose();
            dispatch(editTask({id : id, edit}))} }>Editer</Button>
      </Modal.Footer>
    </Modal> 
    </div>
  )
}

export default EditTask