var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Makie.jl-Documentation-1",
    "page": "Home",
    "title": "Makie.jl Documentation",
    "category": "section",
    "text": "Hi! Welcome to Makie, a high-performance, extendable, and multi-platform plotting package for Julia. <iframe src=\"https://simondanisch.github.io/ReferenceImages/gallery/index.html\" height=\"1000\" width=\"100%\" frameborder=\"0\"></iframe>For more examples, see the Example Gallery."
},

{
    "location": "index.html#Installation-and-tutorial-1",
    "page": "Home",
    "title": "Installation & tutorial",
    "category": "section",
    "text": "See the Tutorial."
},

{
    "location": "index.html#I\'m-an-expert!-1",
    "page": "Home",
    "title": "I\'m an expert!",
    "category": "section",
    "text": "Head straight to the Plotting functions overview."
},

{
    "location": "basic-tutorials.html#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "basic-tutorials.html#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "Below is a quick tutorial to help get you started. Note that we assume you have Julia installed and configured already."
},

{
    "location": "basic-tutorials.html#Getting-Makie-1",
    "page": "Tutorial",
    "title": "Getting Makie",
    "category": "section",
    "text": "add Makie"
},

{
    "location": "basic-tutorials.html#Getting-latest-version-of-Makie-1",
    "page": "Tutorial",
    "title": "Getting latest version of Makie",
    "category": "section",
    "text": "add Makie#master AbstractPlotting#master GLMakie#master\ntest MakieThe first use of Makie might take a little bit of time, due to precompilation."
},

{
    "location": "basic-tutorials.html#Set-the-Scene-1",
    "page": "Tutorial",
    "title": "Set the Scene",
    "category": "section",
    "text": "The Scene object holds everything in a plot, and you can initialize it by doing so:scene = Scene()Note that before you put anything in the scene, it will be black!"
},

{
    "location": "basic-tutorials.html#Basic-plotting-1",
    "page": "Tutorial",
    "title": "Basic plotting",
    "category": "section",
    "text": "Below are some examples of basic plots to help you get oriented.You can put your in the plot window and scroll to zoom. Right click and drag lets you pan around the scene, and left click and drag lets you do selection zoom (in 2D plots), or orbit around the scene (in 3D plots).Many of these examples also work in 3D,"
},

{
    "location": "basic-tutorials.html#Scatter-plot-1",
    "page": "Tutorial",
    "title": "Scatter plot",
    "category": "section",
    "text": "@example_database(\"Tutorial simple scatter\")@example_database(\"Tutorial markersize\")"
},

{
    "location": "basic-tutorials.html#Line-plot-1",
    "page": "Tutorial",
    "title": "Line plot",
    "category": "section",
    "text": "@example_database(\"Tutorial simple line\")"
},

{
    "location": "basic-tutorials.html#Adding-to-a-scene-1",
    "page": "Tutorial",
    "title": "Adding to a scene",
    "category": "section",
    "text": "@example_database(\"Tutorial adding to a scene\")"
},

{
    "location": "basic-tutorials.html#Adjusting-scene-limits-1",
    "page": "Tutorial",
    "title": "Adjusting scene limits",
    "category": "section",
    "text": "@example_database(\"Tutorial adjusting scene limits\")"
},

{
    "location": "basic-tutorials.html#Basic-theming-1",
    "page": "Tutorial",
    "title": "Basic theming",
    "category": "section",
    "text": "@example_database(\"Tutorial basic theming\")"
},

{
    "location": "basic-tutorials.html#Saving-plots-or-animations-1",
    "page": "Tutorial",
    "title": "Saving plots or animations",
    "category": "section",
    "text": "See the Output section."
},

{
    "location": "basic-tutorials.html#More-examples-1",
    "page": "Tutorial",
    "title": "More examples",
    "category": "section",
    "text": "See the Example Gallery."
},

{
    "location": "statsmakie.html#",
    "page": "StatsMakie Tutorial",
    "title": "StatsMakie Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "statsmakie.html#StatsMakie-Tutorial-1",
    "page": "StatsMakie Tutorial",
    "title": "StatsMakie Tutorial",
    "category": "section",
    "text": "This tutorial shows how to create data visualizations using the StatsMakie grouping and styling APIs as well as the StatsMakie statistical recipes."
},

{
    "location": "statsmakie.html#Grouping-data-by-discrete-variables-1",
    "page": "StatsMakie Tutorial",
    "title": "Grouping data by discrete variables",
    "category": "section",
    "text": "The first feature that StatsMakie adds to Makie is the ability to group data by some discrete variables and use those variables to style the result. Let\'s first create some vectors to play with:@example_database(\"StatsMakie\", 1)To see how x and y relate to each other, we could simply try (be warned: the first plot is quite slow, the following ones will be much faster):@example_database(\"StatsMakie\", 2)It looks like there are two components in the data, and we can ask whether they come from different values of the a variable:@example_database(\"StatsMakie\", 3)Group will split the data by the discrete variable we provided and color according to that variable. Colors will cycle across a range of default values, but we can easily customize those:@example_database(\"StatsMakie\", 4)and of course we are not limited to grouping with colors: we can use the shape of the marker instead. Group(a) defaults to Group(color = a), whereas Group(marker = a) with encode the information about variable a in the marker:@example_database(\"StatsMakie\", 5)Grouping by many variables is also supported:@example_database(\"StatsMakie\", 6)"
},

{
    "location": "statsmakie.html#Styling-data-with-continuous-variables-1",
    "page": "StatsMakie Tutorial",
    "title": "Styling data with continuous variables",
    "category": "section",
    "text": "One of the advantage of using an inherently discrete quantity (like the shape of the marker) to encode a discrete variable is that we can use continuous attributes (e.g. color within a colorscale) for continuous variable. In this case, if we want to see how a, x, y, z interact, we could choose the marker according to a and style the color according to z:@example_database(\"StatsMakie\", 7)Just like with Group, we can Style any number of attributes in the same plot. color is probably the most common, markersize is another sensible option (especially if we are using color already for the grouping):@example_database(\"StatsMakie\", 8)"
},

{
    "location": "statsmakie.html#Split-apply-combine-strategy-with-a-plot-1",
    "page": "StatsMakie Tutorial",
    "title": "Split-apply-combine strategy with a plot",
    "category": "section",
    "text": "StatsMakie also has the concept of a \"visualization\" function (which is somewhat different but inspired on Grammar of Graphics statistics). The idea is that any function whose return type is understood by StatsMakie (meaning, there is an appropriate visualization for it) can be passed as first argument and it will be applied to the following arguments as well.A simple example is probably linear and non-linear regression."
},

{
    "location": "statsmakie.html#Linear-regression-1",
    "page": "StatsMakie Tutorial",
    "title": "Linear regression",
    "category": "section",
    "text": "StatsMakie knows how to compute both a linear and non-linear fit of y as a function of x, via the \"analysis functions\" linear (linear regression) and smooth (local polynomial regression) respectively:@example_database(\"StatsMakie\", 9)That was anti-climatic! It is the linear prediction of y given x, but it\'s a bit of a sad plot! We can make it more colorful by splitting our data by a, and everything will work as above:@example_database(\"StatsMakie\", 10)And then we can plot it on top of the previous scatter plot, to make sure we got a good fit:@example_database(\"StatsMakie\", 11)Here of course it makes sense to group both things by color, but for line plots we have other options like linestyle:@example_database(\"StatsMakie\", 12)"
},

