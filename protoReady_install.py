#!/usr/bin/env python
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see http://www.gnu.org/licenses/.

import os

# These lines are only needed if you don't put the script directly into
# the installation directory
import sys
# Unix
sys.path.append('/usr/share/inkscape/extensions')
# OS X
sys.path.append('/Applications/Inkscape.app/Contents/Resources/extensions')
# Windows
sys.path.append('C:\Program Files\Inkscape\share\extensions')

# We will use the inkex module with the predefined Effect base class.
import inkex

def propStrToList(str):
	list = []
	propList = str.split(";")
	for prop in propList:
		if not (len(prop) == 0):
			list.append(prop.strip())
	return list

def listToPropStr(list):
	str = ""
	for prop in list:
		str += " " + prop + ";" 
	return str[1:]

class ProtoReady_Install(inkex.Effect):
	def __init__(self):
		# Call the base class constructor.
		inkex.Effect.__init__(self)

		self.OptionParser.add_option('--tab', action = 'store', type = 'string', dest = 'what')

		inkex.NSS[u"protoready"] = u"http://lin.us.com/protoready"

	def effect(self):
		# Find and delete old script node
		for node in self.document.xpath("//svg:script[@id='ProtoReady']", namespaces=inkex.NSS):
			node.getparent().remove(node)
	
		# Create new script node
		scriptElm = inkex.etree.Element(inkex.addNS("script", "svg"))
		scriptElm.text = open(os.path.join(os.path.dirname(__file__),	"protoReady.js")).read()
		scriptElm.set("id","ProtoReady")
		scriptElm.set("{" + inkex.NSS["protoready"] + "}version", '0.0.1')
		self.document.getroot().append(scriptElm)

		# Remove "protoReadyInit()" in the "onload" attribute, if present.
#		if self.document.getroot().get("onload"):
#			propList = propStrToList(self.document.getroot().get("onload"))
#		else:
#			propList = []
#	
#		for prop in propList:
#			if prop == "protoReadyInit()":
#				propList.remove("protoReadyInit()")
#	
#		if len(propList) > 0:
#			self.document.getroot().set("onload", listToPropStr(propList))
#		else:
#			if self.document.getroot().get("onload"):
#				del self.document.getroot().attrib["onload"]

# Create instance
effect = ProtoReady_Install()
effect.affect()

