import React from 'react';
import './Contributor.css';

const ContCard = (props) => {
  var x = '';
  const { image, title, commits, profile } = props;
  if (commits === 1) {
    var x = 'commit';
  } else {
    var x = 'commits';
  }

  const openContributorProfile = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        className='card' style={{ border: props.theme === "dark" ? '2px solid white' : '2px solid black' }}>
        <img className='profile' src={`https://images.weserv.nl/?output=webp&url=${image}`} alt={title} 
        style={{ border: props.theme === "dark" ? '2px solid white' : '2px solid black' }}
        />
        <div className='content'>
          <h1 className='text' style={{ color: props.theme === "dark" ? 'white' : '' }}>{title}</h1>
          <p style={{ color: props.theme === "dark" ? 'white' : '' }}>
            {commits} {x}
          </p>
        </div>
        <div>
          <button className='view_button' onClick={() => openContributorProfile(profile)} 
          style={{ border: props.theme === "dark" ? '2px solid white' : '2px solid black' , 
          color: props.theme === "dark" ? 'white' : ''
        }}
          >View</button>
        </div>
      </div>
    </>
  );
};

export default ContCard;