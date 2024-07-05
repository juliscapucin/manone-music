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
	const { linkList } = attributes;

	const updateLinkLabel = (index, newLabel) => {
		const newLinkList = [...linkList];
		newLinkList[index] = { ...newLinkList[index], label: newLabel };
		setAttributes({ linkList: newLinkList });
	};

	const updateLinkSlug = (index, newSlug) => {
		const newLinkList = [...linkList];
		newLinkList[index] = { ...newLinkList[index], slug: newSlug };
		setAttributes({ linkList: newLinkList });
	};

	const removeLink = (index) => {
		const newLinkList = [...linkList];
		newLinkList.splice(index, 1);
		setAttributes({ linkList: newLinkList });
	};

	return (
		<div {...blockProps}>
			{linkList.map((link, index) => {
				return (
					<div
						style={index > 0 ? { marginTop: "1rem" } : {}}
						key={`linkInput-${index}`}
					>
						<Flex>
							<FlexBlock>
								<TextControl
									label="Link label:"
									autoFocus={link.label == undefined}
									value={link.label}
									onChange={(newLabel) => updateLinkLabel(index, newLabel)}
									style={{
										color: "var(--color-secondary)",
										backgroundColor: "var(--color-primary)",
									}}
								/>
							</FlexBlock>

							<FlexBlock>
								<TextControl
									label="Link slug:"
									value={link.slug}
									onChange={(newSlug) => updateLinkSlug(index, newSlug)}
									style={{
										color: "var(--color-secondary)",
										backgroundColor: "var(--color-primary)",
									}}
								/>
							</FlexBlock>

							<FlexItem>
								<Button
									onClick={() => removeLink(index)}
									variant="link"
									style={{ color: "var(--color-secondary)" }}
								>
									Remove Link
								</Button>
							</FlexItem>
						</Flex>
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
					margin: "1.5rem auto 0 auto",
					display: "flex",
					padding: "0 5rem",
				}}
			>
				Add New Link
			</Button>
		</div>
	);
}
