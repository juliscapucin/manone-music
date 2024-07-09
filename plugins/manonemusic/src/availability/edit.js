import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";
import { useEffect } from "react";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "w-full mt-8 flex flex-col font-primary",
	});
	const { date, buttonLabel, email } = attributes;

	const getNextMonth = () => {
		const currentDate = new Date();
		return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
	};

	const parseStringToDate = (dateString) => {
		const parts = dateString.split(" ");
		if (parts.length === 2) {
			const month = new Date(`${parts[0]} 1, 1970`).getMonth();
			const year = parseInt(parts[1], 10);
			return new Date(year, month);
		}
		return getNextMonth();
	};

	const furtherAvailability = () => {
		const formatMonth = (futureDate) =>
			`${futureDate.toLocaleString("default", {
				month: "long",
			})} ${futureDate.getFullYear()}`;

		if (!date) {
			return formatMonth(getNextMonth());
		}

		const cmsDate = parseStringToDate(date);
		return cmsDate.getTime() < getNextMonth.getTime()
			? formatMonth(getNextMonth)
			: formatMonth(cmsDate);
	};

	return (
		<div {...blockProps}>
			<div className="mt-8">
				<div>
					<span className="text-labelLarge">Available</span>
					<PlainText
						tagName="span"
						className="bg-primary"
						value={date ? date : furtherAvailability()}
						onChange={(value) => setAttributes({ date: value })}
					/>
				</div>
				<div className="mt-2">
					<PlainText
						tagName="div"
						className="bg-primary uppercase border border-secondary rounded-3xl py-2 px-3 leading-tighter w-fit text-center hover:bg-secondary hover:text-primary transition-colors duration-200"
						value={buttonLabel}
						onChange={(value) => setAttributes({ buttonLabel: value })}
					/>
				</div>
			</div>
		</div>
	);
}
