import React from 'react'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import '../styles/autocomplete.scss'

class AutoComplete extends React.Component {
  state = {
    value: '',
    suggestions: []
  }

  componentWillMount() {
    this.onSuggestionsFetchRequested = debounce(
      50,
      this.onSuggestionsFetchRequested
    )
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion}</div>
      </div>
    )
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    axios({
        method: 'GET',
        url: 'http://localhost:5000/api/v1/employees/' + value,
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => { 
          console.log(response.data)
          const results = response.data
            this.setState({ suggestions: results })
         })
      }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  getSuggestionValue = (suggestion) => {
    this.props.setKeyValue("EmployeeName",suggestion)
    axios({
        method: 'GET',
        url: 'http://localhost:5000/api/v1/employee_log/' + suggestion,
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => { const status = response.data
        console.log("Status is :"+status)
        if(status === "True"){
       this.props.setToggleInOut(true)
    }
    else{ this.props.setToggleInOut(false) }
    })
    return suggestion
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Employee name..',
      value,
      onChange: this.onChange
    }

    return (
      <div className="App">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    )
  }
}
export default AutoComplete;