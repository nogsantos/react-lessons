        // // class App extends React.Component {
        // //     static allItems = [
        // //         {id: 'a', value: 'apple'},
        // //         {id: 'o', value: 'orange'},
        // //         {id: 'g', value: 'grape'},
        // //         {id: 'p', value: 'pear'},
        // //     ];
        // //     state = {items: []};
        // //     /*
        // //      *
        // //      */
        // //     addItem = () => {
        // //         this.setState(({items}) => ({
        // //             items: [
        // //                 ...items,
        // //                 App.allItems.find(
        // //                     i => !items.includes(i),
        // //                 ),
        // //             ],
        // //         }));
        // //     }
        // //     /*
        // //      *
        // //      */
        // //     removeItem = item => {
        // //         this.setState(({items}) => ({
        // //             items: items.filter(i => i !== item),
        // //         }));
        // //     }
        // //     /*
        // //      *
        // //      */
        // //     render() {
        // //         const {items} = this.state;
        // //         return (
        // //             <div>
        // //                 <button disabled={ items.length >= App.allItems.length} onClick={this.addItem}>+</button>
        // //                 {
        // //                     items.map((i, index) => (
        // //                         <div key={i.id}>
        // //                             <button onClick={() => this.removeItem(i)}>-</button>
        // //                             {i.value}: <input />
        // //                         </div>
        // //                     ))
        // //                 }
        // //             </div>
        // //         );
        // //     }
        // // }
        // // ReactDOM.render(<App />,document.getElementById('root'),);
        // class FocusDemo extends React.Component {
        //     state = {
        //         items: [
        //             {id: 'a', value: 'apple'},
        //             {id: 'o', value: 'orange'},
        //             {id: 'g', value: 'grape'},
        //             {id: 'p', value: 'pear'},
        //         ],
        //     };
        //     /*
        //      *
        //      */
        //     componentDidMount() {
        //         setInterval(this.randomizeItems, 1000);
        //     }
        //     /*
        //      *
        //      */
        //     randomizeItems = () => {
        //         this.setState(({items}) => ({
        //             items: shuffle(items),
        //         }));
        //     }
        //     /*
        //      *
        //      */
        //     render() {
        //         return (
        //             <div>
        //                 <div>
        //                     <h1>Without Key</h1>
        //                     {
        //                         this.state.items.map(item => (
        //                             <input value={item.value} />
        //                         ))
        //                     }
        //                 </div>
        //                 <div>
        //                     <h1>With Key as Index</h1>
        //                     {
        //                         this.state.items.map((item, index) => (
        //                             <input key={index} value={item.value} />
        //                         ))
        //                     }
        //                 </div>
        //                 <div>
        //                     <h1>With Key</h1>
        //                     {
        //                         this.state.items.map(item => (
        //                             <input key={item.id} value={item.value} />
        //                         ))
        //                     }
        //                 </div>
        //             </div>
        //         );
        //     }
        //   }
        //   /*
        //    *
        //    */
        //   function shuffle(array) {
        //     var currentIndex = array.length, temporaryValue, randomIndex;
        //     // While there remain elements to shuffle...
        //     while (0 !== currentIndex) {
        //         // Pick a remaining element...
        //         randomIndex = Math.floor(
        //             Math.random() * currentIndex,
        //         );
        //         currentIndex -= 1;
        //         // And swap it with the current element.
        //         temporaryValue = array[currentIndex];
        //         array[currentIndex] = array[randomIndex];
        //         array[randomIndex] = temporaryValue;
        //     }
        //     return array;
        //   }
        //   ReactDOM.render( <FocusDemo />, document.getElementById('root'));
