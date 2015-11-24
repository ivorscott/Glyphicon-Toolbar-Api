/* Toolbar api */

var api = (function (api) {
	var tools = {
		isNameSafe : function (name) { // Return true on success
			var name = name || '';
			return /^[a-z_-][a-z\d_-]*$/i.test(name);
		}
	}; // tools

	var attachMVC = function(buttons) {
		
		bind(buttons);

		function model (action) { // example data
			return Math.floor(Math.random(action) * 11);
		}

		function controller (action) { 
			view(action,model(action));
		}
		
		function view (action, model) { // example view
			var model =  "The Action is: '" + action + "' & the Model is: '" + model + "'";
			api.log(model,"notice");
		}

		function bind (buttons) {
			[].forEach.call(buttons,function (button,index,array) {

				// on click go through button's class list to determine action
				button.addEventListener('click', function() {

					// for each class in the classlist find the one that indicates the action
					this.classList.forEach(function(el, index, classList){

						// if a valid button action exists
						if (classList[index].toString().match(/glyphicon-[a-z]+/)) {

							// split string at '-'
							var actionName = el.split('-');

							// pass the controller the 2nd index
							// which contains the actionName

							controller(actionName[1]);
						}
					});

        			// find the activated button
					theActiveButton = this.parentElement.querySelectorAll(".active")[0];

					// deactivate previous button before activating new button
					theActiveButton.classList.remove("active");
					
					// activate new button
					this.classList.add("active");
				});
			});
		}
	}; // attachMVC
	
	var createMenuButtons = function (buttonElements) {	

		var buttons = [];

		attachMVC(buttonElements);
		
		// Define buttons
		[].forEach.call(buttonElements,function (el,index,array) {
			var button  = {
				el : el,
				disable : function () {
					this.el.classList.add("disabled");
				},
				enable : function () {
					this.el.classList.remove("disabled");
				},
				isDisabled : function () {
					return this.el.classList.contains("disabled");
				},
				activate : function () {
					if (this.isDisabled()) {
						return;
					}
					activeItem = this.el.parentElement.querySelectorAll(".active")[0];
					activeItem.classList.remove("active");
					this.el.classList.add("active");
				},
				deactivate : function () {
					if (this.isDisabled()) {
						return;
					}
					this.el.classList.remove("active");
				},
				isActive : function () {
					return this.el.classList.contains("active");
				},
				toggleActiveState: function () {
					if (this.isActive()) {
						this.deactivate();
					} else {
						this.activate();
					}
				}
			};
			// Add button objects to array
			buttons.push(button);
		});

		return buttons;

	}; // createMenuButtons

	api.menu = function (menuId, buttonImages) {

		//initialize variables
		
		var menu, menuId, buttonImages, buttons = [], wrapper;

		if (!tools.isNameSafe(menuId)) {
			api.log("\ndef  [2 params]: [ string menuId ], [ array buttonImages ]","notice");
			api.log("error:  valid 'menuId' name required.","error");
			return false;
		}

		if (Array.isArray(buttonImages)){

			if(buttonImages.length == 0) {
					api.log("\ndef  [2 params]: [ string menuId ], [ array buttonImages ]","notice");
					api.log("error: empty array, pass list of Bootstrap string names.","error");
					return false;
			}

			for (var i = 0; i < buttonImages.length; i++) {
				if (!buttonImages[i]) {
					api.log("\ndef  [2 params]: [ string menuId ], [ array buttonImages ]","notice");
					api.log("error: int value only set size of array, pass list of Bootstrap Glyphicon string names.","error");
					return false;
				}
			}

		} else {
			api.log("\ndef  [2 params]: [ string menuId ], [ array  buttonImages ]","notice");
			api.log("error:  'buttonImages' param must be an array.","error");
			return false;
		}

		// Get menu, if absent create it

		menu = document.getElementById(menuId);

		if (!menu) {

			// New menu

			menu = document.createElement("div");
			menu.id = menuId;
			menu.className = "menu";

			api.log("menu created.","success");

			for (var i = 0; i < buttonImages.length; i++) {

				buttons[i] = document.createElement("span");
				buttons[i].className = "button glyphicon glyphicon-" + buttonImages[i];

				if (i == 0) {
					buttons[i].classList.add("active"); // first acive on default
				}

				menu.appendChild(buttons[i]);	
				document.body.appendChild(menu);

				api.log("\t + new button: " + buttonImages[i] ,"#abe");
			}

		} else {

			// Get buttons from exsiting menu

			buttons = menu.querySelectorAll(".button");

			api.log("toolbar already exists.", "#abe");
		}

		// Return buttons

		return {
			buttons: createMenuButtons(buttons),
			setAbs: function(position) {

				var className = '';
				var options = ["fixed-top","fixed-right","fixed-bottom","fixed-left"];

				switch(position) {
					case  "top": 
						className = options[0];
						break;
					case "right": 
						className = options[1];
						break;
					case "bottom": 
						className = options[2];
						break;
					case "left": 
						className = options[3];
						break;
					default:
						className = false;
				}
				
				if(!className) {
					api.log("\ndef  [1 param]: [ string position ]","notice");
					api.log("error:  valid 'position' name required. accepts (top|right|bottom|left)","error");
					return false;
				} else {
					for(var i = 0; i < options.length;i++) {
						for(var b = 0; b < menu.classList.length;b++) {
							if(menu.classList[b] == options[i]) {
								menu.classList.remove(options[i]);
							}
						}
					}
					menu.classList.add(className);
				}
			} 
		};
	}; // menu 

	api.log = function(message,type) {
		switch(type) {
			case  "notice": 
				color = "black"; 
				break;
			case "success": 
				color = "green";
				break;
			case "error": 
				color = "red";
				break;
			default:
				color = type;
		}
   		console.log("%c" + message, "color:" + color + ";font-weight:bold;");
	} // log 

	return api;

})(api || {});




