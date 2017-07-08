#!/bin/bash
# You can run this script with ./new_component.sh component-name

# Troubleshooting - if you get any kinds of 'sed' errors, make sure you have
# homebrew installed, then run `brew install gnu-sed`

if [ $# -gt 0 ]
  then
    name=$1
    camel_case=$( echo $name | /usr/local/bin/gsed -r 's/([a-z]+)-([a-z])([a-z]+)/\1\U\2\L\3/')
  else
    name="component"
    camel_case="component"
fi

colors=("aqua" "black" "blue" "fuchsia" "green" "gray" "lime" "maroon" "navy" "olive" "purple" "red" "silver" "teal" "white" "yellow" "aliceblue" "antiquewhite" "aquamarine" "azure" "beige" "bisque" "blanchedalmond" "blueviolet" "brown" "burlywood" "cadetblue" "chartreuse" "chocolate" "coral" "cornflowerblue" "cornsilk" "crimson" "cyan" "darkblue" "darkcyan" "darkgoldenrod" "darkgray" "darkgreen" "darkkhaki" "darkmagenta" "darkolivegreen" "darkorange" "darkorchid" "darkred" "darksalmon" "darkseagreen" "darkslateblue" "darkslategray" "darkturquoise" "darkviolet" "deeppink" "deepskyblue" "dimgray" "dodgerblue" "firebrick" "floralwhite" "forestgreen" "gainsboro" "ghostwhite" "gold" "goldenrod" "gray" "greenyellow" "honeydew" "hotpink" "indianred" "indigo" "ivory" "khaki" "lavender" "lavenderblush" "lawngreen" "lemonchiffon" "lightblue" "lightcoral" "lightcyan" "lightgoldenrodyellow" "lightgreen" "lightgrey" "lightpink" "lightsalmon" "lightseagreen" "lightskyblue" "lightslategray" "lightsteelblue" "lightyellow" "limegreen" "linen" "magenta" "mediumblue" "mediumorchid" "mediumpurple" "midnightblue" "mistyrose" "moccasin" "oldlace" "orange" "orchid" "peachpuff" "peru" "pink" "plum" "purple" "rosybrown" "royalblue" "salmon" "sandybrown" "seagreen" "sienna" "skyblue" "slateblue" "steelblue" "tan" "thistle" "tomato" "violet" "wheat" "whitesmoke" "yellow" "yellowgreen")
color=${colors[$RANDOM % ${#colors[@]} ]}

cd ./www/components
mkdir $name

# create css

touch $name/$name.css
echo "$name {" >> $name/$name.css
echo "  color: "$color";" >> $name/$name.css
echo "}" >> $name/$name.css

# create html

touch $name/$name.html
echo '{{ $ctrl.name }}' >> $name/$name.html

# create js

touch $name/$name.js
echo >> $name/$name.js
echo "angular" >> $name/$name.js
echo "    .module('app')" >> $name/$name.js
echo "    .component('$camel_case', {" >> $name/$name.js
echo "        bindings: {}," >> $name/$name.js
echo "        controller: controller," >> $name/$name.js
echo "        templateUrl: components/$name/$name.html" >> $name/$name.js
echo >> $name/$name.js
echo "function controller() {" >> $name/$name.js
echo "  var vm = this">> $name/$name.js
echo "  vm.name = '$name'">> $name/$name.js
echo "}" >> $name/$name.js

# add imports

cd ../
import_statements="    <link href='$name.css' rel='stylesheet'>\n    <script src='$name.js'></script>"
/usr/local/bin/gsed -i "/<!-- component imports -->/a$import_statements" index.html

