
import { Link } from 'react-router-dom';
import video from '../assets/video/vd1.mp4'
import '../App.css'

const Thirdsec = () => {
  return (
    <>
    <div className="thirdsec">
      Watch Our Video to Get Started on Your Marketing Strategy!
    </div>
    <div className='bg-big-img-1'>
        <h1>Why You Need a Comprehensive Marketing Strategy</h1>
         <h4>Throwing Mud on the Wall to See What Sticks is NOT a Strategy - <br /> It's a Waste of Time and Money! </h4>
            <p>Watch our video to learn how a comprehensive online marketing strategy that includes leading-edge web design, <br /> SEO, online advertising, content marketing, email marketing and social media <br /> marketing can produce outstanding results and an impressive return on investment!</p>
            <div className='video-wrapper'>
                <iframe 
                width="100%" 
                height="100%" 
                src={video}
                title="Marketing Strategy Video" 
                frameBorder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <div className='consultation-section gap-3'>
                {/* <div className='grid-3-boxes'>
                    <div className='box'>
                    <h2>Schedule a Free Consultation</h2>
                    </div>
                    <div className='box'>
                    <h2>Tell Us Your Goals</h2>
                    </div>
                    <div className='box'>
                    <h2>Get a Free Proposal</h2>
                    </div>
                </div> */}

                <h3><strong>Our process is simple and hassle-free!</strong></h3>
                <p>
                    Simply contact us to schedule your free, no-obligation consultation.<br /><br />
                    We'll meet with you online or at one of our three offices. You'll tell us your goals, we'll ask lots of questions, and then we'll create a free, no-obligation proposal to meet your goals.<br /><br />
                    It's that easy. Ready to get started?
                </p>
                <Link to="/contact"><button>GET STARTED</button></Link>
            </div>
    </div>
            <div className="thirdsec">
                Let's Talk!
            </div>
    </>
  );
};

export default Thirdsec;
