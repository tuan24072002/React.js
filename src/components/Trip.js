import React from 'react';
import './TripStyle.scss';
import TripData from './TripData';
import trip1 from '../assets/images/5.jpg';
import trip2 from '../assets/images/8.jpg';
import trip3 from '../assets/images/6.jpg';
class Trip extends React.Component {
    render() {
        return (
            <div className='trip'>
                <h1>Recent Trips</h1>
                <p>You can discover unique destinations using Google Maps.</p>
                <div className='tripCard'>
                    <TripData
                        image={trip1}
                        heading="Trip in Indonesia"
                        text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                    />
                    <TripData
                        image={trip2}
                        heading="Trip in Malaysia"
                        text='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                    />
                    <TripData
                        image={trip3}
                        heading="Trip in France"
                        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    />
                </div>
            </div>
        );
    }
}
export default Trip;