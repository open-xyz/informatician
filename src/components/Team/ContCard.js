import React from 'react';
import './Contributor.css';
const ContCard = (props) => {
  var x = '';
  const { image, title, commits, profile} = props;
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
        className='card' onClick={() => openContributorProfile(profile)}>
        <img className='profile' src={`https://images.weserv.nl/?output=webp&url=${image}`} alt={title} />
        <div className='content'>
          <h1 className='text'>{title}</h1>
          <p>
            {commits} {x}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContCard;