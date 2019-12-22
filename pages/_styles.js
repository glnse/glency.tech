import React from 'react';

export default class Styles extends React.Component{
    render(){
        return(
            <style global jsx>{`
                * {
                    margin: 0;
                    color: 'white';
                }

                body {
                    font-family: 'Roboto';
                    background: #a8ff78;  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }
                
                .gr-mettalictoad {
                    max-height: 100vh;
                    width: 100vw;
                }

                .fullwidth {
                    max-height: 100vh;
                    max-width: 100vw;
                }
            `}</style>
        );
    }
}