{
    "location": "statsmakie.html#A-non-linear-example-1",
    "page": "StatsMakie Tutorial",
    "title": "A non-linear example",
    "category": "section",
    "text": "Using non-linear techniques here is not very interesting as linear techniques work quite well already, so let\'s change variables:@example_database(\"StatsMakie\", 12)and then:@example_database(\"StatsMakie\", 13)"
},

{
    "location": "statsmakie.html#Different-analyses-1",
    "page": "StatsMakie Tutorial",
    "title": "Different analyses",
    "category": "section",
    "text": "linear and smooth are two examples of possible analysis, but many more are possibles and it\'s easy to add new ones. If we were interested to the distributions of x and y for example we could do:@example_database(\"StatsMakie\", 14)The default plot type is determined by the dimensionality of the input and the analysis: with two variables one would get a heatmap:@example_database(\"StatsMakie\", 15)This plots is reasonably customizable in that one can pass keywords arguments to the histogram analysis:@example_database(\"StatsMakie\", 16)and change the default plot type to something else:@example_database(\"StatsMakie\", 17)Of course heatmap is the saner choice, but why not abuse Makie 3D capabilities?Other available analysis are density (to use kernel density estimation rather than binning) and frequency (to count occurrences of discrete variables)."
},

{
    "location": "statsmakie.html#What-if-I-have-data-instead?-1",
    "page": "StatsMakie Tutorial",
    "title": "What if I have data instead?",
    "category": "section",
    "text": "If one has data instead, it is possible to signal StatsMakie that we are working from a DataFrame (or any table actually) and it will interpret symbols as columns:@example_database(\"StatsMakie\", 18)And everything else works as usual:@example_database(\"StatsMakie\", 19)@example_database(\"StatsMakie\", 20)"
},

{
    "location": "statsmakie.html#Wide-data-1",
    "page": "StatsMakie Tutorial",
    "title": "Wide data",
    "category": "section",
    "text": "Other than comparing the same column split by a categorical variable, one may also compare different columns put side by side (here in a Tuple, (:PetalLength, :PetalWidth)). The attribute that styles them has to be set to bycolumn. Here color will distinguish :PetalLength versus :PetalWidth whereas the marker will distinguish the species.@example_database(\"StatsMakie\", 21)"
},

{
    "location": "help_functions.html#",
    "page": "Help functions",
    "title": "Help functions",
    "category": "page",
    "text": ""
},

{
    "location": "help_functions.html#Help-functions-1",
    "page": "Help functions",
    "title": "Help functions",
    "category": "section",
    "text": ""
},

{
    "location": "help_functions.html#AbstractPlotting.help",
    "page": "Help functions",
    "title": "AbstractPlotting.help",
    "category": "function",
    "text": "help(func[; extended = false])\n\nWelcome to the main help function of Makie.jl / AbstractPlotting.jl.\n\nFor help on a specific function\'s arguments, type help_arguments(function_name).\n\nFor help on a specific function\'s attributes, type help_attributes(plot_Type).\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help-1",
    "page": "Help functions",
    "title": "help",
    "category": "section",
    "text": "helpExample usage:using Makie # hide\nhelp(scatter; extended = true)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_arguments",
    "page": "Help functions",
    "title": "AbstractPlotting.help_arguments",
    "category": "function",
    "text": "help_arguments([io], func)\n\nReturns a list of signatures for function func.\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help_arguments-1",
    "page": "Help functions",
    "title": "help_arguments",
    "category": "section",
    "text": "help_argumentsExample usage:using Makie # hide\nhelp_arguments(stdout, scatter)"
},

{
    "location": "help_functions.html#AbstractPlotting.help_attributes",
    "page": "Help functions",
    "title": "AbstractPlotting.help_attributes",
    "category": "function",
    "text": "help_attributes([io], Union{PlotType, PlotFunction}; extended = false)\n\nReturns a list of attributes for the plot type Typ. The attributes returned extend those attributes found in the default_theme.\n\nUse the optional keyword argument extended (default = false) to show in addition the default values of each attribute. usage:\n\n>help_attributes(scatter)\n	alpha\n	color\n	colormap\n	colorrange\n	distancefield\n	glowcolor\n	glowwidth\n	linewidth\n	marker\n	marker_offset\n	markersize\n	overdraw\n	rotations\n	strokecolor\n	strokewidth\n	transform_marker\n	transparency\n	uv_offset_width\n	visible\n\n\n\n\n\n"
},

{
    "location": "help_functions.html#help_attributes-1",
    "page": "Help functions",
    "title": "help_attributes",
    "category": "section",
    "text": "help_attributesExample usage:using Makie # hide\nhelp_attributes(stdout, Scatter; extended = true)"
},

{
    "location": "help_functions.html#Plot-styling-options-1",
    "page": "Help functions",
    "title": "Plot styling options",
    "category": "section",
    "text": "Use these functions to find out the styling options."
},

{
    "location": "help_functions.html#available_marker_symbols-1",
    "page": "Help functions",
    "title": "available_marker_symbols",
    "category": "section",
    "text": "using AbstractPlotting # hide\nAbstractPlotting.available_marker_symbols()"
},

{
    "location": "help_functions.html#available_gradients-1",
    "page": "Help functions",
    "title": "available_gradients",
    "category": "section",
    "text": "using AbstractPlotting # hide\nAbstractPlotting.available_gradients()For other plot attributes and their usage, see the section Plot attributes."
},

{
    "location": "functions-overview.html#",
    "page": "Plotting functions overview",
    "title": "Plotting functions overview",
    "category": "page",
    "text": ""
},

{
    "location": "functions-overview.html#Plotting-functions-overview-1",
    "page": "Plotting functions overview",
    "title": "Plotting functions overview",
    "category": "section",
    "text": "The follow document lists the atomic plotting functions and their usage. These are the most atomic primitives which one can stack together to form more complex plots.For general help about each function, consult the Help functions.See Plot function signatures for the available plot function signatures.See Plot attributes for the available plot attributes."
},

{
    "location": "functions-overview.html#AbstractPlotting.text",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.text",
    "category": "function",
    "text": "`text(string)`\n\nPlots a text.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#text-1",
    "page": "Plotting functions overview",
    "title": "text",
    "category": "section",
    "text": "textAvailable attributes and their defaults for Text{...} are:   align           (:left, :bottom)\n  alpha           1.0\n  color           :black\n  font            \"Dejavu Sans\"\n  linewidth       1\n  overdraw        false\n  position        Float32[0.0, 0.0]\n  rotation        0.0\n  strokecolor     (:black, 0.0)\n  strokewidth     0\n  textsize        20\n  transparency    false\n  visible         true(Image: library lines 222:222) (Image: library lines 232:247) (Image: library lines 87:116) (Image: library lines 235:260)"
},

