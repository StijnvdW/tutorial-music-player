import React from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <Autocomplete
                    ref="autocomplete"
                    inputProps={{title: "Title"}}
                    value={this.props.autoCompleteValue}
                    items={this.props.tracks}
                    getItemValue={(item) => item.title}
                    onSelect={this.props.handleSelect}
                    onChange={this.props.handleChange}
                    renderItem={this.handleRenderItem.bind(this)}
                />
            </div>
        );
    }
}

export default Search