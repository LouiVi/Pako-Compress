app.Include( "Pako.js" );
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	const originalString =app.ReadFile( "/storage/emulated/0/Download/a/GOD.txt", "UTF-8" ); // prompt("String");// "This is a test string with almost no repeated characters.";
const compressedString = compressString(originalString);
app.Alert("Compressed:" + compressedString.length, compressedString);

const uncompressedString = uncompressString(compressedString);
app.Alert("Uncompressed:"+uncompressedString.length, uncompressedString); // Output: This is a test string with almost no repeated characters.
}

function compressString(input) {
    const binaryString = new TextEncoder().encode(input);
    const compressed = pako.deflate(binaryString);
    return btoa(String.fromCharCode(...compressed)); // Convert to Base64
}

function uncompressString(compressed) {
    const binaryString = Uint8Array.from(atob(compressed), c => c.charCodeAt(0));
    const decompressed = pako.inflate(binaryString);
    return new TextDecoder().decode(decompressed);
}