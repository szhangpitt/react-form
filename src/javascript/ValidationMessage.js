class ValidationMessage extends React.Component {

    render() {
        var input = this.props.input;
        var pattern = new RegExp(this.props.pattern);
        var message = this.props.message;

        if (input && this.props.pattern && !pattern.test(input)) {
            return <p>{message}</p>;
        }

        return null;
    }
}