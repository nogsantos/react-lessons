import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
/**
 *
 *
 * @class RenderingLists
 * @extends {React.Component}
 */
class RenderingLists extends React.Component {
    /**
     * Creates an instance of RenderingLists.
     * @param {any} props
     * @memberof RenderingLists
     */
    constructor(props){
        super(props);

        this.state = {
            items: [
                {id: 1, value: 'apple'},
                {id: 2, value: 'orange'},
                {id: 3, value: 'grape'},
                {id: 4, value: 'pear'},
            ],
        };
    }
    /**
     *
     *
     * @memberof RenderingLists
     */
    componentDidMount() {
        this.timer = setInterval(this.randomizeItems, 1000);
    }
    /**
     *
     *
     * @memberof ReRendering
     */
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
        this.timer = false;
    }
    /**
     *
     *
     * @memberof RenderingLists
     */
    randomizeItems = () => {
        this.setState(({items}) => ({
            items: this.shuffle(items),
        }));
    }
    /**
     *
     *
     * @param {any} array
     * @returns
     * @memberof RenderingLists
     */
    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(
                Math.random() * currentIndex,
            );
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    /**
     *
     *
     * @returns
     * @memberof RenderingLists
     */
    render() {
        return (
            <div>
                <div>
                    <span className="flow-text">Without Key <small>warning</small></span>
                    <Collection>
                        {
                            this.state.items.map(item => (
                                <CollectionItem>{item.value}</CollectionItem>
                            ))
                        }
                    </Collection>
                </div>
                <div>
                    <span className="flow-text">With Key as Index</span>
                    <Collection>
                        {
                            this.state.items.map((item, index) => (
                                <CollectionItem active={(item.id / 2)%2===0} key={index}>{item.value}</CollectionItem>
                            ))
                        }
                    </Collection>
                </div>
                <div>
                    <span className="flow-text">With Key id</span>
                    <Collection>
                        {
                            this.state.items.map(item => (
                                <CollectionItem key={item.id}>{item.value}</CollectionItem>
                            ))
                        }
                    </Collection>
                </div>
            </div>
        );
    }
}

export default RenderingLists;
