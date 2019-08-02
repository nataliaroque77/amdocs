import React from 'react';

const ResultList = props => {
    return (
        <div>
            { props.results.length > 0 &&
                <div className="container">
                    <div className="card">
                        <div className="search-results-section">
                            <h2>
                                <span>Search results for: </span> {props.query}
                            </h2>
                            <h3>Users</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.results.map((result, index) =>
                                        <tr key={result.id}>
                                            <td>
                                                {result.username}
                                            </td>
                                            <td className="text-center">
                                                {result.displayName}
                                            </td>
                                            <td>
                                                {result.status}
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Search pagination">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ResultList;
