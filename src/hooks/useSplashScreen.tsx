import { useState, useEffect } from "react";

interface UseSplashScreenProps {
    onFinish: () => void;
}

export function useSplashScreen({ onFinish } : UseSplashScreenProps) {
        const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setVisible(true);
        }, 100);

        const fadeOutTimer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2700);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return visible;
}
