# Glyphicon-Toolbar-Api
Side Project toolbar api.

Tested on mobile.<br/>
Demo http://ux.ivorscott.com/toolbar/

![ScreenShot](https://raw.github.com/ivorscott/Glyphicon-Toolbar-Api/master/images/toolbar.png)<br /><br />

##Usage

Create a new instance of api.menu(). Give the toolbar a name (e.g.,"menu") and an array of Bootstrap gylphicon names.

```
var menu = api.menu("menu",["envelope","calendar","user"]);

```

For testing purposes add the code to the console. This a great place to view errors.

![ScreenShot](https://raw.github.com/ivorscott/Glyphicon-Toolbar-Api/master/images/console.png)<br /><br />


Set the position of the toolbar with setAbs(). Expects "top|right|bottom|left".

```
menu.setAbs('bottom');
```

Access buttons individually

```
menu.buttons[0]
```

Alter the css of buttons

```
menu.buttons[0].css("background","pink");
```

Additional methods
```
menu.buttons[0].disable // disables button 
menu.buttons[0].enable  // enables button 
menu.buttons[0].isDisabled // returns boolean, true if button is disabled 
menu.buttons[0].activate  // button appears active by changing background color 
menu.buttons[0].deactivate // removes active appearance 
menu.buttons[0].isActive  // returns boolean, true if button is activated 
menu.buttons[0].toggleActiveState // switches active state on if off and off if on
```

## Bootstrap Glyphicon names

asterisk	
plus	
minus	
euro	
cloud	
envelope	
pencil	
glass	
music	
search	
heart	
star	
star-empty	
user	
film	
th-large	
th	
th-list	
ok	
remove	
zoom-in	
zoom-out	
off	
signal	
cog	
trash	
home	
file	
time	
road	
download-alt	
download	
upload	
inbox	
play-circle	
repeat	
refresh	
list-alt	
lock	
flag	
headphones	
volume-off	
volume-down	
volume-up	
qrcode	
barcode	
tag	
tags	
book	
bookmark	
print	
camera	
font	
bold	
italic	
text-height	
text-width	
align-left	
align-center	
align-right	
align-justify	
list	
indent-left	
indent-right	
facetime-video	
picture	
map-marker	
adjust	
tint	
edit	
share	
check	
move	
step-backward	
fast-backward	
backward	
play	
pause	
stop	
forward	
fast-forward	
step-forward	
eject	
chevron-left	
chevron-right	
plus-sign	
minus-sign	
remove-sign	
ok-sign	
question-sign	
info-sign	
screenshot	
remove-circle	
ok-circle	
ban-circle	
arrow-left	
arrow-right	
arrow-up	
arrow-down	
share-alt	
resize-full	
resize-small	
exclamation-sign	
gift	
leaf	
fire	
eye-open	
eye-close	
warning-sign	
plane	
calendar	
random	
comment	
magnet	
chevron-up	
chevron-down	
retweet	
shopping-cart	
folder-close	
folder-open	
resize-vertical	
resize-horizontal	
hdd	
bullhorn	
bell	
certificate	
thumbs-up	
thumbs-down	
hand-right	
hand-left	
hand-up	
hand-down	
circle-arrow-right	
circle-arrow-left	
circle-arrow-up	
circle-arrow-down	
globe	
wrench	
tasks	
filter	
briefcase	
fullscreen	
dashboard	
paperclip	
heart-empty	
link	
phone	
pushpin	
usd	
gbp	
sort	
sort-by-alphabet	
sort-by-alphabet-alt	
sort-by-order	
sort-by-order-alt	
sort-by-attributes	
sort-by-attributes-alt	
unchecked	
expand	
collapse-down	
collapse-up	
log-in	
flash	
log-out	
new-window	
record	
save	
open	
saved	
import	
export	
send	
floppy-disk	
floppy-saved	
floppy-remove	
floppy-save	
floppy-open	
credit-card	
transfer	
cutlery	
header	
compressed	
earphone	
phone-alt	
tower	
stats	
sd-video	
hd-video	
subtitles	
sound-stereo	
sound-dolby	
sound-5-1	
sound-6-1	
sound-7-1	
copyright-mark	
registration-mark	
cloud-download	
cloud-upload	
tree-conifer
tree-deciduous