{
    "location": "functions-overview.html#AbstractPlotting.meshscatter",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.meshscatter",
    "category": "function",
    "text": "`meshscatter(x, y, z)` / `meshscatter(x, y)` / `meshscatter(positions)`\n\nPlots a mesh for each element in (x, y, z), (x, y), or positions (similar to scatter). markersize is a scaling applied to the primitive passed as marker\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#meshscatter-1",
    "page": "Plotting functions overview",
    "title": "meshscatter",
    "category": "section",
    "text": "meshscatterAvailable attributes and their defaults for MeshScatter{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  marker          GeometryTypes.HyperSphere{3,Float32}(Float32[0.0, 0.0, 0.0], 1.0f0)\n  markersize      0.1\n  overdraw        false\n  rotations       1.0 + 0.0im + 0.0jm + 0.0km\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 29:54) (Image: library lines 135:140) (Image: library lines 154:169) (Image: library lines 335:384) (Image: library lines 414:416) (Image: library lines 593:615) (Image: library lines 120:164) (Image: library lines 4:63)"
},

{
    "location": "functions-overview.html#AbstractPlotting.scatter",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.scatter",
    "category": "function",
    "text": "`scatter(x, y, z)` / `scatter(x, y)` / `scatter(positions)`\n\nPlots a marker for each element in (x, y, z), (x, y), or positions.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#scatter-1",
    "page": "Plotting functions overview",
    "title": "scatter",
    "category": "section",
    "text": "scatterAvailable attributes and their defaults for Scatter{...} are:   alpha             1.0\n  color             :black\n  colormap          :viridis\n  colorrange        AbstractPlotting.Automatic()\n  distancefield     nothing\n  glowcolor         RGBA{N0f8}(0.0,0.0,0.0,0.0)\n  glowwidth         0.0\n  linewidth         1\n  marker            GeometryTypes.HyperSphere{2,T} where T\n  marker_offset     AbstractPlotting.Automatic()\n  markersize        0.1\n  overdraw          false\n  rotations         Billboard()\n  strokecolor       RGBA{N0f8}(0.0,0.0,0.0,0.0)\n  strokewidth       0.0\n  transform_marker  false\n  transparency      false\n  uv_offset_width   Float32[0.0, 0.0, 0.0, 0.0]\n  visible           true(Image: library lines 5:8) (Image: library lines 12:15) (Image: library lines 10:21) (Image: library lines 56:56) (Image: library lines 161:165) (Image: library lines 188:192) (Image: library lines 211:217) (Image: library lines 251:269) (Image: library lines 273:304) (Image: library lines 309:392) (Image: library lines 144:144) (Image: library lines 148:148) (Image: library lines 391:400) (Image: library lines 403:404) (Image: library lines 456:468) (Image: library lines 472:473) (Image: library lines 3:51) (Image: library lines 55:67) (Image: library lines 71:82) (Image: library lines 220:251) (Image: library lines 255:299) (Image: library lines 4:32) (Image: library lines 37:41) (Image: library lines 61:62) (Image: library lines 66:73) (Image: library lines 77:77) (Image: library lines 85:89) (Image: library lines 4:10) (Image: library lines 4:94)"
},

{
    "location": "functions-overview.html#AbstractPlotting.mesh",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.mesh",
    "category": "function",
    "text": "`mesh(x, y, z)`, `mesh(mesh_object)`, `mesh(x, y, z, faces)`, or `mesh(xyz, faces)`\n\nPlots a 3D mesh.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#mesh-1",
    "page": "Plotting functions overview",
    "title": "mesh",
    "category": "section",
    "text": "meshAvailable attributes and their defaults for Mesh{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 109:132) (Image: library lines 135:135) (Image: library lines 4:14) (Image: library lines 17:25) (Image: library lines 61:64) (Image: library lines 67:68) (Image: library lines 71:80) (Image: library lines 83:84) (Image: library lines 281:287) (Image: library lines 335:384) (Image: library lines 442:448) (Image: library lines 452:452) (Image: library lines 477:486) (Image: library lines 396:539)"
},

{
    "location": "functions-overview.html#AbstractPlotting.linesegments",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.linesegments",
    "category": "function",
    "text": "`linesegments(x, y, z)` / `linesegments(x, y)` / `linesegments(positions)`\n\nPlots a line for each pair of points in (x, y, z), (x, y), or positions.\n\nAttributes: The same as for lines\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#linesegments-1",
    "page": "Plotting functions overview",
    "title": "linesegments",
    "category": "section",
    "text": "linesegmentsAvailable attributes and their defaults for LineSegments{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linestyle       nothing\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 70:75) (Image: library lines 169:177) (Image: library lines 490:538) (Image: library lines 305:391) (Image: library lines 264:289) (Image: library lines 4:63)"
},

{
    "location": "functions-overview.html#AbstractPlotting.lines",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.lines",
    "category": "function",
    "text": "`lines(x, y, z)` / `lines(x, y)` / or `lines(positions)`\n\nCreates a connected line plot for each element in (x, y, z), (x, y) or positions.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#lines-1",
    "page": "Plotting functions overview",
    "title": "lines",
    "category": "section",
    "text": "linesAvailable attributes and their defaults for Lines{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linestyle       nothing\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 188:192) (Image: library lines 195:196) (Image: library lines 309:392) (Image: library lines 400:427) (Image: library lines 128:131) (Image: library lines 391:400) (Image: library lines 490:538) (Image: library lines 543:577) (Image: library lines 3:51) (Image: library lines 87:116) (Image: library lines 396:539) (Image: library lines 46:56) (Image: library lines 194:230) (Image: library lines 4:10)"
},

{
    "location": "functions-overview.html#AbstractPlotting.surface",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.surface",
    "category": "function",
    "text": "`surface(x, y, z)`\n\nPlots a surface, where (x, y, z) are supposed to lie on a grid.\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#surface-1",
    "page": "Plotting functions overview",
    "title": "surface",
    "category": "section",
    "text": "surfaceAvailable attributes and their defaults for Surface{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true(Image: library lines 90:98) (Image: library lines 101:109) (Image: library lines 115:122) (Image: library lines 232:240) (Image: library lines 244:259) (Image: library lines 266:277) (Image: library lines 295:331) (Image: library lines 420:437) (Image: library lines 581:589) (Image: library lines 292:306) (Image: library lines 55:86) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.volume",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.volume",
    "category": "function",
    "text": "`volume(volume_data)`\n\nPlots a volume. Available algorithms are:\n\n:iso => IsoValue\n:absorption => Absorption\n:mip => MaximumIntensityProjection\n:absorptionrgba => AbsorptionRGBA\n:indexedabsorption => IndexedAbsorptionRGBA\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#volume-1",
    "page": "Plotting functions overview",
    "title": "volume",
    "category": "section",
    "text": "volumeAvailable attributes and their defaults for Volume{...} are:   absorption      1.0f0\n  algorithm       :iso\n  alpha           1.0\n  color           nothing\n  colormap        :viridis\n  colorrange      (0, 1)\n  isorange        0.05f0\n  isovalue        0.5f0\n  linewidth       1\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 58:58) (Image: library lines 174:189) (Image: library lines 634:651) (Image: library lines 19:24) (Image: library lines 28:33) (Image: library lines 37:42)"
},

