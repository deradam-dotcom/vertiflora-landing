import React from 'react';
import { ContentfulHeader } from '../../pages';

interface VideoProps {
	videoData: ContentfulHeader['backgroundVideo']['url'];
}

const Video: React.FC<VideoProps> = ({ videoData }) => {
	return (
		<video
			autoPlay
			muted
			loop
			className="w-full h-[600px] lg:h-[770px] object-cover rounded rounded-[8px]"
		>
			<source src={videoData} type="video/mp4" />
		</video>
	);
};

export default Video;
