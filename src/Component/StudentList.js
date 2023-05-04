import { React } from "react";

export const StudentList = ({item})=>{

    const total = (item.marks[0].total+
        item.marks[1].total+
        item.marks[2].total+
        item.marks[3].total);

    return(
    <div className="card reverse">
        <table className="d-sm-table">
            <th>Name</th>
            <th>divison</th>
            <th>Class</th>
            <th>Contact number</th>
            <th>Address</th>
            <th>{item.marks[0].subject} Marks</th>
            <th>{item.marks[1].subject} Marks</th>
            <th>{item.marks[2].subject} Marks</th>
            <th>{item.marks[3].subject} Marks</th>
            <th>Total Marks</th>
            <tr className="d-sm-table-row">
            <td>{item.name}</td>
            <td>{item.division}</td>
            <td>{item.classNumber}</td>
            <td>{item.contactNumber}</td>
            <td>{item.address}</td>
            <td>{item.marks[0].total}</td>
            <td>{item.marks[1].total}</td>
            <td>{item.marks[2].total}</td>
            <td>{item.marks[3].total}</td>
            <td>
            {total}
            </td>
            </tr>
        </table>
        
    </div>);
} 

export default StudentList;