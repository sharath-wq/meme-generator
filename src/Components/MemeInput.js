import React from 'react'

function MemeInput(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className="meme-form" >
                <input type="text" name="topText" placeholder="Top Text" value={props.topText} onChange={props.handleChange} />
                <input type="text" name="bottomText" placeholder="Bottom Text" value={props.bottomText} onChange={props.handleChange} />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img src={props.randomImg} alt="random" />
                <h2 className="top">{props.topText}</h2>
                <h2 className="bottom">{props.bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeInput
