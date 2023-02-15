import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IFeedBack } from "../interfaces/feedback";

export function useFeedBacks() {
    const [feedBacks, setFeedBacks] = useState<IFeedBack[]>();
    const [isLoading, setIsLoading] = useState(true);

    //Normalmente eu uso a lib React Query para fetch de dados e cache, mas como não vi necessidade aqui fiz essa logica na mão mesmo

    const cache = sessionStorage.getItem("dryve:feedbacks_cache");

    useEffect(() => {
        if (cache) {
            setFeedBacks(JSON.parse(cache));
        }
    }, []);

    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current) return;

        console.log("Fetching Feedbacks...");

        axios
            .get("http://www.mocky.io/v2/5eb553df31000060006994a8")
            .then(({ data }) => {
                sessionStorage.setItem(
                    "dryve:feedbacks_cache",
                    JSON.stringify(data)
                );
                setFeedBacks(data);
            })
            .finally(() => {
                console.log("Feedbacks Loaded...");
                setIsLoading(false);
            });

        isLoaded.current = true;
    }, []);

    return { feedBacks, isLoading: !feedBacks ?? isLoading };
}
