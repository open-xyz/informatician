import React, { useEffect, useState } from 'react';
import ContCard from './ContCard';
import './Contributor.css';

const Contributors = () => {
    const [contributors, setContributors] = useState([]);

    const fetchContributors = async () => {
        const url = 'https://api.github.com/repos/rohansx/informatician/contributors?per_page=100';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const contributorsData = await response.json();
                const contributorsDataFiltered = contributorsData.filter(
                    (contributor) => !contributor.login.includes('dependabot[bot]')
                );
                setContributors(contributorsDataFiltered);
            } else {
                console.error('Failed to fetch contributors:', response.status);
            }
        } catch (error) {
            console.error('Error fetching contributors:', error);
        }
    };

    useEffect(() => {
        fetchContributors();
    }, []);

    return (
        <>
            <h1 className='heading'>Meet Our Contributors</h1>
            <div className='con_container'>
                {contributors.map((contributor) => (
                    <ContCard
                        key={contributor.id}
                        image={contributor.avatar_url}
                        title={contributor.login}
                        commits={contributor.contributions}
                        profile={contributor.html_url}
                    />
                ))}
            </div>
        </>
    );
};

export default Contributors;
