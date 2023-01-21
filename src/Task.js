import React from 'react';
import {changePriority} from "./redux/actions";
import {connect} from "react-redux";

const Task = (props) => {
    return (
        <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {props.task.priority}
                        <button onClick={() => props.changePriority(props.task._id, (+props.task.priority + 1).toString())}>↑</button>
                        <button onClick={() => props.changePriority(props.task._id, (+props.task.priority - 1).toString())}>↓</button>
                    </li>
                    <li className="list-group-item">(props.task.status)</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <button>←</button>
                    <button>→</button>
                    <button>Update</button>
                    <button>Delete</button>
                </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    changePriority: (id, newPriority) => dispatch(changePriority(id, newPriority))
})
export default connect(null, mapDispatchToProps)(Task);