{
    "location": "functions-overview.html#AbstractPlotting.heatmap",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.heatmap",
    "category": "function",
    "text": "`heatmap(x, y, values)` or `heatmap(values)`\n\nPlots a heatmap as an image on x, y (defaults to interpretation as dimensions).\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#heatmap-1",
    "page": "Plotting functions overview",
    "title": "heatmap",
    "category": "section",
    "text": "heatmapAvailable attributes and their defaults for Heatmap{...} are:   alpha           1.0\n  color           :black\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  levels          1\n  linewidth       0.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 65:66) (Image: library lines 5:6) (Image: library lines 60:80) (Image: library lines 141:148) (Image: library lines 207:207) (Image: library lines 273:304) (Image: library lines 174:189) (Image: library lines 55:67) (Image: library lines 220:251) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.image",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.image",
    "category": "function",
    "text": "`image(x, y, image)` / `image(image)`\n\nPlots an image on range x, y (defaults to dimensions).\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#image-1",
    "page": "Plotting functions overview",
    "title": "image",
    "category": "section",
    "text": "imageAvailable attributes and their defaults for Image{...} are:   alpha           1.0\n  color           :black\n  colormap        ColorTypes.RGBA{Float32}[RGBA{Float32}(0.0,0.0,0.0,1.0), RGBA{Float32}(1.0,1.0,1.0,1.0)]\n  colorrange      AbstractPlotting.Automatic()\n  linewidth       1\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 5:6) (Image: library lines 50:50) (Image: library lines 161:165) (Image: library lines 4:14) (Image: library lines 17:25) (Image: library lines 115:122) (Image: library lines 232:240) (Image: library lines 403:404) (Image: library lines 93:118) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.contour",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.contour",
    "category": "function",
    "text": "contour(x, y, z)\n\nCreates a contour plot of the plane spanning x::Vector, y::Vector, z::Matrix\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#contour-1",
    "page": "Plotting functions overview",
    "title": "contour",
    "category": "section",
    "text": "contourAvailable attributes and their defaults for Contour{...} are:   alpha           1.0\n  color           nothing\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  fillrange       false\n  levels          5\n  linewidth       1.0\n  overdraw        false\n  transparency    false\n  visible         true(Image: library lines 183:185) (Image: library lines 202:203) (Image: library lines 174:189) (Image: library lines 581:589) (Image: library lines 4:8) (Image: library lines 12:15) (Image: library lines 46:51) (Image: library lines 55:86) (Image: library lines 19:23)"
},

{
    "location": "functions-overview.html#AbstractPlotting.arrows",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.arrows",
    "category": "function",
    "text": "AbstractPlotting.arrows(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.arrows(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#arrows-1",
    "page": "Plotting functions overview",
    "title": "arrows",
    "category": "section",
    "text": "arrowsAvailable attributes and their defaults for Arrows{...} are:   arrowcolor   :black\n  arrowhead    AbstractPlotting.Automatic()\n  arrowsize    0.3\n  arrowtail    nothing\n  lengthscale  1.0f0\n  linecolor    :black\n  linestyle    nothing\n  linewidth    1\n  normalize    false\n  scale        Float32[1.0, 1.0, 1.0](Image: library lines 41:47) (Image: library lines 216:228) (Image: library lines 244:259)"
},

{
    "location": "functions-overview.html#AbstractPlotting.barplot",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.barplot",
    "category": "function",
    "text": "AbstractPlotting.barplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.barplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#barplot-1",
    "page": "Plotting functions overview",
    "title": "barplot",
    "category": "section",
    "text": "barplotAvailable attributes and their defaults for BarPlot{...} are:   color        :black\n  colormap     :viridis\n  colorrange   AbstractPlotting.Automatic()\n  fillto       0.0\n  marker       GeometryTypes.HyperRectangle\n  strokecolor  :white\n  strokewidth  0\n  width        AbstractPlotting.Automatic()(Image: library lines 79:80) (Image: library lines 27:27)"
},

{
    "location": "functions-overview.html#AbstractPlotting.poly",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.poly",
    "category": "function",
    "text": "AbstractPlotting.poly(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.poly(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#poly-1",
    "page": "Plotting functions overview",
    "title": "poly",
    "category": "section",
    "text": "polyAvailable attributes and their defaults for Poly{...} are:   color        :black\n  colormap     :viridis\n  colorrange   AbstractPlotting.Automatic()\n  linestyle    nothing\n  shading      false\n  strokecolor  RGBA{Float32}(0.0f0,0.0f0,0.0f0,0.0f0)\n  strokewidth  0.0\n  visible      true(Image: library lines 32:38) (Image: library lines 84:106) (Image: library lines 169:177) (Image: library lines 87:116) (Image: library lines 168:216)"
},

{
    "location": "functions-overview.html#AbstractPlotting.band",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.band",
    "category": "function",
    "text": "AbstractPlotting.band(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.band(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#band-1",
    "page": "Plotting functions overview",
    "title": "band",
    "category": "section",
    "text": "bandAvailable attributes and their defaults for Band{...} are:   alpha           1.0\n  color           RGBA{Float32}(1.0f0,0.0f0,0.0f0,0.2f0)\n  colormap        :viridis\n  colorrange      AbstractPlotting.Automatic()\n  interpolate     false\n  linewidth       1\n  overdraw        false\n  shading         true\n  transparency    false\n  visible         true"
},

{
    "location": "functions-overview.html#AbstractPlotting.slider",
    "page": "Plotting functions overview",
    "title": "AbstractPlotting.slider",
    "category": "function",
    "text": "AbstractPlotting.slider(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\nAbstractPlotting.slider(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "functions-overview.html#slider-1",
    "page": "Plotting functions overview",
    "title": "slider",
    "category": "section",
    "text": "sliderAvailable attributes and their defaults for Slider{...} are:   backgroundcolor    (:gray, 0.01)\n  buttoncolor        :white\n  buttonsize         15\n  buttonstroke       1.5\n  buttonstrokecolor  :black\n  position           (0, 0)\n  slidercolor        (:gray, 0.6)\n  sliderheight       50\n  sliderlength       200\n  start              AbstractPlotting.Automatic()\n  strokecolor        (:black, 0.4)\n  strokewidth        1\n  textcolor          :black\n  textsize           15\n  value              0\n  valueprinter       AbstractPlotting.default_printer(Image: library lines 71:82) (Image: library lines 120:164) (Image: library lines 255:299) (Image: library lines 305:391) (Image: library lines 396:539)"
},

{
    "location": "functions-overview.html#vbox-1",
    "page": "Plotting functions overview",
    "title": "vbox",
    "category": "section",
    "text": "vboxAvailable attributes and their defaults for Combined{AbstractPlotting.vbox,T} where T are: (Image: library lines 60:80) (Image: library lines 266:277) (Image: library lines 71:82) (Image: library lines 120:164) (Image: library lines 305:391) (Image: library lines 396:539) (Image: library lines 264:289) (Image: library lines 4:10) (Image: library lines 19:23)"
},

{
    "location": "signatures.html#",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "page",
    "text": ""
},

{
    "location": "signatures.html#Plot-function-signatures-1",
    "page": "Plot function signatures",
    "title": "Plot function signatures",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#General-function-signatures-and-usage-1",
    "page": "Plot function signatures",
    "title": "General function signatures and usage",
    "category": "section",
    "text": ""
},

{
    "location": "signatures.html#Create-a-new-plot-inside-a-new-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot inside a new scene object",
    "category": "section",
    "text": "func(args...; kw_args...)where func are the atomics function, e.g. lines, scatter, surface, etc. For a list of the available atomics functions, see Plotting functions overview."
},

