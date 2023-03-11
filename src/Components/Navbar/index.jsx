import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import style from './style.module.scss'

const NetNavbar = () => {

    const [query, setQuery] = useState()

    const navigate = useNavigate();

    const handleChange = (e) => {
        setQuery(e.target.value)
        // return navigate(`/search/${query}`)

        // console.log(query)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return navigate(`/search/${query}`)
    }

    return (
        <Navbar className={style['NetNavbar']} expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img src="/images/logo.png" alt="logo" className={style['logo']} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/' className={style['nav-hyperlinks']}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/tv' className={style['nav-hyperlinks']}>TV Shows</Nav.Link>
                        <Nav.Link as={Link} to='/movie' className={style['nav-hyperlinks']}>
                            Movies
                        </Nav.Link>
                        <Nav.Link href="#" className={style['nav-hyperlinks']} disabled >
                            Recently Added
                        </Nav.Link>
                        <Nav.Link href="#" className={style['nav-hyperlinks']} disabled >
                            My List
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}
                        />
                        <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                    </Form>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className={style['nav-icon']} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NetNavbar;
