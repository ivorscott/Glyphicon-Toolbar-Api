/* Toolbar api */

var api = (function (api) {

	var tools = {
		
		// Return true on success

		safeName : function (name) {
			var name = name || '';
			return /^[a-z_-][a-z\d_-]*$/i.test(name);
		}
	}; // tools


	var initialize = function(buttons) {

		// Connect buttons to mvc

		bind(buttons);

		function model (action) {

			var xmlhttp = new XMLHttpRequest();
			var url = "http://ux.ivorscott.com/prototype/data.json";

			xmlhttp.onreadystatechange = function() {
			    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			        var myArr = JSON.parse(xmlhttp.responseText);
			        format(myArr);
			    }
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();

			function format(arr) {
			    var out = "";
			    for(var i = 0; i < arr.length; i++) {
			        out += '<a href="' + arr[i].url + '">' + 
			        arr[i].display + '</a><br>';
			    }
			    document.body.appendChild().innerHTML = out;
			}
		}

		function controller (action) {
			view(action,model(action));
		}

		function view (action, model) {
			var model =  "The Action is: '" + action + "' & the Model is: '" + model + "'";
			api.log(model,"notice");
		}

		function bind (buttons) {
			[].forEach.call(buttons,function (button,index,array) {
				button.addEventListener('click', function() {
					
					var action = this.innerHTML.toLowerCase();
					controller(action);

					theActiveButton = this.parentElement.querySelectorAll(".active")[0];
					// deactivate previous button
					theActiveButton.classList.remove("active");
					// activate new button
					this.classList.add("active");
				});
			});
		}
	}; // initialize
	
	var createMenuButtons = function (buttonElements) {
		
		var buttons = [];

		// Connect buttons to mvc

		initialize(buttonElements);

		// Build button definition
		
		[].forEach.call(buttonElements,function (el,index,array) {
			var button  = {
				el : el,
				css : function (rule,value) {
					this.el.style[rule] = value;
				},
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

	}; // createMenuItems

	api.menu = function (menuId, buttonNames) {

		var menu, menuId, buttonNames, buttons = [], wrapper;

		// Error Handling 

		if (!tools.safeName(menuId)) {
			api.log("\ndef  [2 params]: [ string menuId ], [ array buttonNames ]","notice");
			api.log("error:  valid 'menuId' name required.","error");
			return false;
		}

		if (Array.isArray(buttonNames)){

			if(buttonNames.length == 0) {
					api.log("\ndef  [2 params]: [ string menuId ], [ array buttonNames ]","notice");
					api.log("error: empty array, pass list of string names.","error");
					return false;
			}

			for (var i = 0; i < buttonNames.length; i++) {
				if (!buttonNames[i]) {
					api.log("\ndef  [2 params]: [ string menuId ], [ array buttonNames ]","notice");
					api.log("error: int value only set size of array, pass list of string names.","error");
					return false;
				}
			}

		} else {
			api.log("\ndef  [2 params]: [ string menuId ], [ array  buttonNames ]","notice");
			api.log("error:  'buttonNames' param must be an array.","error");
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

			for (var i = 0; i < buttonNames.length; i++) {

				buttons[i] = document.createElement("span");
				buttons[i].className = "button";
				buttons[i].innerHTML = '' + buttonNames[i]; // force string

				if (i == 0) {
					buttons[i].classList.add("active"); // first acive on default
				}

				menu.appendChild(buttons[i]);	
				document.body.appendChild(menu);

				api.log("\t + new button: " + buttons[i].innerHTML ,"#abe");
			}

		} else {

			// Get buttons from exsiting menu

			buttons = menu.querySelectorAll(".button");

			api.log("toolbar already exists.", "#abe");
		}

		// Return buttons

		return {
			buttons: createMenuButtons(buttons) 
		};
	}; // menu 

	api.log = function(message,type) {
		switch(type) {
			case  "notice": 
				color = "#444";
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




