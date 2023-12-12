const List = ( { handleMouseOver, handleMouseOut, hover, deleted, submitTodo, handleNewTodo, value, handleChecked } ) => {
    return (
        <div>
            <form onSubmit={submitTodo} className="form_border">
                <input type="checkbox" onChange={handleChecked} className="chec"/>
                <input type="text" value={value} onChange={handleNewTodo} className="input-text"/>
                {<button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} type="submit" className="delete">{deleted}</button>}
            </form>
        </div>
    )
}

export default List;