import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import "../assets/styles/icons.css";
import {
  ADD_SHARE_ICONS_CONSTRUCTOR,
  SYNCED_EVENT_KINDS,
} from "../helpers/constants";
import { combineClassNames } from "../helpers/commons";
import { generateEventUrl } from "../helpers/addShare";
import { PT_CLASSNAMES } from "../helpers/commonPropTypes";

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
  copyActionTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS
    .copyActionTooltipText,
  copiedTooltipText = ADD_SHARE_ICONS_CONSTRUCTOR.SHARE_ICONS.copiedTooltipText,
  wrapperCustomClassNames = [],
  titleCustomClassNames = [],
  contentCustomClassNames = [],
  copyTooltipCustomClassNames = [],
  order = "vertical",
  isMobile,
}) {
  const [copyTooltipText, setCopyTooltipText] = useState(copyActionTooltipText);

  if (hideAddToIcons && hideShareIcons) return null;

  return (
    <div
      className={combineClassNames([
        styles.add_share_icons_block,
        styles[order],
        ...wrapperCustomClassNames,
      ])}>
      <h3
        className={combineClassNames([
          titleBorderHidden ? "" : styles.bordered,
          ...titleCustomClassNames,
        ])}>
        {title}
      </h3>
      <div
        className={combineClassNames([
          styles[order],
          ...contentCustomClassNames,
        ])}>
        {!hideAddToIcons && (
          <AddShareIconsRow
            constructor={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS}
            sectionName={addToSectionName}
            event={event}
            rowId={ADD_SHARE_ICONS_CONSTRUCTOR.ADD_TO_ICONS.rowId}
          />
        )}

        {order === "horizontal" && hideAddToIcons && hideShareIcons && (
          <div className={styles.horizontal_divider} />
        )}

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
      </div>
    </div>
  );
}

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
}) => {
  return (
    <div className={styles.add_share_icons_row}>
      <p>{sectionName}</p>
      <div>
        {constructor.icons.map((btn) => {
          const isCopyLink = btn.type === "copy";

          return (
            <Fragment
              key={`${event.id}-${event.startDate}-add-share-${btn.type}`}>
              <button
                className={combineClassNames([
                  "icon-" + btn.type,
                  isCopyLink ? styles.hoverable : "",
                ])}
                onMouseOut={() =>
                  isCopyLink &&
                  setTimeout(
                    () => setCopyTooltipText(copyActionTooltipText),
                    300
                  )
                }
                onClick={(e) => {
                  if (rowId === 1) return btn.clickHandler(e, btn.type, event);
                  if (rowId === 2) {
                    if (isCopyLink) {
                      btn.clickHandler(
                        e,
                        setCopyTooltipText,
                        copiedTooltipText,
                        generateEventUrl(event, boomEventUrlBase, comp_id)
                      );
                    } else {
                      btn.clickHandler(
                        e,
                        btn.type,
                        generateEventUrl(event, boomEventUrlBase, comp_id, true)
                      );
                    }
                  }
                }}
              />

              {!isMobile && isCopyLink && (
                <span
                  className={combineClassNames([
                    styles.copy_tooltip,
                    ...copyTooltipCustomClassNames,
                  ])}>
                  {copyTooltipText}
                </span>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

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
  order: PropTypes.oneOf(["vertical", "horizontal"]),
};
