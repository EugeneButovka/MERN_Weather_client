import React from 'react';
import {
    Table
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DivFixedStyled = styled.div`
    position: relative;
    height: 50vh;
    overflow: auto;
    display: block;
`;


class WeatherTable extends React.Component {
    weatherDataToArray = (weatherData) => {
        let arr = [];
        let arrRow = [];
        
        if ('list' in weatherData)
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
    
    
    render() {
        let weatherArray = this.weatherDataToArray(this.props.weatherData);
        
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
    }
}

WeatherTable.propTypes = {
    weatherData: PropTypes.object.isRequired
};


export default WeatherTable;