var React = require('react');
var ReactDOM = require('react-dom');

export const MainUI = function (props){
    let contacts = [];

    // Foreach through contacts and add them to the contact list
    props.contacts.forEach(contact => {
        contacts.push([
            <span>{ contact }</span>,
            <br/>
        ]);
    });

    return <app>
        <aside style={ { float:"left", maxWidth:"400px", padding:"5px", paddingTop:"20px", paddingBottom:"20px", minHeight:"600px", backgroundColor:"white"  } }>
            { contacts }
        </aside>
    </app>;
};