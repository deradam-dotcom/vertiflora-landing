import React from 'react';
import {
	documentToReactComponents,
	Options,
} from '@contentful/rich-text-react-renderer';

interface ContentfulRichTextProps {
  json: any;
  style?: React.CSSProperties;
}

const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({
  json,
  style,
}) => {
  const options: Options = {
    renderNode: {
      paragraph: (node, children) => <p style={style}>{children}</p>,
    },
  };

  return <div>{documentToReactComponents(JSON.parse(json), options)}</div>;
};

export default ContentfulRichText;
