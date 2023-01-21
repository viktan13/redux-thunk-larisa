import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {getStatuses, getTasks} from "./redux/actions";
import {connect} from "react-redux";
import {useEffect} from "react";
import Column from "./Column";

function App(props) {

    useEffect(() => {
        props.getStatuses();
        props.getTasks();
    }, [])

    console.log(props.statuses);

    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <div className="container text-center">
                <div className="row align-items-start">
                    {props.statuses.map(el => <Column
                        status={el}
                        key={el._id}
                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    statuses: state.statuses,
})
const mapDispatchToProps = dispatch => ({
    getStatuses: () => dispatch(getStatuses()),
    getTasks: () => dispatch(getTasks())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
