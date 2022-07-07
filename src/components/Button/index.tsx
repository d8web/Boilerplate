import * as C from "./styles";

type Props = {
    border: string;
    color: string;
    height: string;
    onPress: () => void;
    radius: string
    width: string;
    title: string;
}

const Button: React.FC<Props> = (props: Props) => {
    return (
        <C.Button
            title={props.title}
            onPress={props.onPress}
        />
    );
}

export default Button;