{
    "location": "signatures.html#Create-a-new-plot-as-a-subscene-of-the-specified-scene-object-1",
    "page": "Plot function signatures",
    "title": "Create a new plot as a subscene of the specified scene object",
    "category": "section",
    "text": "func(scene::SceneLike, args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-current_scene()-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the current_scene()",
    "category": "section",
    "text": "func!(args...; kw_args...)"
},

{
    "location": "signatures.html#Add-a-plot-in-place-to-the-specified-scene-as-a-subscene-1",
    "page": "Plot function signatures",
    "title": "Add a plot in-place to the specified scene as a subscene",
    "category": "section",
    "text": "func!(scene::SceneLike, args...; kw_args...)"
},

{
    "location": "signatures.html#AbstractPlotting.convert_arguments",
    "page": "Plot function signatures",
    "title": "AbstractPlotting.convert_arguments",
    "category": "function",
    "text": "Enables to use scatter like a surface plot with x::Vector, y::Vector, z::Matrix spanning z over the grid spanned by x y\n\n\n\n\n\nconvert_arguments(P, x, y, z)::(Vector)\n\nTakes vectors x, y, and z and turns it into a vector of 3D points of the values from x, y, and z. P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input GeometryPrimitive x and decomposes it to points. P is the plot Type (it is optional).\n\n\n\n\n\nAccepts a Vector of Pair of Points (e.g. [Point(0, 0) => Point(1, 1), ...]) to encode e.g. linesegments or directions.\n\n\n\n\n\nconvert_arguments(P, y)::Vector\n\nTakes vector y and generates a range from 1 to the length of y, for plotting on an arbitrary x axis.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y)::(Vector)\n\nTakes vectors x and y and turns it into a vector of 2D points of the values from x and y.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes 2 ClosedIntervals\'s x, y, and an AbstractMatrix z, and converts the closed range to linspaces with size(z, 1/2) P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(x)::(String)\n\nTakes an input AbstractString x and converts it to a string.\n\n\n\n\n\nconvert_arguments(P, x)::(Vector)\n\nTakes an input HyperRectangle x and decomposes it to points.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x::VecOrMat, y::VecOrMat, z::Matrix)\n\nTakes 3 AbstractMatrix x, y, and z, converts them to Float32 and outputs them in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes an AbstractMatrix, converts the dimesions n and m into ClosedInterval, and stores the ClosedInterval to n and m, plus the original matrix in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, f)::(Vector, Vector, Matrix)\n\nTakes vectors x and y and the function f, and applies f on the grid that x and y span. This is equivalent to f.(x, y\'). P is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, ClosedInterval, Matrix}\n\nTakes an array of {T, 3} where T, converts the dimesions n, m and k into ClosedInterval, and stores the ClosedInterval to n, m and k, plus the original array in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, i)::(Vector, Vector, Vector, Matrix)\n\nTakes 3 AbstractVector x, y, and z and the AbstractMatrix i, and puts everything in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(P, x, y, z, f)::(Vector, Vector, Vector, Matrix)\n\nTakes AbstractVector x, y, and z and the function f, evaluates f on the volume spanned by x, y and z, and puts x, y, z and f(x,y,z) in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a mesh out of those, under the assumption that every 3 points form a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, xyz::AbstractVector)::GLNormalMesh\n\nTakes an input mesh and a vector xyz representing the vertices of the mesh, and creates indices under the assumption, that each triplet in xyz forms a triangle.\n\n\n\n\n\nconvert_arguments(Mesh, x, y, z, indices)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a triangle mesh out of those, using the faces in indices, which can be integers (every 3 -> one triangle), or GeometryTypes.Face{N, <: Integer}.\n\n\n\n\n\nconvert_arguments(Mesh, vertices, indices)::GLNormalMesh\n\nTakes vertices and indices, and creates a triangle mesh out of those. See to_vertices and to_triangles for more informations about accepted types.\n\n\n\n\n\n"
},

{
    "location": "signatures.html#Detailed-function-signatures-1",
    "page": "Plot function signatures",
    "title": "Detailed function signatures",
    "category": "section",
    "text": "The input arguments are handled by the convert_arguments function, which handles a large variety of inputs. The signatures accepted by convert_arguments are also those accepted by the plotting functions.Accepted signatures are as follows:convert_argumentsSee Plot attributes for the available plot attributes."
},

{
    "location": "plot-attributes.html#",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "page",
    "text": ""
},

{
    "location": "plot-attributes.html#Plot-attributes-1",
    "page": "Plot attributes",
    "title": "Plot attributes",
    "category": "section",
    "text": "using MakieBelow is the list of all of the available plot attributes for Makie. You can also get this by doinghelp_attributes(Typ[; extended = true])where Typ is the plot type.To view a plot\'s attributes and their values, you can call plot.attributes to view the raw output, or plot.attributes.attributes to get a Dict of the attribute keys and their values.p = scatter(rand(10), rand(10))[end]; # use `[end]` to access the plot\np.attributes\np.attributes.attributes"
},

{
    "location": "plot-attributes.html#List-of-attributes-1",
    "page": "Plot attributes",
    "title": "List of attributes",
    "category": "section",
    "text": "Symbol Description\nabsorption Float32. Sets the absorption value for volume plots.\nalgorithm Algorithm to be used for volume plots. Can be one of :iso, :absorption, :mip, :absorptionrgba, or :indexedabsorption.\nalign (:pos, :pos). Specify the text alignment, where :pos can be :left, :center, or :right.\nalpha Float in [0,1]. The alpha value (transparency).\ncolor Symbol or Colorant. The color of the main plot element (markers, lines, etc.). Can be a color symbol/string like :red, or a Colorant.  Can also be an array or matrix of \'z-values\' that are converted into colors by the colormap automatically.\ncolormap The color map of the main plot. Call available_gradients() to see what gradients are available. Can also be used with any Vector{<: Colorant}, or e.g. [:red, :black], or ColorSchemes.jl colormaps (by colormap = ColorSchemes.<colorscheme name>.colors).\ncolorrange A tuple (min, max) where min and max specify the data range to be used for indexing the colormap. E.g. color = [-2, 4] with colorrange = (-2, 4) will map to the lowest and highest color value of the colormap.\nfillrange Bool. Toggles range filling in contour plots.\nfont String. Specifies the font, and can choose any font available on the system.\nglowcolor Color Type. Color of the marker glow (outside the border) in scatter plots.\nglowwidth Number. Width of the marker glow in scatter plots.\nimage The image to be plotted on the plot.\ninterpolate Bool. For heatmap and images. Toggles color interpolation between nearby pixels.\nisorange Float32. Sets the isorange for volume plots.\nisovalue Float32. Sets the isovalue for volume plots.\nlevels Integer. Number of levels for a contour-type plot.\nlinestyle Symbol. Style of the line (for line and linesegments plots). Available styles are :dash, :dot, :dashdot, and :dashdotdot. You can also supply an array describing the length of each gap/fill.\nlinewidth Number. Width of the line in line and linesegments plots.\nmarker Symbol, Shape, or AbstractVector.\nmarker_offset Array of GeometryTypes.Point\'s. Specifies the offset coordinates for the markers. See the Marker offset example.\nmarkersize Number or AbstractVector. Specifies size (radius pixels) of the markers.\nposition NTuple{2,Float}, (x, y). Specify the coordinates to position text at.\nrotation Float32. Specifies the rotation in radians.\nrotations AbstractVector{Float32}. Similar to :rotation, except it specifies the rotations for each element in the plot.\nshading Bool. Specifies if shading should be on or not (for meshes).\nstrokecolor Color Type. Color of the marker stroke (border).\nstrokewidth Number. Width of the marker stroke (in pixels).\ntextsize Integer. Font pointsize for text.\ntransformation (:plane, location). Transforms the :plane to the specified location. Possible :plane\'s are :xy, :yz, and :xz.\nvisible Bool. Toggle visibility of plot."
},

