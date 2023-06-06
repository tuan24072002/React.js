import DestinationData from './DestinationData';
import './DestinationStyle.scss';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/5.jpg';
import img4 from '../assets/images/8.jpg';
import React from 'react';
class Destination extends React.Component {
    render() {
        return (
            <div className='destination' >
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>
                <DestinationData className="first-des" heading="Taal Volcano, Batangas" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." img1={img1} img2={img2} />
                <DestinationData className="first-des-reverse" heading="Mt. Daguldul, Batangas" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." img1={img3} img2={img4} />
            </div>
        );
    }
}
export default Destination;