import React, { Fragment } from 'react';
import { generateEventUrl } from '../../helpers/addShare';
import { combineClassNames } from '../../helpers/commons';
import { Button, Content, CopyTooltip, Wrapper, SectionTitle } from './styles';



const AddShareIconsRow = ({
	comp_id,
	constructor,
	rowId,
	sectionName,
	event,
	setCopyTooltipText,
	boomEventUrlBase,
	copiedTooltipText,
	copyTooltipText,
	copyActionTooltipText,
	copyTooltipCustomClassNames,
	isMobile,
	order
}) => {
	return (
		<Wrapper
			className='add_share_icons_row'
			order={order}
		>
			<SectionTitle>{sectionName}</SectionTitle>
			<Content>
				{constructor.icons.map((btn) => {
					const isCopyLink = btn.type === 'copy';

					return (
						<Fragment key={`${event.id}-${event.startDate}-add-share-${btn.type}`}>
							<Button
								isCopyLink
								className={'icon-' + btn.type}
								onMouseOut={() =>
									isCopyLink &&
									setTimeout(() => setCopyTooltipText(copyActionTooltipText), 300)
								}
								onClick={(e) => {
									if (rowId === 1) return btn.clickHandler(e, btn.type, event);
									if (rowId === 2) {
										let eventUrl = generateEventUrl(
											event,
											boomEventUrlBase,
											comp_id
										);
										if (isCopyLink) {
											btn.clickHandler(
												e,
												setCopyTooltipText,
												copiedTooltipText,
												eventUrl
											);
										} else {
											btn.clickHandler(e, btn.type, eventUrl);
										}
									}
								}}
							/>

							{!isMobile && isCopyLink && (
								<CopyTooltip
									className={combineClassNames(copyTooltipCustomClassNames)}
								>
									{copyTooltipText}
								</CopyTooltip>
							)}
						</Fragment>
					);
				})}
			</Content>
		</Wrapper>
	);
};

export default AddShareIconsRow;
