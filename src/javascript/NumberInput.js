class NumberInput extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <BaseInput {...this.props} />
    }
}

NumberInput.defaultProps = {
    pattern: /^[0-9]*$/,
    validAlert: 'Please provide a valid number.'
};

NumberInput.propTypes = {
    defaultValue: React.PropTypes.number
};