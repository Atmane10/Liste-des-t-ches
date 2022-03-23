import React from "react";

const Form = () => {
    const inputTextHandler = (e) => {

    }
    return(
        <form>
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
            <option value="all">Tous</option>
            <option value="completed">Tâche réalisé</option>
            <option value="uncompleted">Tâche à réalisé</option>
            </select>
        </div>
        </form>
    );

};

export default Form;