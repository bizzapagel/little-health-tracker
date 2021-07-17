import React, {Component} from 'react';

const List = ({todos}) => {
  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo" key={todo.id}>
          <p>{todo.title}</p>
        </div>
      )
    })
  ) : (
    <p>Dong</p>
  )

  return (
    <div className="list">
      {list}
    </div>
  );
}
 
export default List;