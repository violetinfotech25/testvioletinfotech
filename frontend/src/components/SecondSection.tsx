// import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Image4 from '../assets/image/home/image-4.png';

const SecondSection = () => {
    return (
        <>
         <div className='Secondsec'>
            <div>GET FOUND &nbsp; <img src="https://cdn-icons-png.flaticon.com/128/724/724843.png" width={30} alt="" /></div>
            <div>IMPRESS &nbsp; <img src="https://cdn-icons-png.flaticon.com/128/724/724843.png" width={30} alt="" /></div>
            <div>ENGAGE &nbsp; <img src="https://cdn-icons-png.flaticon.com/128/724/724843.png" width={30} alt="" /></div>
            <div>CONVERT! &nbsp; <img src="https://cdn-icons-png.flaticon.com/128/724/724843.png" width={30} alt="" /></div>
        </div>
         <div className='double-flex'>
            <div className='firstone-flex'>
                <h1>Get Found, Impress Your Viewers, <br /> Engage Your Leads, <br /> and Convert Them Into Customers!</h1>
                <img src={Image4} alt="Vision" />
                <p>“Your messaging and content marketing strategy keeps proving itself year after year. <br /> Instead of cold calling, our efforts are now focused on following up on the multiple high-quality <br /> website leads we receive weekly!  The return on investment has been outstanding.”</p>
            </div>
            <div className='secondone-flex'>
                <h1>Our Mission is to Help <br /> You Grow Your Business!</h1>
                 <p style={{textAlign: 'left'}}>Our Comprehensive Internet Marketing and Web Design Strategy is carefully designed to <br/> deliver profit-boosting results on multiple levels. In today’s digital marketplace, a website is<br /> no longer just an online presence but the core identity of any business. That is why we combine visually appealing, next-generation website design with seamless functionality and user-friendly <br />experiences that leave a lasting impression.Every design we create is responsive, mobile-friendly,<br />  and built to communicate your brand message with clarity and impact, ensuring that your audience connects with your business instantly.</p> <br />
                 <p style={{textAlign: 'left'}}>But great design alone is not enough. To truly drive results, we integrate a well-crafted brand message with powerful online marketing strategies that position your business ahead of the competition. From SEO and content marketing to targeted ads, social media campaigns, and email outreach, we leverage the latest tools and technologies to ensure your business reaches the right people at the right time. Every element of your digital strategy is backed by data-driven insights, which means we don’t just create campaigns — we monitor, analyze, and optimize them for consistent, measurable growth.</p> <br />
                 <p style={{textAlign: 'left'}}>The result of this combined approach is more than just website traffic — it is genuine engagement that brings you new, well-qualified leads ready to do business with you. Our strategies are designed to turn visitors into customers and customers into loyal brand advocates, fueling long-term profitability for your company. With our expertise, your business doesn’t just grow online; it thrives, expands its reach, and establishes itself as a trusted leader in the digital space.</p>
                 
                <Link to="/contact"><button>Get in Touch</button></Link>
            </div>
        </div>
        <div className='bg-big-img'>
             <p>We Serve the Greater Berks County, Lehigh Valley, Philadelphia, Delaware and New Jersey Region From Offices in Reading, Allentown, and Malvern.
                See Footer for Extended Service Area.</p>
             <span className='span-bg-text'>
                What's Your Internet Marketing Strategy? A smart digital marketing strategy typically includes most or all of these elements:
            </span>
            <div className='six-grid-img'>
                <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/10/animation.png?fit=1200%2C600&ssl=1" alt="Image 1" />
                <img src="https://img.freepik.com/free-vector/seo-concept-illustration_114360-5766.jpg" alt="Image 2" />
                <img src="https://img.freepik.com/premium-vector/digital-marketing-strategy-campaign_18660-3175.jpghttps://img.freepik.com/premium-vector/analyst-startup-business-campaign-targets_999616-522.jpg?semt=ais_hybrid&w=740" alt="Image 3" />
                <img src="https://allbusinesstoolkit.com/wp-content/uploads/2019/01/Content-Marketing.png" alt="Image 4" />
                <img src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg" alt="Image 5" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMHE1yRxp26E8eyk4tdNB9axw5ETsKDlyIq86fRAh3hWZ6S-wUXqiSGy2U6xWp3Nij1w&usqp=CAU" alt="Image 6" />
            </div>
        </div>
        </>
    );
};

export default SecondSection;
