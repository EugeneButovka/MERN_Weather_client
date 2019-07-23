import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import {
    Container,
    Table,
} from 'reactstrap';
import {connect} from 'react-redux';
import {getWeather} from '../../store/thunks/weatherThunks';
import styled from 'styled-components';

const DivFixedStyled = styled.div`
    position: relative;
    height: 50vh;
    overflow: auto;
    display: block;
`;


class Main extends React.Component {
    performWeatherRequest = (place) => {
        console.log('Place is set to: ', place);
        try {
            const lat = place.geometry.location.lat();
            const long = place.geometry.location.lng();
            console.log("coords: " + lat + ", " + long);
            this.props.getWeather(lat, long);
            return true;
        }
        catch (err) {
            console.log('weather request fail!');
            throw err;
        }
    };
    
    weatherDataToArray = (weatherData) => {
        let arr = [];
        let arrRow = [];
        
        for (let currData of weatherData.list) {
            arrRow.push(this.getDateTimeStringFromUnixUTC(currData.dt));
            arrRow.push(currData.main.temp);
            arrRow.push(currData.weather[0].main);
            arr.push(arrRow);
            arrRow = [];
        }
        return arr;
    };
    
    getDateTimeStringFromUnixUTC = (dateUnixUTC) => {
        let date = new Date(parseInt(dateUnixUTC) * 1000);
        let standardFormatTime = `${date.getHours()}:${date.getMinutes().toString().length < 2 ? "0" + date.getMinutes().toString() : date.getMinutes().toString()}`;
        let standardFormatDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        
        return `${standardFormatDate} ${standardFormatTime}`;
    };
    
    
    renderWeatherTable = () => {
        if (this.props.weather.isLoading)
            return <div>Loading weather...</div>;
        
        if (this.props.weather.error)
            return <div>Error! {this.props.weather.error}</div>;
        
        if (!this.props.weather.requestCompleted)
            return <div>Go make some request</div>;
        
        
        let weatherArray = this.weatherDataToArray(this.props.weather.weatherData);
        
        return (
            <DivFixedStyled>
                <Table dark bordered responsive>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature,&#x2103;</th>
                        <th>Weather Condition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {weatherArray.map((rowElement, i) => (
                        <tr key={i}>
                            {rowElement.map((cellElement, j) => (
                                <td key={j}>
                                    {cellElement}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </DivFixedStyled>
        )
    };
    
    render() {
        return (
            <Container>
                <h1 className={'justify-content-sm-center'} style={{width: '100%', display: 'flex'}}>Weather
                    forecast</h1>
                <Autocomplete
                    style={{width: '100%', marginBottom: '2rem', marginTop: '1rem'}}
                    onPlaceSelected={(place) => {
                        this.performWeatherRequest(place)
                    }}
                    types={['(regions)']}
                    componentRestrictions={{country: "ru"}}
                />
                {this.renderWeatherTable()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    weather: state.weatherStore
});

export default connect(mapStateToProps, {getWeather})(Main);