import {
	useBlockProps,
	InnerBlocks,
	getColorClassName,
} from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { textColor, backgroundColor } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${
					textColor ? getColorClassName("color", textColor) : null
				} ${
					backgroundColor
						? getColorClassName("background-color", backgroundColor)
						: null
				}`,
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
