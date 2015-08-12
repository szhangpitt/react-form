class Record extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="record-container">
                <h3>{this.props.record.name}</h3>
                <h4>{this.props.record.type}</h4>
                {this.props.record.fields.map(function (fd, index) {
                    if (!Array.isArray(fd.fields)) {
                        return <Field
                                key={fd.path + index}
                                field={fd} />;
                    } else {
                        let record = fd;
                        return <Record record={record} />
                    }
                })}
            </div>;
    }
}