import React, {Component} from 'react';

const List = ({todos}) => {
  // const list = todos.length ? (
  //   todos.map(todo => {
  //     return (
  //       <div className="todo" key={todo.id}>
  //         <p>{todo.title}</p>
  //       </div>
  //     )
  //   })
  // ) : (
  //   <p>You have nothing to do.</p>
  // )

  return (
    <div className="list">
      <p>You have nothing to do.</p>
    </div>
  );
}
 
export default List;
