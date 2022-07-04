import { Link } from 'react-router-dom';
import { HeaderNav, HeaderRoot, LinkList } from './Header.styles';

export function Header() {
  return (
    <HeaderRoot>
      <HeaderNav as="nav">
        <div className="logo">
          <Link to="/">REACT-GAMRARY</Link>
        </div>
        <LinkList>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/genres">Genres</Link>
          </li>
        </LinkList>
      </HeaderNav>
    </HeaderRoot>
  );
}
