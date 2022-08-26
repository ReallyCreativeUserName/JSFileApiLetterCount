"use strict";

window.onload = function ()
{
    document.getElementById("file").onchange = filestuff;

    let dropzone = document.getElementById("dropfile");
    dropzone.addEventListener("dragover", (event) =>
    {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    });
    dropzone.addEventListener("drop", (event) =>
    {
        event.stopPropagation();
        event.preventDefault();
        let files = event.dataTransfer.files;
        let reader = new FileReader();
        reader.readAsText(files[0]);

        reader.onload = function (event)
        {
            let dateiInhalt = event.target.result;
            let html = "<table><tr><td>Buchstabe</td><td>Anzahl</td></tr>";
            let string = dateiInhalt.toLowerCase();
            console.log(string);
            for (let i = 97; i <= 122; i++)
            {
                html += "<tr><td>" + String.fromCharCode(i).toUpperCase() + "</td><td>" + LetterCount(string, String.fromCharCode(i)) + "</td></tr>";
            }
            html += "</table>"
            document.getElementById("output").innerHTML = html;
        }
    });
}


function filestuff(event)
{
    let reader = new FileReader();

    let files = event.target.files;

    reader.readAsText(files[0]);

    reader.onload = function (event)
    {
        let dateiInhalt = event.target.result;
        let html = "<table><tr><td>Buchstabe</td><td>Anzahl</td></tr>";
        let string = dateiInhalt.toLowerCase();
        console.log(string);
        for (let i = 97; i <= 122; i++)
        {
            html += "<tr><td>" + String.fromCharCode(i).toUpperCase() + "</td><td>" + LetterCount(string, String.fromCharCode(i)) + "</td></tr>";
        }
        html += "</table>"
        document.getElementById("output").innerHTML = html;
    }
}

function LetterCount(str, letter)
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str.charAt(position) == letter) 
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}