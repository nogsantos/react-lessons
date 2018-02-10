import React from 'react';
/**
 *
 *
 * @class ControllingFormValues
 * @extends {React.Component}
 */
class ControllingFormValues extends React.Component {
    /**
     * Creates an instance of ControllingFormValues.
     * @param {any} props
     * @memberof ControllingFormValues
     */
    constructor(props){
        super(props);
        this.availableOptions = [
            'apple',
            'grape',
            'cherry',
            'orange',
            'pear',
            'peach',
        ];
        this.state = {
            multiline: '',
            commaSeparated: '',
            multiSelect: [],
        };
    }
    /**
     *
     *
     * @memberof ControllingFormValues
     */
    handleCommaSeparatedChange = event => {
        const {value} = event.target;
        const allVals = value.split(',').map(v => v.trim()).filter(Boolean);
        this.setState({
            commaSeparated: value,
            multiline: allVals.join('\n'),
            multiSelect: allVals.filter(v =>
                this.availableOptions.includes(v),
            ),
        });
    }
    /**
     *
     *
     * @memberof ControllingFormValues
     */
    handleMultilineChange = event => {
        const {value} = event.target;
        const allVals = value.split('\n').map(v => v.trim()).filter(Boolean);
        this.setState({
            multiline: value,
            commaSeparated: allVals.join(','),
            multiSelect: allVals.filter(v =>
                this.availableOptions.includes(v),
            ),
        });
    }
    /**
     *
     *
     * @memberof ControllingFormValues
     */
    handleMultiSelectChange = event => {
        const allVals = Array.from(event.target.selectedOptions,).map(o => o.value);
        this.setState({
            multiSelect: allVals,
            multiline: allVals.join('\n'),
            commaSeparated: allVals.join(','),
        });
    }
    /**
     *
     *
     * @returns
     * @memberof ControllingFormValues
     */
    render() {
        const {
            commaSeparated,
            multiline,
            multiSelect,
        } = this.state

        return (
            <form>
                <div>
                    <label>
                        comma separated values:<br />
                        <input type="text" value={commaSeparated} onChange={this.handleCommaSeparatedChange} />
                    </label>
                </div>
                <div>
                    <label>
                        multiline values:<br />
                        <textarea value={multiline} rows={this.availableOptions.length} onChange={this.handleMultilineChange} />
                    </label>
                </div>
                <div>
                    <label>
                        multiSelect values:<br />
                        <select multiple value={multiSelect} size={this.availableOptions.length} onChange={this.handleMultiSelectChange}>
                            {this.availableOptions.map(optionValue => (
                                <option key={optionValue} value={optionValue}>{optionValue}</option>
                            ),)}
                        </select>
                    </label>
                </div>
            </form>
        );
    }
}

export default ControllingFormValues;
