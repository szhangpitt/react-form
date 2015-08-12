class Field extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var that = this;
        var node = this.props.field;
        console.log(that.state);
        var fieldInput;

        if (node.type === 'text') {
            fieldInput = <TextInput
                name={node.name}
                required={node.required}
                defaultValue={node.default}
                path={node.path}
                didChange={that._onTextChanged} />
        } else if (node.type === 'number') {
            fieldInput = <NumberInput
                name={node.name}
                required={node.required}
                defaultValue={node.default}
                path={node.path}
                didChange={that._onNumberChanged} />
        } else if (node.type === 'date') {
            fieldInput = <DateInput
                name={node.name}
                required={node.required}
                defaultValue={node.default}
                path={node.path}
                didChange={that._onTextChanged} />
        }

        return fieldInput ? <div className="field-container">{fieldInput}</div> : null;
    }

    _onTextChanged(e) {
        console.log('form _onTextChanged', e.target.value);
    }

    _onNumberChanged(e) {
        console.log('form _onNumberChanged', e.target.value);
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('_handleSubmit', e, this.refs.form);
        var model = {};
        this.refs.form.children.forEach(function (c) {
            console.log('child', c);
        });
    }
}
