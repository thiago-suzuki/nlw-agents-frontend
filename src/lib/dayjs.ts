import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // minúsculo (evita conflitos em sistemas case-sensitive)
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

export default dayjs;