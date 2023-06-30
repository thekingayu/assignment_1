
const TodoList = () =>{
    return (
        <div>
        <form className="mt-5">
            <input placeholder="Search Tasks..."></input>
            <button>Search</button>
        </form>
        <form>
            <button className="btn btn-primary">Completed</button>
            <button className="btn btn-primary">Delete</button>
        </form>
        <div class="grid grid-cols-4 gap-4 font-bold mb-10">
            <div className="">Get up at 5AM</div>
            <div>Go to gym</div>
        </div>
        </div>

    )
}

export default TodoList;