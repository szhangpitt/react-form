class BaseInput extends React.Component {
    constructor(props) {
        super(props);

        console.log('construct', typeof props.defaultValue);

        this.state = {
            fresh: typeof props.defaultValue === 'undefined',
            userInput: props.defaultValue
        };
    }

    render() {
        console.log(this.state, this.props);

        return (<div className="form-group">
                    <label className="control-label">{this.props.label || this.props.name}</label>
                    {this.props.required ?
                        <input className="form-control"
                            required
                            name={this.props.name}
                            type={this.props.type}
                            defaultValue={this.props.defaultValue}
                            onChange={this._handleChange.bind(this)} /> :
                        <input
                            className="form-control"
                            name={this.props.name}
                            type={this.props.type}
                            defaultValue={this.props.defaultValue}
                            onChange={this._handleChange.bind(this)} />}

                    {!this.state.fresh && this.props.required && !this.state.userInput ?
                        <p>{this.props.requiredAlert}</p> :
                        null}

                    <ValidationMessage
                         input={this.state.userInput}
                         pattern={this.props.pattern}
                         message={this.props.validAlert} />
                </div>);
    }

    _handleChange(e) {
        console.log('_handleChange', e.target.value);

        this.setState({
            fresh: false,
            userInput: e.target.value
        });

        if (typeof this.props.didChange === 'function') {
            this.props.didChange(e);
        }
    }
}

BaseInput.propTypes = {
    required: React.PropTypes.bool
};

BaseInput.defaultProps = {
    type: 'text',
    requiredAlert: 'Hey! This is required!',
    validAlert: 'Please provide a valid input.'
};