import { useEffect } from "react";

export default function DetailFilter(table, match, setDetailData) {
    useEffect(() => {
        let projectId = table.data.filter((el) => el.id === match.params.id);
        setDetailData({ DetailsData: projectId });
    }, [match.params.id, table.data, setDetailData]);
}
