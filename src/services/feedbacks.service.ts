import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IFeedBack } from "../interfaces/feedback";

export function useFeedBacks() {
    const [feedBacks, setFeedBacks] = useState<IFeedBack[]>();
    const [isLoading, setIsLoading] = useState(true);

    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current) return;

        console.log("Fetching Feedbacks...");

        axios
            .get("http://www.mocky.io/v2/5eb553df31000060006994a8")
            .then(({ data }) => {
                setFeedBacks(data);
            })
            .finally(() => {
                console.log("Feedbacks Loaded...");
                setIsLoading(false);
            });

        isLoaded.current = true;
    }, []);

    return { feedBacks, isLoading };
}
