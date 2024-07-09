import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "fixed inset-0 bg-secondary z-10",
	});
	return <div {...blockProps}></div>;
}