{
    "location": "colors.html#",
    "page": "Colors",
    "title": "Colors",
    "category": "page",
    "text": ""
},

{
    "location": "colors.html#Colors-1",
    "page": "Colors",
    "title": "Colors",
    "category": "section",
    "text": "Makie has support for you to color your plots however you want to. You can manipulate the color of a plot by using the color keyword, nd change the colormap by using the colormap keyword."
},

{
    "location": "colors.html#Colors-2",
    "page": "Colors",
    "title": "Colors",
    "category": "section",
    "text": "For line plots, you can provide a single color or symbol that will color the entire line; or, you can provide an array of values that map to colors using a colormap.Any color symbol supported by Color.jl is supported, check out their page on named colors to see what you can get away with!  You can also pass RGB or RGBA values."
},

{
    "location": "colors.html#Colormaps-1",
    "page": "Colors",
    "title": "Colormaps",
    "category": "section",
    "text": "Colormaps are mappings of values to colors.  You can supply the coloring values using the color keyword argument, and the colormap will automatically be adjusted to fit those values.  THe default colormap is viridis, which looks like this:@example_database(\"Viridis color scheme\")You can copy this code and substitute cmap with any Colormap to show the colormap.Makie supports multiple colormap libraries.  Currently, Colors and ColorBrewer are inbuilt, and ColorSchemes and PerceptualColourMaps work as well.Natively, Makie supports these ColorBrewer colormaps (see their docs as well):@example_database(\"colormaps\")On top of this, you can use any ColorSchemes colormap as colormap = ColorSchemes.<colormap name>.colors.  Check out the ColorSchemes.jl docs for more information!Similarly, the PerceptualColourMaps library of colormaps can also be used (though it requires PyCall and may not play well with PackageCompiler system images).  This library is geared more towards \'publication quality\' plots, and you can see examples of its colormaps on the repo page."
},

{
    "location": "colors.html#Color-legends-1",
    "page": "Colors",
    "title": "Color legends",
    "category": "section",
    "text": "To show the colormap and scaling, you can use a color legend.  Color legends can be automatically produced by the colorlegend function, to which a Plot object must be passed.  Its range and the colormap it shows can also be manually altered, as can many of its attributes.To simply produce a color legend and plot it to the left of the original plot, you can produce a colorlegend and vbox it.  In the example below, p1 is the initial Scene, with only one plot.scene = vbox(\n  p1,\n  colorlegend(\n    p1[end],            # get Plot object from Scene\n    camera = campixel!, # let vbox decide scene limits\n    raw = true          # no axes, other things as well\n  )\n)You can also pass keyword attributes to it, as shown below.@example_database(\"Line with varying colors\")"
},

{
    "location": "theming.html#",
    "page": "Config file",
    "title": "Config file",
    "category": "page",
    "text": ""
},

{
    "location": "theming.html#Config-file-1",
    "page": "Config file",
    "title": "Config file",
    "category": "section",
    "text": "One can store a config file in joinpath(homedir(), \".config\", \"makie\", \"theme.jl\") E.g. store this in theme.jl:Attributes(\n    font = \"Chilanka\",\n    backgroundcolor = :gray,\n    color = :blue,\n    linestyle = :dot,\n    linewidth = 3\n)To start Makie always with this theme!"
},

{
    "location": "axis.html#",
    "page": "Axis",
    "title": "Axis",
    "category": "page",
    "text": ""
},

{
    "location": "axis.html#Axis-1",
    "page": "Axis",
    "title": "Axis",
    "category": "section",
    "text": "The axis is just a scene object, making it easy to manipulate and share between plots. Axis objects also contains the mapping you want to apply to the data and can interactively be changed. An Axis object can be created from any boundingbox and inserted into any plot.There are two types of axes: Axis2D and Axis3D."
},

{
    "location": "axis.html#Interacting-with-the-Axis-1",
    "page": "Axis",
    "title": "Interacting with the Axis",
    "category": "section",
    "text": "One can quite easily interact with the attributes of the axis like with any other plot.You can access the axis of a scene by doingaxis = scene[Axis]The axis attributes are nested, and there are different attributes depending on whether it is an Axis2D or Axis3D object.You can access the nested attributes in multiple ways. Take the nested attribute axis -> :names -> :axisnames, for example:axis[:names, :axisnames] = (\"x\", \"y\", \"z\")\naxis[:names][:axisnames] = (\"x\", \"y\", \"z\")\naxis = (names = (axisnames = (\"x\", \"y\", \"z\"),),)"
},

{
    "location": "axis.html#Examples-1",
    "page": "Axis",
    "title": "Examples",
    "category": "section",
    "text": "@example_database(\"Unicode Marker\")@example_database(\"Axis + Surface\")@example_database(\"Axis theming\")"
},

{
    "location": "axis.html#Axis2D-1",
    "page": "Axis",
    "title": "Axis2D",
    "category": "section",
    "text": ""
},

{
    "location": "axis.html#Axis2D-attributes-groups-1",
    "page": "Axis",
    "title": "Axis2D attributes groups",
    "category": "section",
    "text": "Symbol Description\nframe See the detailed descriptions for frame attributes.\ngrid See the detailed descriptions for grid attributes.\nnames See the detailed descriptions for names attributes.\nticks See the detailed descriptions for ticks attributes."
},

{
    "location": "axis.html#:grid-1",
    "page": "Axis",
    "title": ":grid",
    "category": "section",
    "text": "Symbol Description\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth NTuple{2, Number}. Width of the x and y grids."
},

{
    "location": "axis.html#:ticks-1",
    "page": "Axis",
    "title": ":ticks",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{2,(:pos, :pos)}. Specify the text alignment for the axis ticks, where :pos can be :left, :center, or :right\nfont NTuple{2,String}. Specifies the font and can name any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis tick labels and the axes themselves.\nlinecolor NTuple{2,Symbol or Colorant}. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth NTuple{2,Number}. Width of the axes ticks.\nrotation NTuple{3,Float32}. Specifies the rotations for each axis\'s ticks, in radians.\ntextcolor NTuple{2,Symbol or Colorant}. Specifies the color of the axes ticks. Can be a color symbol/string like :red, or a Colorant.\ntextsize NTuple{2,Int}. Font pointsize for tick labels.\ntitle_gap Number. Specifies the gap (in pixels) between the axis titles and the axis tick labels."
},

{
    "location": "axis.html#:frame-1",
    "page": "Axis",
    "title": ":frame",
    "category": "section",
    "text": "Symbol Description\narrow_size Number. Size of the axes arrows.\naxis_arrow Bool. Toggles the axes arrows.\naxis_position \nframes NTuple{2,NTuple{2,Bool}}.\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinestyle \nlinewidth Number. Widths of the axes frame lines."
},

