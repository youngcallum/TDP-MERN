import {Link} from 'react-router-dom';

const Nav= () => {
    return(
        <>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Shop'>Shop</Link>
        </>
    );
};
export default Nav;