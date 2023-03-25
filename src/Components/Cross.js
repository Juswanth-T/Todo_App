import React from "react";


export default (props) =>
    <div style={{ display: "flex" }} className="Cross1" >
        <div className={(props.todo.complete) ? "Cross2" : ""}
            onClick={props.toggleComplete}
        >
            {props.todo.text}

            <button className=" Finished App1 " >Finished
            </button>

        </div>

        {
            <button onClick={props.onDelete} className="Finished Finished1" >X
            </button>}
    </div>;






