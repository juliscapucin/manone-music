// import { useEffect, useState } from "@wordpress/element";
// import apiFetch from "@wordpress/api-fetch";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	Button,
	SelectControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "absolute top-0 right-0 bottom-8 w-[90%] h-fit bg-faded-30",
	});
	const { imgId, imgUrl, imgAlt } = attributes;

	function onFileSelect(media) {
		setAttributes({ imgId: media.id, imgUrl: media.url, imgAlt: media.alt });
	}

	// Fetch from api (not working)
	// useEffect(() => {
	// 	async function fetchImage() {
	// 		const response = await apiFetch({
	// 			path: `/wp/v2/media/${imgId}`,
	// 			method: "GET",
	// 		});
	// 		setAttributes({
	// 			imgURL: response.media_details.sizes.full.source_url,
	// 			imgAlt: response.alt_text,
	// 		});
	// 		setUrl(response.media_details.sizes.full.source_url);
	// 	}
	// 	fetchImage();
	// }, [imgId]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Image">
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={imgId}
								render={({ open }) => (
									<Button
										className="components-button editor-post-publish-button editor-post-publish-button__button is-primary is-compact"
										onClick={open}
									>
										Replace About Image
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="relative w-full h-full bg-faded-10">
					<div className="contain-image flex justify-end w-full overflow-clip z-10">
						<img
							src={imgUrl}
							className="w-full h-full object-cover"
							alt={imgAlt}
						/>
					</div>
					<div className="absolute top-10 w-full h-full flex items-end justify-center">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={imgId}
								render={({ open }) => (
									<Button
										className="components-button editor-post-publish-button editor-post-publish-button__button is-primary is-compact"
										onClick={open}
									>
										Replace Image
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
				</div>
			</div>
		</>
	);
}
