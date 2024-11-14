
import React from 'react';
import { useParams } from 'react-router-dom';
import ert from '../assets/images/77.png';
import rte from '../assets/images/2.png';
import tre from '../assets/images/3.png';
import ree from '../assets/images/4.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projectData = {
    1: { title: "Donation responsive website", image: ert, description: "Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.", categories: ["UX design", "Web design", "Case study"] },
    2: { title: "Xplore App", image: rte, description: "Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.", categories: ["UX/UI design", "Mobile App"] },
    3: { title: "Via Rental Brand", image: tre, description: "Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.", categories: ["Brand design", "Logo", "Graphic design"] },
    4: { title: "Mobile App", image: ree, description: "Minimalism combined with elements of french typography and brutalism helped us to realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of a serious financial institutional client, and close collaboration.", categories: ["UX/UI design", "Mobile App"] },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <>
            <Header />
            <div className=""style={{ backgroundColor: "#FFE9D9" }}>

                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex align-items-center mb-3">
                                <span class="text-secondary">• Brand Design</span>
                                <span class="meta-info " style={{ color: "#FF9330", paddingLeft: '12px' }}>• 03 May 2019</span>
                            </div>


                            <h1 class="project-title" style={{ color: '#095D89', fontFamily: "'Syne', sans-serif" }}>Via Rental:<br />Brand Design</h1>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4 col-6 mb-3">
                                    <p class="info-title" style={{ color: '#080808' }}>Client</p>
                                    <h6 class="info-value" style={{ color: '#095D89' }}>Via Rental</h6>
                                </div>
                                <div class="col-md-4 col-6 mb-3">
                                    <p class="info-title" style={{ color: '#080808' }}>Category</p>
                                    <h6 class="info-value" style={{ color: '#095D89' }}>Graphic Design</h6>
                                </div>
                                <div class="col-md-4 col-6 mb-3">
                                    <p class="info-title" style={{ color: '#080808' }}>Tools</p>
                                    <h6 class="info-value" style={{ color: '#095D89' }}>Illustrator, Indesign, Photoshop</h6>
                                </div>
                                <div class="col-md-4 col-6 mb-3">
                                    <p class="info-title" style={{ color: '#080808' }}>Start Date</p>
                                    <h6 class="info-value" style={{ color: '#095D89' }}>09/07/2022</h6>

                                </div>
                                <div class="col-md-4 col-6 mb-3">
                                    <p class="info-title" style={{ color: '#080808' }}>End Date</p>
                                    <h6 class="info-value" style={{ color: '#095D89' }}>20/07/2024</h6>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="container pt-4">

                <img src={project.image} alt={project.title} style={{ borderRadius: '22px', width: '100%', maxHeight: '500px' }} />
                <h3 className='pt-4' style={{ color: '#095D89', fontFamily: "'Syne', sans-serif" }}>Overview</h3>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>{project.description}</p>
                <h3 className='pt-4' style={{ color: '#095D89', fontFamily: "'Syne', sans-serif" }}>Typography</h3>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>{project.description}</p>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <img src={project.image} className="card-img-top" alt={project.title} style={{ borderRadius: '22px' }} />
                    </div>
                    <div class="col-md-6 mb-3">
                        <img src={project.image} className="card-img-top" alt={project.title} style={{ borderRadius: '22px' }} />
                    </div>


                </div>
                <h3 className='pt-4' style={{ color: '#095D89', fontFamily: "'Syne', sans-serif" }}>Conclusion</h3>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy and paste overall hierachy.The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.</p>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetail;
