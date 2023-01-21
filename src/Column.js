import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";



const Column = ({status, tasks}) => {


    return (
        <div className="col">
            <h2>{status.title.toUpperCase()}</h2>
            {tasks.filter(el => el.status === status.title)
                .map(el => <Task
                task={el}
                />)}
        </div>
    );
};
const mapStateToProps = state => ({
    tasks: state.tasks
})
export default connect(mapStateToProps)(Column);