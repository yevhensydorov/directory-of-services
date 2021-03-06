import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Autosuggest from 'react-autosuggest';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import 'react-select/dist/react-select.css';
import helpers from '../../helpers';
import searchStyle from './searchStyle';
import './search.css';


const organisations = [
  { postCode: 'H2 1TH', address: 'Bermondsey' },
  { postCode: 'H2 2TH', address: '2 Bermondsey' },
  { postCode: 'H2 3TH', address: '3 Bermondsey' },
];
const days = [
  { day: 'Monday' },
  { day: 'Tuesday' },
  { day: 'Wednesday' },
  { day: 'Thursday' },
  { day: 'Friday' },
  { day: 'Saturday' },
  { day: 'Sunday' },
].map(day => ({
  value: day.day,
  label: day.day,
}));
const services = [
  { service: 'Destitution' },
  { service: 'Healthcare' },
  { service: 'Social and Other' },
  { service: 'Education' },
  { service: 'Housing' },
  { service: 'Trafficking' },
  { service: 'Benefits' },
  { service: 'Families' },
  { service: 'LGBTQI' },
  { service: 'Young People and Children' },
  { service: 'Employment' },
  { service: 'Immigration' },
  { service: 'Women' },
  { service: 'Debt' },
  { service: 'Gender Based Violence' },
  { service: 'Mental Health Services' },
].map(service => ({
  value: service.service,
  label: service.service,
}));


class Search extends React.Component {
  state = {
    postCode: '',
    service: null,
    suggestions: [],
  };


  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: helpers.getSuggestions(value, organisations),
    });
  };


  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };


  handlePostCodeChange = (event, { newValue }) => {
    this.setState({
      postCode: newValue,
    });
  };
  
  handleServiceChange = service => {
    this.setState({
      service,
    });
  };


  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className="org-search">
        <Grid item md={5} xs={12} className="post-code">
          <h4>
            <i className="material-icons">search</i>
          </h4>
          <Autosuggest
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
            }}
            className="post-code-suggesition"
            renderInputComponent={helpers.renderInput}
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
            renderSuggestionsContainer={helpers.renderSuggestionsContainer}
            getSuggestionValue={helpers.getSuggestionValue}
            renderSuggestion={helpers.renderSuggestion}
            inputProps={{
              classes,
              placeholder: 'Search Near',
              name: 'postCode',
              value: this.state.postCode,
              onChange: this.handlePostCodeChange,
            }}
          />
        </Grid>
        <Grid item md={4} xs={12} className="day">
          <h4>Day</h4>
          <Input
            fullWidth
            className="select-field-container day-small-screen"
            inputComponent={helpers.SelectWrapped}
            inputProps={{
              value: this.props.day,
              onChange: this.props.handleSelectedDay,
              placeholder: 'Select Day',
              instanceId: 'selectDay',
              id: 'selectday',
              name: 'day',
              simpleValue: true,
              options: days,
            }}
          />
        </Grid>
        <Grid item md={3} xs={12} className="service">
          <h4>Service</h4>
          <Input
            fullWidth
            className="select-field-container"
            inputComponent={helpers.SelectWrapped}
            inputProps={{
              classes,
              value: this.state.service,
              onChange: this.handleServiceChange,
              placeholder: 'Select Service',
              instanceId: 'selectService',
              id: 'selectService',
              name: 'service',
              simpleValue: true,
              options: services,
            }}
          />
        </Grid>
      </Grid>
    );
  }
}


Search.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(searchStyle.styles)(Search);
