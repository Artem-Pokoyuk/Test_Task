import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                    <button>Get the weather</button>
            </form>
        </div>
    );

}

export default Form;