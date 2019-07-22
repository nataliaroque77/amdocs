import React from 'react';
import ResultList from './ResultList';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            searchText: '',
            results: []
        };
    }

    componentDidMount() {
        this.doSearch();
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.doSearch(this.query.value);
        e.currentTarget.reset();
    };


    doSearch = (query) => {
        const url = `http://3.122.7.162:5000/v60/admin/search/user?keyword=${query}&alias=false`;
        const options = {
            credentials: 'include',
        };

        fetch(url, options)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    results: responseData
                });
            })
            .catch(error => {
                //console.log('Error - fetching data', error);
            });
    };

    render() {
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="card">
                        <div className="search-section">
                            <form className="search-form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="search">Search User</label>
                                    <input type="search"
                                           onChange={this.onSearchChange}
                                           name="search"
                                           ref={(input) => this.query = input}
                                           placeholder="Search..."
                                           className="form-control"/>
                                </div>
                                <button className="btn btn-default" type="submit" id="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ResultList results={this.state.results} query={this.state.searchText}/>
            </div>
        );
    }
}

export { Search };


