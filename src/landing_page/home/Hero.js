import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div>
                    <img src='media/images/homehero.png' alt='Zerodha trading dashboard' className='mb-5' />
                    <h1 className='mt-5'>Invest in Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
                    <button className='p-2 btn btn-primary fs-5 mb-5'style = {{width:"30%", margin: "0 auto",  }}>Sign Up Now</button>
                </div>

            </div>
             
        </div>
    );
}

export default Hero;