import { registerBlockType } from "@wordpress/blocks";
import { withColors } from "@wordpress/block-editor";
/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("goodmotion/gm-wrapper-full-text", {
	/**
	 * @see ./edit.js
	 */
	edit: withColors({ textColor: "color", backgroundColor: "background-color" })(
		Edit
	),

	/**
	 * @see ./save.js
	 */
	save,
	attributes,
});
