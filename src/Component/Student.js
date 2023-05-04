import React from "react";
import axios from "axios";
import StudentList from "./StudentList";
import { useState } from "react";
import AddStudent from "./AddStudent";
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import AddTeacher from "./AddTeacher";

const Student = () =>{

    const [data,setData] = useState([]);

    const [open, setOpen] = React.useState(false);
    
    const [openTeacher, setOpenTeacher] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    const saveStudent = (element) => {
        console.log(element);
        setOpen(false);

      };

      const handleClickOpenTeacher = () => {
        setOpenTeacher(true);
      };
      
      const handleCloseTeacher = () => {
        setOpenTeacher(false);
      };
  
      const saveTeacher = (element) => {
          console.log(element);
          setOpen(false);
  
        };

    const called=()=>{
        axios.get("http://localhost:8080/students").then(res=>{
        setData(res.data);
        console.log(data);
    });    
    }
return (
<div className="card">
    <div className="d-sm-inline-flex">
      <button className="btn btn-dark" onClick={called}>Fetch Student</button>
      <button className="btn btn-dark" onClick={handleClickOpen}>Add New Student</button>
      <button className="btn btn-dark" onClick={handleClickOpenTeacher}>Add New Teacher</button>
    </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           Add Student
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <AddStudent></AddStudent>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveStudent} color="primary">
           Save
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openTeacher} onClose={handleCloseTeacher}>
        <DialogTitle>
           Add Teacher
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <AddTeacher></AddTeacher>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveTeacher} color="primary">
           Save
          </Button>
          <Button onClick={handleCloseTeacher} color="primary" autoFocus>
           Close
          </Button>
        </DialogActions>
      </Dialog>
        {data.map((item) => (
            <StudentList key={item.id} item={item} />
        ))}
</div>
);
};

export default Student;