import React from 'react';

const List = ({todos, deleteTodo}) => {

  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <p onClick={() => {deleteTodo(todo.id)}}>{todo.title}</p>
        </div>
      )
    })
  ) : (
    <div className="collection-item">
      <p>You have nothing to do.</p>
    </div>
  )

  return (
    <div className="collection">
      {list}
    </div>
  );
}

export default List;