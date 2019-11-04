import fw from "ians-fw";
export default function () {
    const scrollX = fw.StatefulData(0);
    const scrollY = fw.StatefulData(0);
    const width = fw.StatefulData(window.screen.width);
    const height = fw.StatefulData(window.screen.height);
    window.addEventListener("resize", () => {
        width.value = window.screen.width;
        height.value = window.screen.height;
    });
    window.addEventListener("scroll", () => {
        scrollX.value = window.scrollX;
        scrollY.value = window.scrollY;
    });
    return <style>
        :root{"{"}
        --scroll-x:{scrollX};
            --scroll-y:{scrollY};
            --page-width:{width};
            --page-height:{height};
        {"}"}
    </style>
}