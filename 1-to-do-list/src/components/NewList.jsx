const NewList = ( { handleMouseOver, handleMouseOut, hover, deleted, submitTodo, handleNewTodo, handleChecked } ) => {
    return (
        <div>
            <form onSubmit={submitTodo} className="form_border">
                <input type="checkbox" onChange={handleChecked} className="chec"/>
                <input type="text" onChange={handleNewTodo} className="input-text"/>
                {<button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="submit" className="delete">{deleted}</button>}
            </form>
        </div>
    )
}

export default NewList;