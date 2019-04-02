import React, { Component } from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import Title from './Title';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio})   
    }

    render () {
        return (
            <div>
                <h1> Hello </h1>
                <p> I'm PKurt</p>
                <Title/>
                {
                    this.state.displayBio ? (
                <div>
                <p>zzzzzzzzzzzzzzzzzz</p>
                <p>zzzzzzzzzzzzzzzzzz</p>
                <p>zzzzzzzzzzzzzzzzzz</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                )
                }
                <hr></hr>
                <Projects/>
                <hr></hr>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;