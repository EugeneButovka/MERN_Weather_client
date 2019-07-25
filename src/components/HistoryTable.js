import React from 'react';
import {
    Table,
    //Button
} from 'reactstrap';
import {connect} from 'react-redux';
import {Link, withRouter} from "react-router-dom";
import styled from 'styled-components';

const DivFixedStyled = styled.div`
    position: relative;
    height: 50vh;
    overflow: auto;
    display: block;
`;


class WeatherHistoryTableNoRouter extends React.Component {
    weatherRecordsToArray = (weatherRecords) => {
        let arr = [];
        
        //console.log(weatherRecords);
        
        if (weatherRecords !== {})
            for (let currData of weatherRecords) {
                let arrRow = [];
                arrRow.push(currData.weatherList.city.name);
                
                let date = new Date();
                date.setTime(Date.parse(currData.request_date));
                arrRow.push(date.toLocaleString());
                
                arrRow.push(currData._id);
                
                arr.push(arrRow);
                arrRow = [];
            }
        return arr;
    };
    
    // redirectToId = (_id) => {
    //     this.props.history.push(`/historyDetails/${_id}`);
    // };
    
    
    renderButtonLink(_id) {
        return (
            <Link to={`/historyDetails/${_id}`}> >> </Link>
        );
        // return (
        //     <Button
        //         className={"remove-btn"}
        //         color={"primary"}
        //         size={"sm"}
        //         onClick={this.redirectToId.bind(this, _id)}
        //         block
        //     >
        //         >>
        //     </Button>
        // );
    };
    
    
    renderWeatherHistoryTable() {
        if (this.props.isLoading || !this.props.requestCompleted)
            return <div>Loading history...</div>;
        
        if (this.props.error)
            return <div>Error! {this.props.error}</div>;
        
        let weatherHistoryArray = this.weatherRecordsToArray(this.props.weatherRecords);
        
        return (
            <DivFixedStyled>
                <Table dark responsive>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>City</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {weatherHistoryArray.map((rowElement, i) => (
                        <tr key={i}>
                            {rowElement.map((cellElement, j) => {
                                if (j === 2) return <td key={j}>{this.renderButtonLink(cellElement)}</td>; //render link to details for each history record from _id in array
                                return <td key={j}>{cellElement}</td>
                            })}
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </DivFixedStyled>
        )
    };
    
    render() {
        return this.renderWeatherHistoryTable();
    }
}

const mapStateToProps = (state) => ({
    weatherRecords: state.historyStore.historyData,
    error: state.historyStore.error,
    isLoading: state.historyStore.isHistoryLoading,
    requestCompleted: state.historyStore.requestCompleted,
});

const HistoryTable = withRouter(WeatherHistoryTableNoRouter);

export default connect(mapStateToProps)(HistoryTable);