import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import {getWeatherHistory} from '../../store/thunks/historyThunks';
import HistoryTable from "../../components/HistoryTable";



class History extends React.Component {
    componentDidMount() {
        this.performWeatherHistoryRequest();
    }
    
    performWeatherHistoryRequest = () => {
        console.log('Loading user history');
        try {
            this.props.getWeatherHistory();
            return true;
        }
        catch (err) {
            console.log('weather history request fail!');
            throw err;
        }
    };
    
    render() {
        return (
            <Container>
                <h1 className={'justify-content-sm-center'} style={{width: '100%', display: 'flex'}}>User Queries</h1>
                <HistoryTable/>
            </Container>
        );
    }
}


export default connect(null, {getWeatherHistory})(History);