var React = require('react');
var ReactDOM = require('react-dom');

export const LoginUI = function (props){
    var [sn, setSn] = React.useState('');
    var [pwd, setPwd] = React.useState('');

    return <div style={ { maxWidth: "400px", margin: "auto", paddingTop: "50px" } }>
        <img src="./res/banner.png" height="90" alt="WebAgent Logo" />
        <br/><br/>
        <input className="form-control" placeholder="Screenname" value={sn} onInput={e => { setSn(e.target.value) }}></input>
        <br/><br/>
        <input className="form-control" placeholder="Password" value={pwd} onInput={e => { setPwd(e.target.value) }} type="password"></input>
        <br/><br/>
        <button className="btn btn-primary" style={ { width:"100px" } } onClick={e => {
            // Call external login function
            props.login(sn, pwd);
        }}>Login</button>
    </div>;
};