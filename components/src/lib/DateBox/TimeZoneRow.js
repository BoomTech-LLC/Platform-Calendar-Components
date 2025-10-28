import PropTypes from "prop-types";
import styles from "./main.module.css";
import moment from "moment-timezone";

const TimeZoneRow = ({ showIcons, timeZone, convertDate }) => {
  const choosedTimezone = convertDate ? moment.tz.guess() : timeZone;
  const timezoneDisplayName = `GMT${moment
    .tz(choosedTimezone)
    .format("Z")} • ${choosedTimezone}`;

  return (
    <div className={styles.two_line_end}>
      {showIcons && <div className="icon-world" />}
      <p className={styles.oneLine}>{timezoneDisplayName}</p>
    </div>
  );
};

TimeZoneRow.propTypes = {
  showIcons: PropTypes.bool,
  timeZone: PropTypes.string,
  convertDate: PropTypes.bool,
};

export default TimeZoneRow;