{
    "location": "axis.html#:names-1",
    "page": "Axis",
    "title": ":names",
    "category": "section",
    "text": "Symbol Description\nalign (:pos, :pos). Specify the text alignment, where :pos can be :left, :center, or :right.\naxisnames NTuple{2,String}. Specifies the text labels for the axes.\nfont NTuple{2,String}. Specifies the font and can name any font available on the system.\nrotation NTuple{3,Float32}. Specifies the rotations for each axis\'s label, in radians.\ntextcolor NTuple{2,Symbol or Colorant}. Specifies the color of the axes labels. Can be a color symbol/string like :red, or a Colorant.\ntextsize Integer. Font pointsize for text."
},

{
    "location": "axis.html#Axis3D-1",
    "page": "Axis",
    "title": "Axis3D",
    "category": "section",
    "text": ""
},

{
    "location": "axis.html#Axis3D-attributes-groups-1",
    "page": "Axis",
    "title": "Axis3D attributes groups",
    "category": "section",
    "text": "Symbol Description\nframe See the detailed descriptions for frame attributes.\nnames See the detailed descriptions for names attributes.\nscale NTuple{3,Float}. Specifies the scaling for the axes.\nshowaxis NTuple{3,Bool}. Specifies whether to show the axes.\nshowgrid NTuple{3,Bool}. Specifies whether to show the axis grids.\nshowticks NTuple{3,Bool}. Specifies whether to show the axis ticks.\nticks See the detailed descriptions for ticks attributes."
},

{
    "location": "axis.html#:ticks-2",
    "page": "Axis",
    "title": ":ticks",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{3,(:pos, :pos)}. Specify the text alignment for the axis ticks, where :pos can be :left, :center, or :right.\nfont NTuple{3,String}. Specifies the font for the axis ticks, and can choose any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis ticks and the axes themselves.\nrotation NTuple{3,Quaternion{Float32}}. Specifies the rotations for each axis\'s ticks, in radians.\ntextcolor NTuple{3,Symbol or Colorant}. Specifies the color of the axes ticks. Can be a color symbol/string like :red, or a Colorant.\ntextsize Integer. Font pointsize for text."
},

{
    "location": "axis.html#:frame-2",
    "page": "Axis",
    "title": ":frame",
    "category": "section",
    "text": "Symbol Description\naxiscolor Symbol or Colorant. Specifies the color of the axes. Can be a color symbol/string like :red, or a Colorant.\nlinecolor Symbol or Colorant. Specifies the color of the grid lines. Can be a color symbol/string like :red, or a Colorant.\nlinewidth Number. Width of the axes lines."
},

{
    "location": "axis.html#:names-2",
    "page": "Axis",
    "title": ":names",
    "category": "section",
    "text": "Symbol Description\nalign NTuple{3,(:pos, :pos)}. Specify the text alignment for the axis labels, where :pos can be :left, :center, or :right.\naxisnames NTuple{3,String}. Specifies the axis labels.\nfont NTuple{3,String}. Specifies the font for the axis labels, and can choose any font available on the system.\ngap Number. Specifies the gap (in pixels) between the axis labels and the axes themselves.\nrotation NTuple{3,Quaternion{Float32}}. Specifies the rotations for each axis\'s label, in radians.\ntextcolor NTuple{3,Symbol or Colorant}. Specifies the color of the axes labels. Can be a color symbol/string like :red, or a Colorant.\ntextsize NTuple{3,Int}. Font pointsize for axes labels."
},

{
    "location": "interaction.html#",
    "page": "Interaction",
    "title": "Interaction",
    "category": "page",
    "text": "CurrentModule = Makieusing Makieusing Makieusing Makie"
},

{
    "location": "interaction.html#Interaction-1",
    "page": "Interaction",
    "title": "Interaction",
    "category": "section",
    "text": "Makie offers a sophisticated referencing system to share attributes across the Scene in your plot. This is great for interaction, animations and saving resources – also if the backend decides to put data on the GPU you might even share those in GPU memory.Interaction and animations in Makie are handled by using Observables. An \"observable\", called Node in Makie, is a structure that can have its value updated interactively. Interaction, animations and more are done using Nodes and event triggers.In this page we overview how the Nodes pipeline works, how event-triggering works, and we give an introduction to the existing \"atomic\" functions for interaction. Examples that use interaction can be found in the Examples/interaction page (see Example Gallery as well)."
},

{
    "location": "interaction.html#Node-interaction-pipeline-1",
    "page": "Interaction",
    "title": "Node interaction pipeline",
    "category": "section",
    "text": ""
},

{
    "location": "interaction.html#The-Node-structure-1",
    "page": "Interaction",
    "title": "The Node structure",
    "category": "section",
    "text": "A Node is a Julia structure that allows its value to be updated interactively. This means that anything that uses a Node could have its behavior updated interactively, as we will showcase in this page.Let\'s start by creating a Node:x = Node(0.0) # set up a Node, and give it a default value of 0.0The value of the x can be changed simply using push!:push!(x, 3.14);\nxNotice that you can access the value of a Node by indexing it with nothing, i.e. x[]. However, we recommend to use the function to_value to get the value of a Node, because to_value is a general function that works with all types instead of only Nodes. E.g.:to_value(x)"
},

{
    "location": "interaction.html#Nodes-depending-on-other-Nodes-1",
    "page": "Interaction",
    "title": "Nodes depending on other Nodes",
    "category": "section",
    "text": "You can create a node depending on another node using lift:f(a) = a^2\ny = lift(a -> f(a), x)Now, for every value of the Node x, the derived Node y will hold the value f(x). Updating the value of x will also update the value of y!For example:push!(x, 10.0)\nfor i in (x, y)\n    println(to_value(i))\nendThat is to say, the Node y maps the function f (which is a -> a^2 in this case) on x whenever the Node x is updated, and updates the corresponding value in y. This is the basis of updating Nodes, and is used for updating plots in Makie. Any plot created based on this pipeline system will get updated whenever the nodes it is based on are updated!Note: for now, lift is just an alias for Observables.map, and Node is just an alias for Observables.Observable. This allows decoupling of the APIs."
},

{
    "location": "interaction.html#Event-triggering-1",
    "page": "Interaction",
    "title": "Event triggering",
    "category": "section",
    "text": "Often it is the case that you want an event to be triggered each time a Node has its value updated. This is done using the on-do block from Observables. For example, the following code block \"triggers\" whenever x\'s value is changed:on(x) do val\n    println(\"x just got the value $val\")\nendAs you can see, at we have run this block in Julia, but nothing happened yet. Instead, a function was defined. However, upon doing:push!(x, 5.0);Boom! The event of the on-do block was triggered! We will be using this in the following paragraphs to establish interactiveness.For more info please have a look at Observables."
},

{
    "location": "interaction.html#Atomic-interaction-functions-1",
    "page": "Interaction",
    "title": "Atomic interaction functions",
    "category": "section",
    "text": "This section overviews some simple and specific functions that make interaction much simpler.coming soon..."
},

