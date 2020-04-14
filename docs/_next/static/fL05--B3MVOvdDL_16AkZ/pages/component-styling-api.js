(window.webpackJsonp=window.webpackJsonp||[]).push([["7342"],{"6lhf":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("kOwS"),a=n("qNsG"),i=(n("q1tI"),n("7ljp")),r=n("rQ2n"),l=n("j53b"),s={},c="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{mdxType:"Container"},Object(i.b)(l.a,{title:"Component Styling API",published:"18-06-2018",mdxType:"PostHeader"}),Object(i.b)("i",null,"This is a write up of a work in progress talk I gave at the ",Object(i.b)("a",{href:"http://webdeldn.rocks"},"WebdeLDN meetup")," last year."),Object(i.b)("p",null,"I read a book one time called 'Refactoring your wetware'. There was an\ninteresting part about thinking about a problem as if you were looking at it\nfrom 10 thousand feet up in the air. "),Object(i.b)("p",null,"I was driving in Sunday morning traffic one time. I was on my way from San\nFrancisco to a flea market. The GPS in my car told me there was an exit coming\nup I should take and that I should get into one of the two lanes on the right.\nAbout a dozen blinkers turned on at the exact same time and cars started to\nmerge into the right two lanes. From 10k feet up i bet that looks pretty wild.\nYou hear an automated voice. All cars put on their blinker at the same time to\nbreak off from the highway to head to the same destination. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Two completely different view points"),"\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://github.com/mrmrs/component-api-talk/blob/master/slides/fff.jpg?raw=true",alt:"View of Cars"})),"\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://github.com/mrmrs/component-api-talk/blob/master/slides/ggg.jpg?raw=true",alt:"View from Cars"}))),Object(i.b)("p",null,"I'm here to talk about Design systems, Css, Js and of course Css in Js.\nAnd what does that look like if we as a community try to think at 10,000 feet?"),Object(i.b)("p",null,"When I say 10,000 feet I don't just mean think abstractly. I mean actually do\nit.  You should visualize yourself being far above something. But what is the\nthing?  One thing I meditate on is looking at a timeline of history from very\nfar away. And if we look at a timeline of how humans have designed and built\nthings throughout history...how do the problems and the process in which we\nsolve them evolve? Particularly since we started styling digital ui with css?  "),Object(i.b)("p",null,"A guy I collaborate with that goes by the name John Otander ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/johno"}),"(@johno)")," is pretty\ngood at thinking at 10,000 feet. He comes up with ",Object(i.b)("em",{parentName:"p"},"wild")," ideas. Last year he decided to\ndownload the css for top million websites, in 1 month intervals, dating back to\n2005 (if available)."),Object(i.b)("p",null,"My first thought was - that's pretty neat. We can show people their css graphed\nout over time. "),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://github.com/mrmrs/component-api-talk/blob/master/slides/hhi.jpg?raw=true",alt:"Graphs"}))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://github.com/mrmrs/component-api-talk/blob/master/slides/hhj.jpg?raw=true",alt:"Graphs"}))),Object(i.b)("p",null,"You can learn a bunch just by analyzing your own site.  ",Object(i.b)("em",{parentName:"p"},"But, what does it look\nlike to see this at 10,000 feet?")),Object(i.b)("p",null,"[Ask Audience]","\nWhat do you think you could learn by analyzing this data? What kind of tools could you build with it?"),Object(i.b)("p",null,"Some possibilities that come to mind for me:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Can analyze values and look for trends"),Object(i.b)("li",{parentName:"ul"},"Find most common property value rules for given components with common class names"),Object(i.b)("li",{parentName:"ul"},"Identify pattern outliers"),Object(i.b)("li",{parentName:"ul"},"Find common mistakes and try to build automated tools to solve them"),Object(i.b)("li",{parentName:"ul"},"Could overlay other data: Browser usage, timeline of introduction of various technologies (frameworks, addiitons to the spec, etc.)"),Object(i.b)("li",{parentName:"ul"},"We can visualize the history of design systems. We can animate them and watch how they evolve over time! "),Object(i.b)("li",{parentName:"ul"},"Given an array of urls, you could visualize the intersection of common values\nfor things like: type scale, colors, background colors, font-family. This can\nhelp show how consistently your brand is implmented across a number of\ndifferent front-end code bases. Most companies have different code bases\nfor: their marketing site, their blog, their app, docs, external status\npage, and potentially a number of other micro sites. Having a feedback\nloop of common values can be helpful when trying to standardize an\nexisting palette, or creating a feedback loop moving forward to see if you\nare becoming more or less consistent.")),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/hturan"}),"Harley Turan"),", scraped a bunch of data and did exactly this. Here is a collection of color\npalettes pulled from multiple sites that belong to the same company visualized from 2009 through 2017."),Object(i.b)("img",{src:"https://github.com/mrmrs/component-api-talk/blob/master/slides/colors-time.gif?raw=true"}),Object(i.b)("p",null,"Now those are just a few half-baked ideas around what you can do to analyze static\nfiles. And I'd love to do nothing else then to sit and chat about what we can do with\nall of this data but that's a different story for a different time. "),Object(i.b)("p",null,"Below is a list of css properties. I often think of css as the styling api for\nhtml. At first glance it's a lot of stuff. Especially if you're a beginner. "),Object(i.b)("p",null,"But you can build a lot of pretty neat UI without worrying about a lot of these\nproperties and how they work. When I am a beginner one of the most difficult\nthings is figuring out what ",Object(i.b)("em",{parentName:"p"},"to")," worry about and what ",Object(i.b)("em",{parentName:"p"},"not to"),". I can confidently\nsay, when styling a button, I've never needed to set caption-side. Or\ncounter-increment, counter-reset, or volume for that matter. This doesn't mean you\nshould never use them, but they aren't common properties attached to button\nstyles."),Object(i.b)("p",null,"Can we use this pattern to potentially make front-end code more accessible for new people? "),Object(i.b)("p",null,"Components could, essentially have all of the necessary visual styling properties\nexposed, where a designer can configure the values they want to pass in."),Object(i.b)("p",null,"Instead of a blank slate, they could discover common things to account for\nwithin different components. The pseudo state :focus would be a tough thing to\nintuitively account for if you've never worked on the web before.  Offering it\nin configuration can at the very least, offer guidance around what to research. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"List of Css properties")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"accelerator\nazimuth\nbackground\nbackground-attachment\nbackground-color\nbackground-image\nbackground-position\nbackground-position-x\nbackground-position-y\nbackground-repeat\nbehavior\nborder\nborder-bottom\nborder-bottom-color\nborder-bottom-style\nborder-bottom-width\nborder-collapse\nborder-color\nborder-left\nborder-left-color\nborder-left-style\nborder-left-width\nborder-right\nborder-right-color\nborder-right-style\nborder-right-width\nborder-spacing\nborder-style\nborder-top\nborder-top-color\nborder-top-style\nborder-top-width\nborder-width\nbottom\ncaption-side\nclear\nclip\ncolor\ncontent\ncounter-increment\ncounter-reset\ncue\ncue-after\ncue-before\ncursor\ndirection\ndisplay\nelevation\nempty-cells\nfilter\nfloat\nfont\nfont-family\nfont-size\nfont-size-adjust\nfont-stretch\nfont-style\nfont-variant\nfont-weight\nheight\nime-mode\ninclude-source\nlayer-background-color\nlayer-background-image\nlayout-flow\nlayout-grid\nlayout-grid-char\nlayout-grid-char-spacing\nlayout-grid-line\nlayout-grid-mode\nlayout-grid-type\nleft\nletter-spacing\nline-break\nline-height\nlist-style\nlist-style-image\nlist-style-position\nlist-style-type\nmargin\nmargin-bottom\nmargin-left\nmargin-right\nmargin-top\nmarker-offset\nmarks\nmax-height\nmax-width\nmin-height\nmin-width\norphans\noutline\noutline-color\noutline-style\noutline-width\noverflow\noverflow-X\noverflow-Y\npadding\npadding-bottom\npadding-left\npadding-right\npadding-top\npage\npage-break-after\npage-break-before\npage-break-inside\npause\npause-after\npause-before\npitch\npitch-range\nplay-during\nposition\nquotes\n-replace\nrichness\nright\nruby-align\nruby-overhang\nruby-position\n-set-link-source\nsize\nspeak\nspeak-header\nspeak-numeral\nspeak-punctuation\nspeech-rate\nstress\nscrollbar-arrow-color\nscrollbar-base-color\nscrollbar-dark-shadow-color\nscrollbar-face-color\nscrollbar-highlight-color\nscrollbar-shadow-color\nscrollbar-3d-light-color\nscrollbar-track-color\ntable-layout\ntext-align\ntext-align-last\ntext-decoration\ntext-indent\ntext-justify\ntext-overflow\ntext-shadow\ntext-transform\ntext-autospace\ntext-kashida-space\ntext-underline-position\ntop\nunicode-bidi\n-use-link-source\nvertical-align\nvisibility\nvoice-family\nvolume\nwhite-space\nwidows\nwidth\nword-break\nword-spacing\nword-wrap\nwriting-mode\nz-index\nzoom\n")),Object(i.b)("p",null,"Some people have told me that Component Styling API is a horrible name for this\nconcept and they're likely correct. But I haven't come up with a better name\nyet, so please let me know if you've got some ideas. I do think the following\ndescriptions, from a website called wikipedia, are interesting to consider."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"API: Application programming interface")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"In general terms, it is a set of clearly defined methods of communication between various software components."\n"By abstracting the underlying implementation and only exposing objects or actions the developer needs, an API simplifies programming."\n"Thus, the design of an API attempts to provide only the tools a user would expect."')),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Application_programming_interface"}),"https://en.wikipedia.org/wiki/Application_programming_interface")),Object(i.b)("p",null,"When I'm styling a button, I don't expect to use volume. Or page-break. Or a\nnumber of other properties. The goal though is not to eliminate options, it's\nto narrow focus on the essential, allowing for expansion and exploration if\nnecessary. But this idea defining a component API has benefits extending beyond\nthis. "),Object(i.b)("p",null,"The most influential tip on how to think about designing a component I've ever\nseen is from Nicole Sullivan's excellent article ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/"}),"The media object saves\nhundreds of lines of\ncode")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"When I’m building a new object, the first thing I do is to figure out which parts are reusable components, and define what I know and do not know about them."\n"For example: Can be nested, Optional right button, Must clearfix"'),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://stubbornella.org"}),"Nicole Sullivan")))),Object(i.b)("p",null,"I can't recommend this process for designing and developing components enough.\nOne of the things I like about react and css in js, is that it's easy to work\nwithin this mental model. It's helpful to actively think and sketch out what\nyou know and what you don't know. This can help you build components that are\nmore resiliant, flexible, and reusable."),Object(i.b)("p",null,"So, say we defined some scales, or options to work with for the following\nproperties. "),Object(i.b)("h4",null,"Typography"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Font-family"),Object(i.b)("li",{parentName:"ul"},"Line-height"),Object(i.b)("li",{parentName:"ul"},"Type-scale"),Object(i.b)("li",{parentName:"ul"},"Measure (max line length)"),Object(i.b)("li",{parentName:"ul"},"Font Weights"),Object(i.b)("li",{parentName:"ul"},"Text Transform")),Object(i.b)("h4",null,"Layout"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Spacing"),Object(i.b)("li",{parentName:"ul"},"Width")),Object(i.b)("h4",null,"Theme"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Colors"),Object(i.b)("li",{parentName:"ul"},"Border Widths"),Object(i.b)("li",{parentName:"ul"},"Border Colors"),Object(i.b)("li",{parentName:"ul"},"Border Radii"),Object(i.b)("li",{parentName:"ul"},"Box Shadows")),Object(i.b)("h4",null,"Motion"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Animation speed"),Object(i.b)("li",{parentName:"ul"},"Easing Functions"),Object(i.b)("li",{parentName:"ul"},"Movement patterns ")),Object(i.b)("p",null,"Maybe this would look something like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'const theme = {\n  breakpoints: [\n    36, 48, 64\n  ],\n  fontFamily:[ \'"Gotham", "Avenir Next", "Proxima Nova",  "Helvetica"\' ],\n  fontSize: [\n    12, 14, 16, 20, 24, 32, 48, 64, 96, 128\n  ],\n  fontWeight: [ 400, 600, 700 ],\n  lineHeight: [ 1, 1.25, 1.5 ],\n  colors: [\n    { text: "#000", bg: "#fff" },\n    { text: "#374047", bg: "#f8f9f9" },\n    { text: "#7f8a93", bg: "#f8f9f9" },\n    { text: "#0077cc", bg: "#f8f9f9" },\n    { text: "#005da0", bg: "#f8f9f9" },\n    { text: "#00365d", bg: "#f8f9f9" },\n    { text: "#00a243", bg: "#fff" },\n  ],\n  borderStyle: [ \n    \'solid\', \n    \'double\', \n    \'dotted\' \n  ],\n  borderWidth: [ 0, 1, 2, 4 ],\n  borderDirection: [\n    \'all\', \n    \'top\',\n    \'bottom\' \n  ],\n  radii: [\n    0, 3, 5, 17, 9999\n  ],\n  space: [\n    0, 2, 4, 8, 16, 32, 64, 128, 256, 512\n  ],\n  measure: [ \'20em\', \'30em\', \'34em\' ],\n  boxShadow: [ \'0 0 16px rgba(0,0,0,.2)\' ],\n}\n\nexport default theme\n')),Object(i.b)("p",null,"Some of you might have already seen a file like this before. Maybe it was a js\nfile, maybe it was a sass, less, or stylus file. This is pretty boring and\nthere isn't anything new about it. It's just a theme."),Object(i.b)("p",null,"Thinking about the previous quote by Nicole Sullivan...  What if I had to\ndesign a button and I wanted it to use values from our design system. We could\ndefine the styling API for a button. (People love buttons.)  Potentially, we\ncould define a template for a button styling API.  So we'd need to think about\nwhich properties we ",Object(i.b)("em",{parentName:"p"},"always")," want exposed. I think it's safe to say that people\nshould be able to set the background color on a button. The default color isn't\nperfect or anything. It's reasonable for a well designed interface to have buttons with\ndifferent background colors. As a section in the button API we'd also want to\ndeclare which properties should be available to style on hover. I believe it's reasonable\nto change the background color on hover. So I think that should also be a part of the\nAPI. Returning to the base part of the button API, it would be seemingly\nreasonable to be able to set the font-weight to something other than the\ndefault. In all my years of browsing the web I've never hovered on a button and\nseen the font-weight change and thought \"This is so nice.\" My first thought is\ngenerally \"Well this must be a bug.\" So here we could choose to leave font-weight out of\nthe hover, focus, and active sections in the API. "),Object(i.b)("p",null,"A generic template for a button styling API might look like this: "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"import theme from './theme'\n\nconst buttonThemeTemplate = {\n\n  // Typography \n  fontFamily: [ ],\n  fontSize: [ ],\n  fontWeight: [ ],\n  textTransform: [ ],\n\n  // Palette\n  colors: [ ],\n  backgroundColors: [ ],\n\n  // Borders\n  borderColors: [ ]\n  borderRadius: [ ],\n  borderStyle: [ ],\n  borderWidth: [ ],\n  borderDirections: [ ],\n\n  // Spacing\n  paddingTop: [], \n  paddingLeft: [], \n  paddingBottom: [], \n  paddingRight: [], \n\n  // Hover states\n  hoverColor: [ ],\n  hoverBg: [ ],\n  hoverBoxShadow: [ ],\n  hoverBorderColor: [ ],\n  hoverSize: [ ],\n  \n  // Focus states\n  focusColor: [ ],\n  focusBg: [ ],\n  focusBorderColor: [ ],\n  focusBoxShadow: [ ],\n  focusSize: [ ],\n\n  // Focus states\n  activeColor: [ ],\n  activeBg: [ ],\n  activeBorderColor: [ ],\n  activeBoxShadow: [ ],\n  activeSize: [ ],\n\n  transitionProperty: [ ],\n  transitionDuration: [ ],\n  transitionTimingFunction: [ ],\n}\n\nexport default buttonThemeTemplate\n")),Object(i.b)("p",null,"Then we could define what values we want to pass in. We might pass in an entire\narray, declare literal values, pass in a filtered array. We have javascript. We\ncan do whatever we want!"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"import theme from './theme'\n\nconst buttonTheme = {\n  radii: theme.radii, // Entire scale\n  space: [\n    // Explicit steps from the scale\n    theme.space[3],\n    theme.space[4],\n  ],\n  fontSize: theme.fontSize.slice(0,-8), // Everything but the last 8 steps in the scale\n  fontFamily: theme.fontFamily[0], // An explicit step in the scale\n  borderStyle: [\n    theme.borderStyle[0],\n    theme.borderStyle[1]\n  ],\n  borderWidth: theme.borderWidth,\n  fontWeight: theme.fontWeight,\n  colors: theme.colors,\n  backgroundColors: theme.colors,\n\n  // hover, focus, active states\n  \n  hoverColor: [ \n    theme.colors[0].text, \n    theme.colors[1].text \n  ],\n  hoverBgColor: [ \n    theme.colors[0].bg, \n    theme.colors[0].bg \n  ],\n  focusColor: [ \n    theme.colors[1].text, \n    theme.colors[1].bg \n  ],\n  textTransform: ['uppercase', 'capitalized'],\n  transitionProperty: ['opacity', 'color', 'background-color'],\n  transitionDuration: ['.25s'],\n  transitionTimingFunction: ['ease-out'],\n}\n\nexport default buttonTheme\n")),Object(i.b)("p",null,"As a design community, we could make boilerplate config files for common ui components.\nOver time we could reinvent fewer and fewer wheels. This would allow us to go deeper on\nother areas that haven't been explored as much as button styles."),Object(i.b)("p",null,"This is where I think it gets ",Object(i.b)("em",{parentName:"p"},"really")," interesting."),Object(i.b)("p",null,"Now we have a system.\nWe can use combinational logic to generate all possible combinations of buttons\ngiven the input provided by a theme file. We could also use this pattern to\ncreate a finite state machine, and visualize transitions between any discrete\nstate a given component can be in."),Object(i.b)("p",null,"A simple config file like this generates thousands and thousands of button designs.\nHere is an example of generating avatars and buttons."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://examples-jchwaftrgo.now.sh"}),"https://examples-jchwaftrgo.now.sh")),Object(i.b)("p",null,"Or we can make this a finite state machine and animate between the options. You\nknow, if you don't like scrolling for days and days and days. (Again, animation\ncreated & provided by the one and only Harley Turan)."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://examples-pofntyovxa.now.sh"}),"https://examples-pofntyovxa.now.sh")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Let's step back and think at ten thousand feet again.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We can show how many options a design system can generate. This can be\nhelpful because some people feel they might be constrained by working with\ndefined scales. This can help show how varied their visual designs can still\nbe. A lot of people still haven't worked with scales and as a creative person\nconstraint can be scary at first."),Object(i.b)("li",{parentName:"ul"},"We can quickly identify desirable regions, which can help us quickly discover\npatterns of inputs needed for a desired output. This can expose properties\nyou might want to couple together and set rules for. Sense of proportion can\nchange dramatically at each end of the scale."),Object(i.b)("li",{parentName:"ul"},"Could automatically a/b test design options with real user metrics "),Object(i.b)("li",{parentName:"ul"},"Wire up options to an interface that allows for collaborative voting on which\ncomponent variations feel most on brand. You could even hook this voting up\nto a neural network."),Object(i.b)("li",{parentName:"ul"},"One of if not the most difficult part about image classification is coming up with the training data.\nThe generated data could help train an image classifier which will in turn\nhelp audit existing UI on websites. Imagine being able to input a url and\nquery the design with questions lke: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"Show me all of the buttons." '),Object(i.b)("li",{parentName:"ul"},'"Show me all of the orange buttons." '),Object(i.b)("li",{parentName:"ul"},'"Show me all of the buttons that have inaccessible color combinations."')))),Object(i.b)("p",null,"This is an exciting reality to live in. We can more quickly generate lots of design\noptions to test with real users. We can shorten the feedback loop around discovering\nwhat matters and what doesn't. This is a stark contrast to our current reality, which is that\nmost designs we ship have not been validated with real users. We don't design multiple options in\nparallel. We end up designing a single option that is optimized for getting stakeholder signoff in a series\nof status meetings."),Object(i.b)("p",null,"But at the very least this concept is exciting to me because I'm very lazy and\nI don't want to design buttons anymore."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mrmrs/component-api-talk"}),"Code examples on GitHub"))))}b.isMDXComponent=!0},jq5X:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component-styling-api",function(){var e=n("6lhf");return{page:e.default||e}}])}},[["jq5X","5d41","9da1"]]]);