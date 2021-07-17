import React, {Component} from 'react';

class Main extends Component {
  state = {

  }

  render() { 
    const {allPosts} = this.props;
    const allPostsList = allPosts.map(post => {
      return (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>&nbsp;</p>
        </div>
      )
    })

    return (
      <div className="main">
        
        {allPostsList}

      </div>
    );
  }
}
 
export default Main;
