// ICQ Kolobok

// -------------------------------------------------


// Configuration
var table = {
    ":)": "smile.gif",
    ":-)": "smile.gif"
};


// -------------------------------------------------

// Functions

function replaceKoloboks(text){
    for (var key in table){
        text = text.replace(key, "<img src='res/smiles/kolobok/" + table[key] + "' />");
    }
    return text;
}