import React from 'react'

const Register = ({ onRouteChange }) => {
  return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <div
            action="sign-up_submit"
            method="get"
            accept-charset="utf-8"
            >
                <fieldset
                id="sign_up"
                className="ba b--transparent ph0 mh0"
                >
                    <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                        <label
                        className="db fw4 lh-copy f6"
                        htmlFor="name"
                        >
                        Name
                        </label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="text"
                        name="name"
                        id="name"
                        />
                    </div>
                    <div className="mt3">
                        <label
                        className="db fw4 lh-copy f6"
                        htmlFor="email-address"
                        >
                        Email address
                        </label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="email"
                        name="email-address"
                        id="email-address"
                        />
                    </div>
                    <div className="mt3">
                        <label
                        className="db fw4 lh-copy f6"
                        htmlFor="password"
                        >
                        Password
                        </label>
                        <input
                        className="b pa2 input-reset ba bg-transparent"
                        type="password"
                        name="password"
                        id="password"
                        />
                    </div>
                </fieldset>
                <div className="mt3">
                    <input
                    className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                    type="submit"
                    value="Register"
                    onClick={() => onRouteChange('home')}
                    />
                </div>
            </div>
        </article>
    )
}

export default Register