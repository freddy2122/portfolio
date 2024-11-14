import React, { useState, useRef, useEffect } from 'react';
import ryu from '../assets/images/blue.png';
import ert from '../assets/images/77.png';
import rte from '../assets/images/2.png';
import tre from '../assets/images/3.png';
import ree from '../assets/images/4.png';
import fil from '../assets/images/filter.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Projects = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust this to show more or fewer items per page
  const filterRef = useRef(null);

  const projects = [
    { image: ert, title: "Donation responsive website", categories: ["UX design", "Web design", "Case study"] },
    { image: rte, title: "Xplore App", categories: ["UX/UI design", "Mobile App"] },
    { image: tre, title: "Via Rental Brand", categories: ["Brand design", "Logo", "Graphic design"] },
    { image: ree, title: "Mobile App", categories: ["UX/UI design", "Mobile App"] }
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleFilterToggle = () => {
    setShowFilter((prev) => !prev);
  };

  // Hide filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate current projects to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="container pt-3 mt-5 mb-4">
        <p style={{ fontFamily: "'Syne ', sans-serif", color: '#FFB646' }}>Portfolio</p>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="fw-bold lh-1 mb-3" style={{ fontFamily: "'Syne ', sans-serif", color: '#095D89' }}>
            <span style={{
              display: 'inline-block',
              width: '30px',
              height: '30px',
              backgroundColor: '#FFB646',
              borderRadius: '50%',
              textAlign: 'center',
            }}>M</span>y recent works
          </h1>
          <button className="btn" onClick={handleFilterToggle}>
            <img src={fil} className="card-img-top" alt="Filter" style={{ height: '45px' }} />
          </button>
        </div>

        {/* Filter Palette */}
        {showFilter && (
          <div ref={filterRef} className="filter-palette" style={{
            position: 'absolute',
            top: '80px',
            right: '20px',
            backgroundColor: '#FFF',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#095D89' }}>Filter by Category</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li style={{ cursor: 'pointer', marginBottom: '8px' }}>UX design</li>
              <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Web design</li>
              <li style={{ cursor: 'pointer', marginBottom: '8px' }}>UX/UI design</li>
              <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Mobile App</li>
              <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Graphic design</li>
            </ul>
          </div>
        )}

        <div className="row">
          {currentProjects.map((project, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card" style={{ borderRadius: '22px', border: 'none' }}>
                <img src={project.image} className="card-img-top" alt="..." style={{ borderRadius: '22px' }} />
                <div className="card-body">
                  <div className="d-flex mb-5">
                    {project.categories.map((category, idx) => (
                      <span key={idx} className="text-muted" style={{ fontSize: '14px', border: '1px solid #000000', borderRadius: '15px', padding: '4px', marginLeft: idx > 0 ? '8px' : '0' }}>{category}</span>
                    ))}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="card-title" style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
                    <Link to="#" className=""><img src={ryu} className="card-img-top" alt="..." /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center my-4">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handlePageChange(pageIndex + 1)}
              className={`btn ${currentPage === pageIndex + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
              style={{ margin: '0 5px' }}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
