import React from 'react'
import './Image.css';
export default function Image(props) {
  return (
 <>
    <div className="image-container" style={props.styleImage}>
        <div className="box2" style={props.styleBox}>
        <div><img src="computer.jpg" alt="error" width="100%" height="270vh" /></div>
        </div>
        <div className="box2" style={props.styleBox}>
        <div><img src="computerperson.jpg" alt="error" width="100%" height="270vh"/></div>
        </div>
        <div className="box2" style={props.styleBox}>
        <div><img src="natureimage.jpg" alt="error" width="100%" height="270vh"/></div>
        </div>
    </div>

    <div className="image-container" style={props.styleImage}>
        <div className="box2" style={props.styleBox}>
        <div><img src="beach.jpg" alt="error" width="100%" height="270vh" /></div>
        </div>
        <div className="box2" style={props.styleBox}>
        <div><img src="mountainimage.jpg" alt="error" width="100%" height="270vh"/></div>
        </div>
        <div className="box2" style={props.styleBox}>
        <div><img src="sand.jpg" alt="error" width="100%" height="270vh"/></div>
        </div>
    </div>
</>
  )
}
