import styled from "@emotion/styled";

interface PhotoContainerProps {
    selected: boolean;
}

export const PhotoContainer = styled.div<PhotoContainerProps>`
    border: ${(props) => (props.selected ? "2px solid red" : "none")};
`;