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
	const blockProps = useBlockProps();
	const { linkList } = attributes;

	const updateLink = (index, newLabel) => {
		const newSlug = newLabel.replace(/\s+/g, "-").toLowerCase();
		const newLinkList = [...linkList];
		newLinkList[index] = {
			...newLinkList[index],
			label: newLabel,
			slug: newSlug,
		};
		setAttributes({ linkList: newLinkList });
	};

	const removeLink = (index) => {
		const newLinkList = [...linkList];
		newLinkList.splice(index, 1);
		setAttributes({ linkList: newLinkList });
	};

	return (
		<div {...blockProps}>
			<div className="flex items-start justify-end gap-4">
				{linkList.map((link, index) => {
					return (
						<div key={`linkInput-${index}`}>
							<TextControl
								autoFocus={link.label == undefined}
								value={link.label}
								onChange={(newLabel) => updateLink(index, newLabel)}
								style={{
									color: "var(--color-secondary)",
									backgroundColor: "var(--color-primary)",
								}}
							/>

							<Button
								onClick={() => removeLink(index)}
								variant="link"
								style={{ color: "var(--color-secondary)" }}
							>
								Remove Link
							</Button>
						</div>
					);
				})}
				<Button
					onClick={() => {
						setAttributes({
							linkList: linkList.concat({ title: undefined, url: "" }),
						});
					}}
					variant="primary"
					icon={"plus-alt"}
					style={{
						margin: "0 auto 0 auto",
						display: "flex",
						padding: "1rem",
					}}
				>
					Add Link
				</Button>
			</div>
		</div>
	);
}
