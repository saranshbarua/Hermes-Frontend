import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <ul className="app-list">
        <li>
          <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
          <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
        </li>
      </ul>
    );
  }
}

export default Home;
