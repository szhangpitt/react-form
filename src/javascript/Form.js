class Form extends React.Component {
    constructor(props) {
        super(props);

        var linkedRecords = {
            "name": "ComplexObject1",
            "type": "com.namespace.class.type.complex1",
            "fields": [
                {
                "name": "requiredText",
                "type": "text",
                "required": true,
                "default": "abc",
                "path": "model.a"
            }, {
                "name": "requiredNumber",
                "type": "number",
                "required": true,
                "default": 123,
                "path": "model.a"
            }, {
                "name": "ComplexObject2",
                "type": "com.namespace.class.type.complex2",
                "fields": [
                    {
                    "name": "optionalNumber",
                    "type": "number",
                    "required": false,
                    "default": 123,
                    "path": "model.a"
                }, {
                    "name": "requiredDate",
                    "type": "date",
                    "required": true,
                    "default": "2015-05-31",
                    "path": "model.a"
                }, {
                    "name": "ComplexObject3",
                    "type": "com.namespace.class.type.complex3",
                    "fields": [
                    {
                        "name": "requiredNumber",
                        "type": "number",
                        "required": true,
                        "default": 123,
                        "path": "model.a"
                    }, {
                        "name": "optionalDate",
                        "type": "date",
                        "required": false,
                        "default": "2015-05-31",
                        "path": "model.a"
                    }]
                }]
            }]
        };

        this.state = {record: linkedRecords};
    }

    render() {
        var that = this;
        return <div className="row">
                    <div className="col-xs-12">
                        <form className="form-horizontal" name={that.props.name} ref="form">
                            <Record record={this.state.record} />
                        </form>
                    </div>
                </div>;
    }
}