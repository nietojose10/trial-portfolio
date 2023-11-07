import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';

export const Projects = () => {

    const projects = [
        {
            title: "E-commerce Platform",
            Description: "The aim of the platform is sell phones online.",
            imgUrl:projImg1,
        },
        {
            title: "E-commerce Platform",
            Description: "The aim of the platform is sell phones online.",
            imgUrl:projImg1,
        },
        {
            title: "E-commerce Platform",
            Description: "The aim of the platform is sell phones online.",
            imgUrl:projImg1,
        },
    ]

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Bibendum at varius vel pharetra vel turpis. Massa enim nec dui nunc mattis enim ut tellus elementum. Non blandit massa enim nec dui nunc mattis enim.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Row>
                            <Col>
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map( (project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project} />
                                                    )
                                                } )
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second"> Loren Ipsum</Tab.Pane>
                                    <Tab.Pane eventKey="third"> Loren Ipsum</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={ colorSharp2 } />
    </section>
  )
}
