import React from 'react';
import ryu from '../assets/images/blue.png';
import ert from '../assets/images/77.png';
import rte from '../assets/images/2.png';
import tre from '../assets/images/3.png';
import ree from '../assets/images/4.png';
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, image: ert, title: "Donation responsive website", categories: ["UX design", "Web design", "Case study"] },
    { id: 2, image: rte, title: "Xplore App", categories: ["UX/UI design", "Mobile App"] },
    { id: 3, image: tre, title: "Via Rental Brand", categories: ["Brand design", "Logo", "Graphic design"] },
    { id: 4, image: ree, title: "Mobile App", categories: ["UX/UI design", "Mobile App"] }
];

const CardPortfolio = () => {
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="col-md-6 mb-3">
                    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="card" style={{ borderRadius: '22px', border: 'none', backgroundColor: '#FFE9D9' }}>
                            <img src={project.image} className="card-img-top" alt={project.title} style={{ borderRadius: '22px' }} />
                            <div className="card-body">
                                <div className="d-flex mb-5">
                                    {project.categories.map((category, index) => (
                                        <span key={index} className="text-muted" style={{ fontSize: '14px', border: '1px solid #000000', borderRadius: '15px', padding: '4px', marginLeft: index > 0 ? '8px' : '0' }}>{category}</span>
                                    ))}
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="card-title" style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
                                    <img src={ryu} className="card-img-top" alt="icon" style={{ height: "20px", width: "20px" }} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default CardPortfolio;
