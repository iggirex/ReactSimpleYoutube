import React, { Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: "" };
    }

    render() {
        return(
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    // Adding a method down here to reference THIS.PROPS.onSearchTermChange and
    // pass it the term
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;