ProtoReady
==========

##### ProtoReady is an extension for Inkscape which enables the creation of click-through prototypes.

ProtoReady utilizes Diagram connectors and the Webslice extension to define hotspots and view areas respectively. A ready prototype can then be opened in a modern browser.
A minified version of [Zepto](http://zeptojs.com) is incorporated into to the script which means one can use Zepto/jQeury syntax in developing further one's prototype.


### How to

## Installing ProtoReady

Place the ProtoReady files in the Inkscape extensions folder which are located at

###### Mac
/Applications/Inkscape.app/Contents/Resources/extensions
(Right-click the Inkscape icon to access the context menu and choose "Show Package Content")

###### Linux
$HOME/.inkscape/extensions

###### Win
C:\Programes\Inkscape\share\extensions


## Using ProtoReady

1. Load the ProtoReady extension via Extensions > ProtoReady > install/update…

2. Define view areas with the Web slicer extension
- Create the first web slicer area via Extensions> Web > Slicer > Create a slicer rectangle
- Position and resize slice to desired view area.
- Duplicate and edit the slice for other view areas

3. Wire up hotspots and view areas
- Click (ctrl+F2) the diagram tool and connect a hotspot with a slicer view area.
It's easier to first hide the Web slicer layer and leave the connection open ended at first. Then move the connector up to the Web slicer layer and 

### Future
- Extend with a component library