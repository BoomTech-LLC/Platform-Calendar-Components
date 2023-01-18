import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ADD_SHARE_ICONS_CONSTRUCTOR, SYNCED_EVENT_KINDS } from '../helpers/constants';
import { combineClassNames } from '../helpers/commons';
import { PT_CLASSNAMES } from '../helpers/commonPropTypes';
import AddShareIconsRow from './addShareIconsRow/AddShareIconsRow';
import { RowsWrapper, SectionTitle, Divider } from './styles';
import GlobalStyle from '../assets/styles/globalStyles';

export default function AddShareIcons({
	title = ADD_SHARE_ICONS_CONSTRUCTOR.TITLE,
	comp_id,
	instance,
	titleBorderHidden = false,
	addToSectionName = ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.addToSectionName,
	hideAddToIcons = false,
	shareSectionName = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.shareSectionName,
	hideShareIcons = false,
	boomEventUrlBase,
	event,
	copyActionTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copyActionTooltipText,
	copiedTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copiedTooltipText,
	wrapperCustomClassNames = [],
	titleCustomClassNames = [],
	contentCustomClassNames = [],
	copyTooltipCustomClassNames = [],
	order = 'vertical',
	isMobile
}) {
	const [copyTooltipText, setCopyTooltipText] = useState(copyActionTooltipText);

	if (hideAddToIcons && hideShareIcons) return null;

	return (
		<div className={combineClassNames(wrapperCustomClassNames)}>
			<GlobalStyle />
			<SectionTitle
				titleBorderHidden={titleBorderHidden}
				className={combineClassNames(titleCustomClassNames)}
			>
				{title}
			</SectionTitle>
			<RowsWrapper
				order={order}
				className={combineClassNames(contentCustomClassNames)}
			>
				{!hideAddToIcons && (
					<AddShareIconsRow
						constructor={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS}
						sectionName={addToSectionName}
						event={event}
						rowId={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId}
					/>
				)}
				{order === 'horizontal' && <Divider />}
				{!hideShareIcons && !SYNCED_EVENT_KINDS.includes(event.kind) && (
					<AddShareIconsRow
						comp_id={comp_id}
						instance={instance}
						sectionName={shareSectionName}
						event={event}
						boomEventUrlBase={boomEventUrlBase}
						constructor={ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS}
						rowId={ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.rowId}
						copyTooltipText={copyTooltipText}
						setCopyTooltipText={setCopyTooltipText}
						copiedTooltipText={copiedTooltipText}
						copyActionTooltipText={copyActionTooltipText}
						copyTooltipCustomClassNames={copyTooltipCustomClassNames}
						isMobile={isMobile}
					/>
				)}
			</RowsWrapper>
		</div>
	);
}

AddShareIcons.propTypes = {
	title: PropTypes.string,
	comp_id: PropTypes.string.isRequired,
	instance: PropTypes.string.isRequired,
	titleBorderHidden: PropTypes.bool,
	event: PropTypes.object.isRequired,
	boomEventUrlBase: PropTypes.string.isRequired,
	hideAddToIcons: PropTypes.bool,
	addToSectionName: PropTypes.string,
	hideShareIcons: PropTypes.bool,
	shareSectionName: PropTypes.string,
	copyActionTooltipText: PropTypes.string,
	copiedTooltipText: PropTypes.string,
	wrapperCustomClassNames: PT_CLASSNAMES,
	titleCustomClassNames: PT_CLASSNAMES,
	contentCustomClassNames: PT_CLASSNAMES,
	copyTooltipCustomClassNames: PT_CLASSNAMES,
	order: PropTypes.oneOf(['vertical', 'horizontal'])
};
