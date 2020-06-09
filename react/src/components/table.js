import React from 'react';

export class SQLTable extends React.Component {
    render() {

        // console.log(this.props.data);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.props.columns.map((element, index) => (
                                <td key={index}>{element}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((row, index) => (
                            <tr key={index}>
                                {row.map((element, subindex) => (
                                    <td key={subindex}>{element}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}