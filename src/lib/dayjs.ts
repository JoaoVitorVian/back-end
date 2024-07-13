import localized from 'dayjs/plugin/localizedFormat';
import dayjs from "dayjs";

dayjs.extend(localized);

export { dayjs }