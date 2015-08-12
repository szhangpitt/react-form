class DateInput extends React.Component {
    render() {
        return <BaseInput {...this.props}/>
    }
}

DateInput.defaultProps = {
    pattern: /^[1-2]\d\d\d\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
    validAlert: 'Please provide a valid date in yyyy-mm-dd'
}