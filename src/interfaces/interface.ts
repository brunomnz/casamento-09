export interface imagesProps {
    img1: string
    img2: string
    alt1: string
    alt2: string
    showComponent?: boolean
    text: string
}

export interface stateProp {
    state: boolean
}

export interface showProp {
    showComponent: boolean
}

export interface DialogProps {
    onClose: () => void;
    variant: "A" | "B"; 
    imgSrc?: string; 
    linkHref?: string; 
    idGift?: number
}

export interface GiftsProps {
    imgSrc: string | undefined;
    textContent: string
    variant: "A" | "B";
    linkHref?: string;
    idGift?: number
    selectedGift?: boolean
}

export interface giftListProps {
    giftGiver: string
    giftName: string
    idGift: number
    idImage: number
    selected: boolean
}

export const iframeProps = {
    style: {border: 0},
    allowFullScreen: true, 
    loading: "lazy" as const,
    referrerPolicy: "no-referrer-when-downgrade" as const,
}