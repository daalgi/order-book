import { FunctionComponent } from "react"

interface DepthVisualizerProps {
    depth: number;
    orderType: any;
    windowWidth: number;
}

const DepthVisualizer: FunctionComponent<DepthVisualizerProps> = ({ windowWidth, depth, orderType }) =>
    <div style={{
        // backgroundColor: `${orderType === OrderType.BIDS ? DepthVisualizerColors.BIDS : DepthVisualizerColors.ASKS}`,
        height: "1.250em",
        width: `${depth}%`,
        position: "relative",
        top: 21,
        // left: `${orderType === OrderType.BIDS && windowWidth > MOBILE_WIDTH ? `${100 - depth}%` : 0}`,
        marginTop: -24,
        zIndex: 1,
    }} />;

export default DepthVisualizer;