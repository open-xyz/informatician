import React from 'react';
import './Benefits.css'; // Import the CSS file for styling
import img1 from '../../assets/benefits/benefit-1.webp'
import img2 from '../../assets/benefits/benefit-2.webp'
import img3 from '../../assets/benefits/benefit-3.webp'
import img4 from '../../assets/benefits/benefit-4.webp'
import img5 from '../../assets/benefits/benefit-5.webp'

function BenefitsOfReading(props) {
  return (
    <div className="benefits-container" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'black' : '#f6f6f6'}}>
      <div className="container">
        <h1 style={{fontWeight: 'bold', fontSize: 40, color: props.theme==='dark' ? 'white': '#333'}}>Benefits of Reading</h1>
        <p style={{color: props.theme==='dark' ? '#f5efef' : "#777"}}>Reading is a wonderful activity that offers numerous benefits to individuals of all ages. Whether you prefer fiction, non-fiction, or any other genre, here are some key advantages of reading:</p>

        <div className="benefit" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'rgb(22, 19, 19)' : '#f6f6f6'}}>
          <div className="benefit-content">
            <div className="benefit-image">
              <img loading='lazy' src={img1} alt="Knowledge Expansion" style={{height: 220, width: 400}}/>
            </div>
            <div className="benefit-details">
              <h2 style={{textAlign: 'center', color: props.theme==='dark' ? 'white' : '#333'}}>Knowledge Expansion</h2>
              <p>Reading exposes you to a wide range of information and ideas. It helps expand your knowledge on various subjects, whether it's history, science, philosophy, or any other topic of interest. The more you read, the more you learn.</p>
            </div>
          </div>
        </div>

        <div className="benefit" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'rgb(22, 19, 19)' : '#f6f6f6'}}>
          <div className="benefit-content">
            <div className="benefit-image">
              <img loading='lazy' src={img2} alt="Mental Stimulation" style={{height: 220, width: 400}}/>
            </div>
            <div className="benefit-details">
              <h2 style={{textAlign: 'center', color: props.theme==='dark' ? 'white' : '#333'}}>Mental Stimulation</h2>
              <p>Reading is like a workout for your brain. It stimulates your mind, improves concentration, and enhances critical thinking skills. It can also improve your vocabulary and language comprehension, making you a more effective communicator.</p>
            </div>
          </div>
        </div>
        <div className="benefit" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'rgb(22, 19, 19)' : '#f6f6f6'}}>
          <div className="benefit-content">
            <div className="benefit-image">
              <img loading='lazy' src={img3} alt="Mental Stimulation" style={{height: 220, width: 400}}/>
            </div>
            <div className="benefit-details">
              <h2 style={{textAlign: 'center', color: props.theme==='dark' ? 'white' : '#333'}}>Stress Reduction</h2>
              <p>Reading can be a great way to relax and unwind. It helps reduce stress by allowing you to escape into different worlds and narratives. Losing yourself in a good book can provide a much-needed break from the pressures of everyday life.</p>
            </div>
          </div>
        </div>
        <div className="benefit" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'rgb(22, 19, 19)' : '#f6f6f6'}}>
          <div className="benefit-content">
            <div className="benefit-image">
              <img loading='lazy' src={img4} alt="Mental Stimulation" style={{height: 220, width: 400}} />
            </div>
            <div className="benefit-details">
              <h2 style={{textAlign: 'center', color: props.theme==='dark' ? 'white' : '#333'}}>Improved Sleep</h2>
              <p>Engaging in reading before bedtime can promote better sleep. It helps relax your mind and prepares your body for rest. However, it's recommended to avoid stimulating content or electronic devices with bright screens that may interfere with sleep quality.</p>
            </div>
          </div>
        </div>
        <div className="benefit" style={{marginTop: 20, backgroundColor: props.theme==='dark'?'rgb(22, 19, 19)' : '#f6f6f6'}}>
          <div className="benefit-content">
            <div className="benefit-image">
              <img loading='lazy' src={img5} alt="Mental Stimulation" style={{height: 220, width: 400}}/>
            </div>
            <div className="benefit-details">
              <h2 style={{textAlign: 'center', color: props.theme==='dark' ? 'white' : '#333'}}>Personal Growth</h2>
              <p>Reading self-help books, biographies, or inspirational literature can foster personal growth. You can gain valuable insights, learn from others' experiences, and find motivation to overcome challenges in your own life.</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default BenefitsOfReading;
