import { useState } from "react";
import axios from "axios";

export const AddStudent = () =>{
    const [name, setName] = useState('');

const studentValues=(event)=>{
    
    event.preventDefault();
    var studentObject = {
        name : event.target[0].value,
        classNumber:event.target[1].value,
    division:event.target[2].value,
    contactNumber:event.target[3].value,
    address:event.target[4].value,
    marks:
    [
        {
           subject:event.target[6].value,
           internal:10,
           theory:60,
           practical:10
        },
        {
           subject:"Chemistry",
           internal:10,
           theory:70,
           practical:10
        },
        {
           subject:"Physics",
           internal:9,
           theory:66,
           practical:10
        },
        {
           subject:"English",
           internal:10,
           theory:80,
           practical:10
        }
    ]
    }

    console.log(studentObject);
        axios.post("http://localhost:8080/student",studentObject).then(res=>{
        //setData(res.data);
        console.log(res.data);
    });
}
    return (
    <form onSubmit={studentValues}>
        <div className="container">
            <div class="row">
                <div class="col-2">Name
                </div>
                 <div class="col-4">
                 <input class="form-control" type="text"  value={name}
          onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
                </div>
                <div class="col-2">
                  Class
                </div>
                <div class="col-4">
                <div class="form-group">
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
  </div>
                </div>
            </div>

            <div class="row">
                
            <div class="col-2">Division</div>
                <div class="col-4">
                <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
                </div>
            <div class="col-2">Contact Numer </div>
            <div class="col-4"><input class="form-control" type="text" placeholder="+91-9867566767"/></div>
            </div>
            <div className="row">
                <div className="col-2">
                    Address
                </div>
                <div class="col-9"><input class="form-control" type="text" placeholder="Address"/></div>
            </div>
            <div className="row">
                <div className="col-2">
                    Marks
                </div>
                <div className="col">
                <input min="0" max="80" type="number" id="typeNumber" class="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    Subject
                </div>
                <div className="col">
                <select class="form-control" id="exampleFormControlSelect1">
                        <option>Maths</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>English</option>
                    </select>
                {/* <input min="0" max="80" type="number" id="typeNumber" class="form-control" /> */}
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    Theory
                </div>
            </div>
        </div>
        <input type="submit" />
</form>

    );
};
export default AddStudent;