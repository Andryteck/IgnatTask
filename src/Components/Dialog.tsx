import React from 'react';

const Dialog = () => {
    let myQualities: Array<string> = ['sportsman', 'foodLover', 'animalLover']

    return (
        <div className={'wrapper'}>
            <div className={'messageBlock'}>
                <img className={'photo'}
                     src="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg"
                     alt="photo"/>
                <div className={`messageBody`}>
                    <h1 className={'title'}>Andrei</h1>

                    {
                        myQualities.map(i => <span className={i === 'foodLover' ? 'subTitleFoodLover':'subTitle'} >{i}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Dialog