{
    "location": "interaction.html#Animation-using-time-1",
    "page": "Interaction",
    "title": "Animation using time",
    "category": "section",
    "text": "To animate a scene, you need to create a Node, e.g.:time = Node(0.0)and use lift on the Node to set up a pipeline to access its value. For example:scene = Scene()\ntime = Node(0.0)\nmyfunc(v, t) = sin.(v, t)\n\nscene = lines!(\n    scene,\n    lift(t -> f.(range(0, stop=2pi, length=50), t), time)\n)now, whenever the Node time is updated (e.g. when you push! to it), the plot will also be updated.push!(time, Base.time())"
},

{
    "location": "interaction.html#Interaction-using-the-mouse-1",
    "page": "Interaction",
    "title": "Interaction using the mouse",
    "category": "section",
    "text": "A few default Nodes are already implemented in a scene\'s Events (see them in scene.events), so to use them in your interaction pipeline, you can simply lift them.For example, for interaction with the mouse cursor, lift the mouseposition signal.pos = lift(scene.events.mouseposition) do mpos\n    # do stuff\nend"
},

{
    "location": "interaction.html#Correct-way-to-animate-a-plot-1",
    "page": "Interaction",
    "title": "Correct way to animate a plot",
    "category": "section",
    "text": "You can animate a plot in a for loop:r = 1:10\nfor i = 1:length(r)\n    push!(s[:markersize], r[i])\n    AbstractPlotting.force_update!()\n    sleep(1/24)\nendBut, if you push! to a plot, it doesn\'t necessarily get updated whenever an attribute changes, so you must call force_update!().A better way to do it is to access the attribute of a plot directly using its symbol, and when you change it, the plot automatically gets updated live, so you no longer need to call force_update!():for i = 1:length(r)\n    s[:markersize] = r[i]\n    # AbstractPlotting.force_update!() is no longer needed\n    sleep(1/24)\nendSimilarly, for plots based on functions:scene = Scene()\nv = range(0, stop=4pi, length=50)\nf(v, t) = sin(v + t) # some function\ns = lines!(\n    scene,\n    lift(t -> f.(v, t), time),\n)[end];\n\nfor i = 1:length(v)\n    push!(time, i)\n    sleep(1/24)\nend"
},

{
    "location": "output.html#",
    "page": "Output",
    "title": "Output",
    "category": "page",
    "text": ""
},

{
    "location": "output.html#Output-1",
    "page": "Output",
    "title": "Output",
    "category": "section",
    "text": "Makie overloads the FileIO interface, so it is simple to save plots as images or videos."
},

{
    "location": "output.html#Static-plots-1",
    "page": "Output",
    "title": "Static plots",
    "category": "section",
    "text": "To save a scene as an image, you can just write e.g.:Makie.save(\"plot.png\", scene)\nMakie.save(\"plot.jpg\", scene)where scene is the scene handle.In the backend, ImageMagick is used for the image format conversions."
},

{
    "location": "output.html#Stepper-plots-1",
    "page": "Output",
    "title": "Stepper plots",
    "category": "section",
    "text": "A Stepper is a scene type that simplifies the cumulative plotting, modifying of an existing scene, and saving of scenes. These are great for showing off progressive changes in plots, such as demonstrating the effects of theming or changing data.You can initialize a Stepper by doing:st = Stepper(scene, @replace_with_a_path)and save the scene content & increment the stepper by using:step!(st)@example_database(\"Stepper demo\")"
},

{
    "location": "output.html#AbstractPlotting.record",
    "page": "Output",
    "title": "AbstractPlotting.record",
    "category": "function",
    "text": "record(func, scene, path; framerate = 24)\n\nusage:\n\n    record(scene, \"test.gif\") do io\n        for i = 1:100\n            scene.plots[:color] = ...# animate scene\n            recordframe!(io) # record a new frame\n        end\n    end\n\n\n\n\n\nrecord(func, scene, path, iter)\n\nusage:\n\n    record(scene, \"test.gif\", 1:100) do i\n        scene.plots[:color] = ...# animate scene\n    end\n\n\n\n\n\n"
},

{
    "location": "output.html#Animated-plots-1",
    "page": "Output",
    "title": "Animated plots",
    "category": "section",
    "text": "It is also possible to output animated plots as videos (note that this requires ffmpeg to be installed and properly configured on your computer (test this by running ffmpeg -version from a terminal window).)recordFor recording of videos (either as .mp4 or .gif), you can do:record(scene, \"video.mp4\", itr) do i\n    func(i) # or some other animation in scene\nendwhere itr is an iterator and scene is the scene handle.It is also possible to record to gifs:record(scene, \"video.gif\", itr) do i\n    func(i) # or some other animation in scene\nendIn both cases, the returned value is a path pointing to the location of the recorded file."
},

{
    "location": "output.html#Example-usage-1",
    "page": "Output",
    "title": "Example usage",
    "category": "section",
    "text": "@example_database(\"Record Video\")For more info, consult the Example Gallery."
},

{
    "location": "why-makie.html#",
    "page": "Why Makie?",
    "title": "Why Makie?",
    "category": "page",
    "text": ""
},

{
    "location": "why-makie.html#Why-Makie?-1",
    "page": "Why Makie?",
    "title": "Why Makie?",
    "category": "section",
    "text": "Makie is a high level plotting interface for GLVisualize, with a focus on interactivity and speed.It can also be seen as a prototype for a new design of Plots.jl, since it will implement a very similar interface and incorporate a lot of the ideas.A fresh start instead of the already available GLVisualize backend for Plots.jl was needed for the following reasons:Plots.jl was written to create static plots without any interaction. This is deeply reflected in the internal design and makes it hard to integrate the high performance interaction possibilities from GLVisualize.\nPlots.jl has many high level plotting packages as a backend which lead to a very inconsistent design for the backends. For example, there is no straight interface a backend needs to implement. The backend abstraction happens at a very high level and the Plots.jl design relies on the high-level backends to fill in a lot of functionality - which lead to a lot of duplicated work for the lower level backends and a lot of inconsistent behavior since the code isn\'t shared between backends. It also means that it is a lot of work to maintain a backend.\nThe attributes a plot/series contains and where the default creation happens is opaque and not well documented. Sometimes it\'s the task of the backend to create defaults for missing attributes, sometimes Plots.jl creates the defaults. A missing attribute is signalled in too many different ways (e.g. false, nothing, \"\") which then needs to be checked and filled in by the backend. This leads to making it very challenging to e.g. find the color of a line for different plot types and creates buggy, inconsistent and messy backend code.\nAs mentioned in point 2, there is not a single consistent low level drawing API. This also influences recipes, since there is not a straight mapping to a low level drawing API and therefore it\'s not that easy to compose. There should be a finite set of \"atomic\" drawing operations (which can\'t be decomposed further) which a backend needs to implement and the rest should be implemented via recipes using those atomic operations. So once a backend implements those, it will support all of the plotting operations and only minor maintenance work needs to be done from that point on.\nBackend loading is done in Plots.jl via evaling the backend code. This has at 4 negative consequences:\nBackend code can\'t be precompiled leading to longer load times\nBackend dependencies are not in the Plots.jl REQUIRE file\nBackend dependencies get loaded via a function that gets evaled, so it\'s a bit awkward to use those dependencies in the function inside a backend\nWorld age issues because of the eval"
},

]}
