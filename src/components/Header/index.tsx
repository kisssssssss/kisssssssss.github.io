import { Link } from 'react-router-dom';
import './index.css';

const index = () => {
  return (
    <div>
      <Link className="avatar-header mt-40" to="/">
        <a>
          <img className="avatar" src="/avatar.png" />
        </a>
        <div>
          <h1 className="name">KIS</h1>
        </div>
      </Link>
      <p className="py-40">
        <a
          className="link"
          target="_blank"
          href="https://github.com/kisssssssss"
        >
          GitHub
        </a>
        <span style={{ margin: 5 }}> · </span>
        <a
          className="link"
          target="_blank"
          href="https://docs.kisssssssss.space/"
        >
          Docs
        </a>
      </p>
    </div>
  );
};

export default index;
