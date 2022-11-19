import React, { useEffect, useState } from 'react';
import { Animated } from "react-animated-css";
import "../styles/style.scss";

function Loading() {
    const [loading, setLoading] = useState({ load: false, isVisible: false });
    useEffect(() => {
        setLoading({ load: true, isVisible: true });
        setTimeout(() => { setLoading({ load: true, isVisible: false }) }, 2000);
        setTimeout(() => { setLoading({ load: false, isVisible: false }) }, 4000);
    }, []);

    return ((loading.load &&
        <Animated animationIn='' isVisible={loading.isVisible}>
            <div className="loading" >
                <div className="wavy">
                    <span style={{ "--i": 1 }}>L</span>
                    <span style={{ "--i": 2 }}>o</span>
                    <span style={{ "--i": 3 }}>a</span>
                    <span style={{ "--i": 4 }}>d</span>
                    <span style={{ "--i": 5 }}>i</span>
                    <span style={{ "--i": 6 }}>n</span>
                    <span style={{ "--i": 7 }}>g</span>
                    <span style={{ "--i": 8 }}>.</span>
                    <span style={{ "--i": 9 }}>.</span>
                    <span style={{ "--i": 10 }}>.</span>
                </div>
                <div className="loading-img">
                    <img src={process.env.PUBLIC_URL + "/IMG/loading.webp"} alt="" />
                </div>
            </div>
        </Animated>)
    )
}

export default Loading