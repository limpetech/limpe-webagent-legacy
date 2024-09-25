// ICQ Kolobok

// -------------------------------------------------


// Configuration
var table = {
    ":)": "smile.gif",
    ":-)": "smile.gif",
    "(smile)": "smile.gif",
    "(ok)": "ok.gif",
    "(umnik"): "umnik2.gif"
};


// -------------------------------------------------

// Functions

function replaceKoloboks(text){
    for (var key in table){
        text = text.replace("/ "+key+" /g", "<img src='res/smiles/kolobok/" + table[key] + "' />");
    }
    return text;
}
