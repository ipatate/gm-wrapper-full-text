import {
	useBlockProps,
	InnerBlocks,
	PanelColorSettings,
	InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({
	textColor,
	backgroundColor,
	setTextColor,
	setBackgroundColor,
}) {
	const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color settings")}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __("Background color", "gm-wrapper-full-text"),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __("Text color", "gm-wrapper-full-text"),
						},
					]}
				/>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: `${
						textColor && textColor.class ? textColor.class : null
					} ${
						backgroundColor && backgroundColor.class
							? backgroundColor.class
							: null
					}`,
				})}
			>
				<InnerBlocks allowedBlocks={{ ALLOWED_BLOCKS }} />
			</div>
		</>
	);
}
