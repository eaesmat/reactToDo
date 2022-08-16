import PropTypes from 'prop-types';
const TodoForm = ({handleSubmit, handleChange, todo, error}) => {

    return (
      <>
      <h1 className='h2 text-center fw-bold'>Add Todo</h1>
        <form className='my-4' onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white" id="basic-addon1"><i className="fa-solid fa-book"></i></span>
          </div>
          <input type="text" className="form-control" 
          name='todo' onChange={handleChange}
          value={todo}
          placeholder="Add new todo" aria-label="Username" aria-describedby="basic-addon1"/>
        </div> 
          <p className={error ===''?'d-none':'text-danger text-center'}>{error}</p>
          <button className='btn btn-primary form-control'>add todo</button>
        </form>
      </>
    )

}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
};

TodoForm.propTypes = {
  handleChange: PropTypes.func,
};

TodoForm.propTypes = {
  error: PropTypes.string,
};

TodoForm.propTypes = {
  todo: PropTypes.string,
};

export default TodoForm;