import './DestinationStyle.scss';
import React from 'react';


class DestinationData extends React.Component {
    render() {
        return (
            <div className='destination' >
                <div className={this.props.className}>
                    <div className='des-text'>
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                    <div className='image'>
                        <img alt='img' src={this.props.img1} />
                        <img alt='img' src={this.props.img2} />
                    </div>
                </div>
            </div>
        );
    }
}
export default DestinationData;