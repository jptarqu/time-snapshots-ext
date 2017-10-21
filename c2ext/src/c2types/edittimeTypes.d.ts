declare type PluginInfo = {
    "name":			string,				// as appears in 'insert object' dialog, can be changed as long as "id" stays the same
    "id":			string,				// this is used to identify this plugin and is saved to the project; never change it
    "version":		string,					// (float in x.y format) Plugin version - C2 shows compatibility warnings based on this
    "description":	string,
    "author":		string,
    "help url":		string,
    "category":		string,				// Prefer to re-use existing categories, but you can set anything here
    "type":			string,				// either "world" (appears in layout and is drawn), else "object"
    "rotatable":	boolean,					// only used when "type" is "world".  Enables an angle property on the object.
    "flags":		number						// uncomment lines to enable flags...
                //	| pf_singleglobal		// exists project-wide, e.g. mouse, keyboard.  "type" must be "object".
                //	| pf_texture			// object has a single texture (e.g. tiled background)
                //	| pf_position_aces		// compare/set/get x, y...
                //	| pf_size_aces			// compare/set/get width, height...
                //	| pf_angle_aces			// compare/set/get angle (recommended that "rotatable" be set to true)
                //	| pf_appearance_aces	// compare/set/get visible, opacity...
                //	| pf_tiling				// adjusts image editor features to better suit tiled images (e.g. tiled background)
                //	| pf_animations			// enables the animations system.  See 'Sprite' for usage
                //	| pf_zorder_aces		// move to top, bottom, layer...
                //  | pf_nosize				// prevent resizing in the editor
                //	| pf_effects			// allow WebGL shader effects to be added
                //  | pf_predraw			// set for any plugin which draws and is not a sprite (i.e. does not simply draw
                                            // a single non-tiling image the size of the object) - required for effects to work properly
};

declare function AddNumberParam(label: string, description: string, initial_string: string | undefined ): void			// a number
declare function AddStringParam(label: string, description: string, initial_string: string | undefined ): void		// a string
declare function AddAnyTypeParam(label: string, description: string, initial_string: string | undefined )	: void		// accepts either a number or string
declare function AddCmpParam(label: string, description: string)	: void									// combo with equal, not equal, less, etc.
declare function AddComboParamOption(text: string,)			: void								// (repeat before "AddComboParam" to add combo items)
declare function AddComboParam(label: string, description: string, initial_selection: number | undefined ): void			// a dropdown list parameter
declare function AddObjectParam(label: string, description: string)		: void							// a button to click and pick an object type
declare function AddLayerParam(label: string, description: string)	: void								// accepts either a layer number or name (string)
declare function AddLayoutParam(label: string, description: string)		: void							// a dropdown list with all project layouts
declare function AddKeybParam(label: string, description: string)	: void									// a button to click and press a key (returns a VK)
declare function AddAnimationParam(label: string, description: string): void								// a string intended to specify an animation name
declare function AddAudioFileParam(label: string, description: string)	: void							// a dropdown list with all imported project audio files

declare var cf_none: number

declare function AddCondition(id: number,					// any positive integer to uniquely identify this condition
				flags: number,				// (see docs) cf_none, cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible,
									// cf_deprecated, cf_incompatible_with_triggers, cf_looping
				list_name: string,			// appears in event wizard list
				category: string,			// category in event wizard list
				display_str: string,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
				description: string,		// appears in event wizard dialog when selected
                script_name: string): void		// corresponding runtime function name
                
                
declare const af_none: number
declare const af_deprecated: number

declare function AddAction(id: number,				// any positive integer to uniquely identify this action
			 flags: number,				// (see docs) af_none, af_deprecated
			 list_name: string,			// appears in event wizard list
			 category: string,			// category in event wizard list
			 display_str: string,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
			 description: string,		// appears in event wizard dialog when selected
             script_name: string): void		// corresponding runtime function name
             
             
declare var ef_none: number
declare var ef_deprecated: number
declare var ef_return_number: number
declare var ef_return_string: number
declare var ef_return_any: number
declare var ef_variadic_parameters: number
declare function AddExpression(id: number,			// any positive integer to uniquely identify this expression
				 flags: number,			// (see docs) ef_none, ef_deprecated, ef_return_number, ef_return_string,
								// ef_return_any, ef_variadic_parameters (one return flag must be specified)
				 list_name: string,		// currently ignored, but set as if appeared in event wizard
				 category: string,		// category in expressions panel
				 exp_name: string,		// the expression name after the dot, e.g. "foo" for "myobject.foo" - also the runtime function name
                 description: string): void	// description in expressions panel
declare function ACESDone(): void

declare module cr {
    class Property {
        constructor(propTyep: number, name: string,
        initial_value: string | number,	description: string) 
    }
}
declare class IDEInstance {
    constructor(instance: any)
}