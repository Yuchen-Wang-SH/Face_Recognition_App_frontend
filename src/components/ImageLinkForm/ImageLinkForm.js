import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
    render() {
        const { onInputChange, onImageSubmit } = this.props;
        return (
            <div>
                <p className="f3">
                    This Magic Brain will detect faces in your picture.
                </p>
                <div className='center'>
                    <div className="form center pa4 br3 shadow-5">
                        <input type="text" className="f4 pa2 w-70 center" placeholder='Please input the link of the picture here.' onChange={onInputChange}/>
                        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onImageSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener("keyup", function(event) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Number 13 is the "Enter" key on the keyboard
                if (event.keyCode === 13) {
                  // Trigger the button element with a click
                  document.getElementsByTagName('button')[0].click();
                }
            })
        })
    }
} 

export default ImageLinkForm;