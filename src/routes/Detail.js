import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        if (location.state === undefined) {
            history.push("/");

        }
    }
    render() {
        const {location} = this.props;

        if (location.state) {
            return <div className="detail__poster">
                <img src={location.state.poster} alt={location.state.title}/>
                <div className="detail__date">
                    <h3 className="detail__title">{location.state.title}</h3>
                    <h5 className="detail__year">{location.state.year}</h5>
                    <ul>
                        {
                            location
                                .state
                                .genres
                                .map((genre, index) => (<li key={index}>{genre}</li>))
                        }
                        <p className="detail__summary">{location.state.summary}</p>
                    </ul>
                </div>
            </div>
        } else {
            return null;
        }

    }
}

export default Detail;