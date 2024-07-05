import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import {
	TextControl,
	Button,
	Flex,
	FlexBlock,
	FlexItem,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "mt-8",
		style: { width: "90%" },
	});
	const { links } = attributes;

	return <div {...blockProps}></div>;
}
