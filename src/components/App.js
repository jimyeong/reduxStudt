import React from 'react';
import Counter from '../container/counterContainer';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Counter/>
            </div>
        )
    }
}


export default App;