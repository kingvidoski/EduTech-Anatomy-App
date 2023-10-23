import { Canvas, Fill, Group, Paint, BlurMask, BackdropBlur, Blur, Offset, Circle } from '@shopify/react-native-skia';

const Glassmorphism = () => {
    const r = 60;

    return (
        <Canvas style={{ flex: 1 }}>
            <BackdropBlur blur={4}>
                <Fill color="rgba(0,0,0,0)" />
            </BackdropBlur>

            <BlurMask blur={252} style="normal" />
            <Group>
                <Blur blur={55} />
                <Offset x={134} y={144} />
                <Circle cx={r} cy={r} r={r} color="#B9000B" />
            </Group>
            <Group>
                <Blur blur={55} />
                <Offset x={134} y={324} />
                <Circle cx={r} cy={r} r={r} color="#1167B1" />
            </Group>
            <Group>
                <Blur blur={55} />
                <Offset x={134} y={504} />
                <Circle cx={r} cy={r} r={r} color="#9F2312" />
            </Group>
        </Canvas>
    )
}

export default Glassmorphism